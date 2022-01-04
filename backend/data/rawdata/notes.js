const database = require('./connector');
const queries = require('./queries/notes');

const getAllNotes = (limit, offset, grade) => {
    return new Promise( (resolve, reject) => {
        const query = grade === undefined ? queries.limitedSelect : queries.limitedSelectFilterGrade;
        const params = grade === undefined ? [limit, offset] : [grade, limit, offset];
        database.query(query, params, (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

const getNotesByCourse = (courseId, limit, offset, grade) => {
    return new Promise( (resolve, reject) => {
        const query = grade === undefined ? queries.limitedSelectByCourse : queries.limitedSelectCourseFilterGrade;
        const params = grade === undefined ? [courseId, limit, offset] : [courseId, grade, limit, offset];
        database.query(query, params, (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

const searchNotesByCourse = (courseName, limit, offset, grade) => {
    return new Promise( (resolve, reject) => {
        const query = grade === undefined ? queries.limitedSearchByCourse : queries.limitedSearchCourseFilterGrade;
        const params = grade === undefined ? [`%${courseName}%`, limit, offset] : [`%${courseName}%`, grade, limit, offset];
        database.query(query, params, (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

const getNotesByGrade = (grade, limit, offset) => {
    return new Promise( (resolve, reject) => {
        database.query(queries.limitedSelectByGrade, [grade, limit, offset], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

const getNoteById = (uuid) => {
    return new Promise( (resolve, reject) => {
        database.query(queries.selectById, [uuid], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

module.exports = {
    getAllNotes,
    getNoteById,
    getNotesByGrade,
    getNotesByCourse,
    searchNotesByCourse,
};
