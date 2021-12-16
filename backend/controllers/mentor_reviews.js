const database = require('../data/processors/mentor_reviews');
const { NOT_FOUND } = require('../constants');
const { createController, IntegerArg, StringArg, QUERY } = require('./preprocessor/paramprocessor');
const { resWriteSuccess, resWriteFail } = require('./response');

const getTopReview = createController({ name: 'uuid', type: StringArg }, async (req, res) => {
    let { uuid } = req.parsedParams;
    try {
        const review = await database.getTopReview(uuid);
        resWriteSuccess(res, review);
    } catch (err) {
        if (err == NOT_FOUND) {
            resWriteFail(res, 'No Reviews', 404);
        }
        else if (err.errno == 1411) {
            resWriteFail(res, 'It seems you are tried to guess an ID. Please stop.', 400);
        } else {
            resWriteFail(res, 'Internal Server Error', 502);
            console.error(err);
        }
    };
});

const getWorstReview = createController({ name: 'uuid', type: StringArg }, async (req, res) => {
    let { uuid } = req.parsedParams;
    try {
        const review = await database.getWorstReview(uuid);
        resWriteSuccess(res, review);
    } catch (err) {
        if (err == NOT_FOUND) {
            resWriteFail(res, 'No Reviews', 404);
        }
        else if (err.errno == 1411) {
            resWriteFail(res, 'It seems you are tried to guess an ID. Please stop.', 400);
        } else {
            resWriteFail(res, 'Internal Server Error', 502);
            console.error(err);
        }
    };
});

const getReviewsForMentor = createController([
    { name: 'uuid', type: StringArg },
    { name: 'limit', type: IntegerArg, group: QUERY },
    { name: 'offset', type: IntegerArg, group: QUERY },
], async (req, res) => {
    try {
        const { uuid } = req.parsedParams;
        const {
            limit,
            offset
        } = req.parsedQuery;
        
        const reviews = await database.getReviewsForMentor(uuid, limit, offset);
        resWriteSuccess(res, reviews);
    } catch (err) {
        if (err == NOT_FOUND) {
            resWriteFail(res, 'No Reviews', 404);
        }
        else if (err.errno == 1411) {
            resWriteFail(res, 'It seems you are tried to guess an ID. Please stop.', 400);
        } else {
            resWriteFail(res, 'Internal Server Error', 502);
            console.error(err);
        }
    }
});

module.exports = {
    getReviewsForMentor,
    getTopReview,
    getWorstReview
};
