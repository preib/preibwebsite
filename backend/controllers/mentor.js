const database = require('../data/processors/mentor');
const { NOT_FOUND } = require('../constants');
const { createController, IntegerArg, StringArg, QUERY, StringArrayArg } = require('./preprocessor/paramprocessor');
const { JoinedStringArray } = require('./preprocessor/argtypes');
const { resWriteSuccess, resWriteFail } = require('./response');


const getMentors = createController([
    { name: 'limit', type: IntegerArg, group: QUERY },
    { name: 'offset', type: IntegerArg, group: QUERY }
], async (req, res) => {
    try {
        let { limit, offset } = req.parsedQuery;
        const mentors = await database.getAllMentors(limit, offset);
        resWriteSuccess(res, mentors);
    } catch (err) {
        resWriteFail(res, 'Internal Server Error', 500);
        console.error(err);
    }
}, 'all');

const getRandomMentors = createController({ name: 'limit', type: IntegerArg, group: QUERY }, async (req, res) => {
    try {
        let { limit } = req.parsedQuery;
        const mentors = await database.getRandomMentors(limit);
        resWriteSuccess(res, mentors);
    } catch (err) {
        resWriteFail(res, 'Internal Server Error', 500);
        console.error(err);
    }
});

const getByUUID = createController({ name: 'uuid', type: StringArg }, async (req, res) => {
    let { uuid } = req.parsedParams;
    try {
        const mentor = await database.getByUUID(uuid);
        resWriteSuccess(res, mentor);
    } catch (err) {
        if (err == NOT_FOUND) {
            resWriteFail(res, 'Mentor with id `uuid` does not exist', 404);
        } else if (err.errno == 1411) {
            resWriteFail(res, 'It seems you are tried to guess an ID. Please stop.', 400);
        } else {
            resWriteFail(res, 'Internal Server Error', 500);
            console.error(err);
        }
        
    }
}, 'uuid');

const searchMentors = createController([
    { name: 'country', type: StringArg, group: QUERY, required: false },
    { name: 'city', type: StringArg, group: QUERY, required: false },
    { name: 'school', type: StringArg, group: QUERY, required: false },
    { name: 'languages', type: StringArrayArg, group: QUERY, required: false },
    { name: 'courses', type: StringArrayArg, group: QUERY, required: false },
    { name: 'limit', type: IntegerArg, group: QUERY },
    { name: 'offset', type: IntegerArg, group: QUERY }
], async (req, res) => {
    try {
        const {
            limit,
            offset
        } = req.parsedQuery;
        delete req.parsedQuery.limit;
        delete req.parsedQuery.offset;

        if (Object.keys(req.parsedQuery).length == 0) {
            resWriteFail(res, 'No filters specified', 400);
            return;
        }
        const mentors = await database.searchMentors(req.parsedQuery, limit, offset);
        resWriteSuccess(res, mentors);
    } catch (err) {
        if (err == NOT_FOUND) {
            resWriteFail(res, 'No mentors match criteria', 404);
        } else {
            resWriteFail(res, 'Internal Server Error', 500);
            console.error(err);
        }
    }
}, 'search');

module.exports = {
    getMentors,
    getRandomMentors,
    getByUUID,
    searchMentors
};
