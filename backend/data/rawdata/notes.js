const database = require('./connector');
const queries = require('./queries/notes');

const getAllNotes = (limit, offset) => {
    return new Promise( (resolve, reject) => {
        database.query(queries.limitedSelect, [limit, offset], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

const getNotesByCourse = (courseId, limit, offset) => {
    return new Promise( (resolve, reject) => {
        database.query(queries.limitedSelectByCourse, [courseId, limit, offset], (err, rows) => {
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
};
