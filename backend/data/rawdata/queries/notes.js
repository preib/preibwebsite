const mentorsTable = require('../mentor');

const notesTable = 'notes';

const selectNotesBase = 
`SELECT
    BIN_TO_UUID(id) AS id,
    (SELECT CONCAT(firstName, " ", lastName) FROM mentors WHERE id = creator) AS creator,
    creationDate,
    grade,
    course,
    (SELECT course_name FROM courses WHERE id = course) AS courseName,
    mark,
    preview
FROM
    ${notesTable}`;

const limitedSelect = `${selectNotesBase}
LIMIT ?
OFFSET ?;`;

const limitedSelectFilterGrade = `${selectNotesBase}
WHERE
    grade = ?
LIMIT ?
OFFSET ?;`

const limitedSelectByGrade = `${selectNotesBase}
WHERE
    grade = ?
LIMIT ?
OFFSET ?;`;

const limitedSelectByCourse = `${selectNotesBase}
WHERE
    course = ?
LIMIT ?
OFFSET ?;`;

const limitedSelectCourseFilterGrade = `${selectNotesBase}
WHERE
    course = ? AND
    grade = ?
LIMIT ?
OFFSET ?;`;

const limitedSearchByCourse = `${selectNotesBase}
WHERE
    courseName LIKE ?
LIMIT ?
OFFSET ?;`

const limitedSearchCourseFilterGrade = `${selectNotesBase}
WHERE
    courseName LIKE ? AND
    grade = ?
LIMIT ?
OFFSET ?;`;

const selectById = `${selectNotesBase}
WHERE
    id = UUID_TO_BIN(?);`;

module.exports = {
    limitedSelect,
    limitedSelectByGrade,
    limitedSelectByCourse,
    selectById,
    limitedSearchByCourse,
    limitedSelectFilterGrade,
    limitedSelectCourseFilterGrade,
    limitedSearchCourseFilterGrade
};
