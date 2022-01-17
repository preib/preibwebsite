const mentorsTable = 'mentors';

const fullMentorSelectBase = 
`SELECT
	BIN_TO_UUID(id) AS id,
	firstName,
	lastName,
	country,
	mentor_description,
	timezone,
	email,
	ibYear,
	image_url,
	banner_url,
	rating,
	(
		SELECT GROUP_CONCAT(l.language_name SEPARATOR '|')
		FROM language_mentor_join lmj
		INNER JOIN
			languages l
		ON
			l.id = lmj.language_id
		WHERE
			lmj.mentor_id = m.id
	) AS languages,
	(
		SELECT
			GROUP_CONCAT( CONCAT(c.course_name, "+", cmj.confidence) SEPARATOR '|')
		FROM
			course_mentor_join cmj
		INNER JOIN
			courses c
		ON
			c.id = cmj.course_id
		WHERE
			cmj.mentor_id = m.id
	) AS courses
FROM ${mentorsTable} m`;

const selectAll = `${fullMentorSelectBase};`;

const selectById =
`${fullMentorSelectBase}
WHERE
	m.id = UUID_TO_BIN(?);`

// queryParams [limit, offset]
const limitedSelect = `${fullMentorSelectBase}
LIMIT ?
OFFSET ?;`

const randomLimitedSelect = `${fullMentorSelectBase}
ORDER BY RAND()
LIMIT ?;`

const likeCountry = `\tm.country LIKE ?`;
const likeCity = `\tm.city LIKE ?`;
const likeSchool =`\tm.school LIKE ?`;
const likeLanguages = `EXISTS (
		SELECT
			l2.language_name
		FROM
			language_mentor_join lmj2
		INNER JOIN
			languages l2
		ON
			l2.id = lmj2.language_id
		WHERE
			lmj2.mentor_id = m.id AND
			l2.language_name REGEXP ?
	)`;
const likeCourses = `EXISTS (
		SELECT
			c2.course_name
		FROM
			course_mentor_join cmj2
		INNER JOIN
			courses c2
		ON
			c2.id = cmj2.course_id
		WHERE
			cmj2.mentor_id = m.id AND
			c2.course_name REGEXP ?
	)`;
const likeName = `(CONCAT(m.firstname, " ", m.lastname)) LIKE ?`;
const likeTimezone = `m.timezone LIKE ?`;
const likeIbYear = `m.ibYear = ?`;

const keyMap = {
	country: likeCountry,
	languages: likeLanguages,
	courses: likeCourses,
	name: likeName,
	timezone: likeTimezone,
	ibYear: likeIbYear
};

const generateStraightQueries = (partial) => {
	let queries = [];
	let params = [];
	for (let key of ["name", "country", "timezone", "ibYear"]) {
		if (partial[key] != undefined) {
			queries.push(keyMap[key]);
			params.push(`%${partial[key]}%`);
		}
	}
	return { queries, params };
}

const generateArrayQueries = (partial) => {
	let queries = [];
	let params = [];
	for (let key of ["courses", "languages"]) {
		if (partial[key] != undefined) {
			queries.push(keyMap[key]);
			params.push( partial[key].join('|') );
		}
	}
	return { queries, params };
}

const createSearchQuery =  (sQueries, aQueries) => `
${fullMentorSelectBase}
WHERE
	${ sQueries.length > 0 ? '(\n\t' + sQueries.join(' OR\n\t') + '\n\t)' + ( aQueries.length > 0 ? ' AND\n\t' : '\n\t' ) : '' }
	${ aQueries.join(' AND\n\t') }
LIMIT ?
OFFSET ?;
`;

// queryParams [ country, timezone, ibYear, [languages], [courses], limit, offset ]
const generateSearchFieldsQuery = (partial) => {
	let { queries: sQueries, params: sParams } = generateStraightQueries(partial);
	let { queries: aQueries, params: aParams } = generateArrayQueries(partial);
	console.log(createSearchQuery(sQueries, aQueries));
	return [ createSearchQuery(sQueries, aQueries), [ ...sParams, ...aParams ] ];
};

module.exports = {
	mentorsTable,

	selectAll,
    limitedSelect,
	selectById,
	randomLimitedSelect,

	likeCountry,
	likeCity,
	likeSchool,
	likeLanguages,
	likeCourses,
	keyMap,
    generateSearchFieldsQuery
};
