const database = require('./connector');
const queries = require('./queries/mentor');

const getAllMentors = (limit, offset) => {
    return new Promise( (resolve, reject) => {
        database.query(queries.limitedSelect, [limit, offset], (err, rows) => {
            if (err) {
                reject(err)
                return;
            };
            resolve(rows);
        })
    });
};

const searchAllFields = (country, city, school, languages, courses, limit, offset) => {
    return new Promise( (resolve, reject) => {
        database.query(queries.searchAllFields, [country, city, school, languages, courses, limit, offset], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        })
    });
};

module.exports = {
    getAllMentors,
    searchAllFields
}
