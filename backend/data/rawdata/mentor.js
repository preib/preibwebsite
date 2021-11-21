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

const searchMentors = (partial, limit, offset) => {
    return new Promise( (resolve, reject) => {
        const [ query, params ] = queries.generateSearchFieldsQuery(partial);

        database.query(query, [ ...params, limit, offset ], (err, rows) => {
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
    searchMentors
}
