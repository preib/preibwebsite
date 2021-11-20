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
FROM mentors m;`

const selectAll = `${fullMentorSelectBase};`;

// queryParams [limit, offset]
const limitedSelect = `${fullMentorSelectBase}
LIMIT ?
OFFSET ?;`

// queryParams [ country, city, school, [languages], [courses], limit, offset ]
const searchAllFields = `${fullMentorSelectBase}
WHERE
    m.country LIKE ? OR
    m.city LIKE ? OR
    m.school LIKE ? OR
    languages LIKE ? OR
    courses LIKE ?;
LIMIT ?
OFFSET ?;`

module.exports = {
	selectAll,
    limitedSelect,
    searchAllFields
}