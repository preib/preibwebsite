const fullMentorSelectBase = `SELECT
	BIN_TO_UUID(id) AS id,
	firstname,
	lastname,
	city,
	country,
	school,
	mentor_description AS description,
	(
		SELECT
			GROUP_CONCAT(l.language_name SEPARATOR '|')
		FROM
			language_mentor_join lmj
		INNER JOIN
			languages l
		ON
			l.id = lmj.language_id
		WHERE
			lmj.mentor_id = m.id
	) AS languages,
	(
		SELECT
			GROUP_CONCAT(c.course_name SEPARATOR '|')
		FROM
			course_mentor_join cmj
		INNER JOIN
			courses c
		ON
			c.id = cmj.course_id
		WHERE
			cmj.mentor_id = m.id
	) AS courses
FROM mentors m`

const selectAll = `${fullMentorSelectBase};`;

// queryParams [limit, offset]
const limitedSelect = `${fullMentorSelectBase}
LIMIT ?
OFFSET ?;`

const likeCountry = `\tm.country LIKE ?`;
const likeCity = `\tm.city LIKE ?`;
const likeSchool =`\tm.school LIKE ?`;
const likeLanguages = `	EXISTS (
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
const likeCourses = `	EXISTS (
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

const keyMap = {
	country: likeCountry,
	city: likeCity,
	school: likeSchool,
	languages: likeLanguages,
	courses: likeCourses
};

// queryParams [ country, city, school, [languages], [courses], limit, offset ]
const generateSearchFieldsQuery = (partial) => {
	const queries = [];
	const params = [];
	for (let key in partial) {
		let param = partial[key];
		if (Array.isArray(param)) {
			params.push(param.join('|'));
		} else {
			params.push(param);
		}
		queries.push(keyMap[key]);
	}

	return [`${fullMentorSelectBase}
	WHERE
	${queries.join(' OR\n') + '\n'}
	LIMIT ?
	OFFSET ?`, params ];
};

module.exports = {
	selectAll,
    limitedSelect,

	likeCountry,
	likeCity,
	likeSchool,
	likeLanguages,
	likeCourses,
	keyMap,
    generateSearchFieldsQuery
};
