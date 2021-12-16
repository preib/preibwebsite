const database = require('./connector');
const queries = require('./queries/mentor_reviews');

const getTopReviewForMentor = (uuid) => {
    return new Promise( (resolve, reject) => {
        database.query(queries.selectTopReviewByMentor, [uuid], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

const getWorstReviewForMentor = (uuid) => {
    return new Promise( (resolve, reject) => {
        database.query(queries.selectWorstReviewByMentor, [uuid], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

const getReviewsForMentor = (uuid, limit, offset) => {
    return new Promise( (resolve, reject) => {
        database.query(queries.selectLimitedReviewsByMentor, [uuid, limit, offset], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

module.exports = {
    getTopReviewForMentor,
    getWorstReviewForMentor,
    getReviewsForMentor
};
