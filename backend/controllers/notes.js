const database = require('../data/processors/notes');
const { NOT_FOUND } = require('../constants');
const { createController, IntegerArg, StringArg, QUERY } = require('./preprocessor/paramprocessor');
const { resWriteSuccess, resWriteFail } = require('./response');

const getAllNotes = createController([
        { name: 'limit', type: IntegerArg, group: QUERY },
        { name: 'offset', type: IntegerArg, group: QUERY },
        { name: 'grade', type: IntegerArg, group: QUERY, required: false }
    ],
    async (req, res) => {
        try {
            let { limit, offset, grade } = req.parsedQuery;
            const notes = await database.getAllNotes(limit, offset, grade);
            resWriteSuccess(res, notes);
        } catch (err) {
            resWriteFail(res, 'Internal Server Error', 500);
            console.error(err);
        }
    },
);

const getNotesByGrade = createController([
    { name: 'grade', type: IntegerArg },
    { name: 'limit', type: IntegerArg, group: QUERY },
    { name: 'offset', type: IntegerArg, group: QUERY },
    ],
    async (req, res) => {
        try {
            let { grade } = req.parsedParams;
            let { limit, offset } = req.parsedQuery;
            const notes = await database.getNotesByGrade(grade, limit, offset);
            resWriteSuccess(res, notes);
        } catch (err) {
            resWriteFail(res, 'Internal Server Error', 500);
            console.error(err);
        }
    },
);

const getNotesByCourse = createController([
    { name: 'course', type: Integer, group: QUERY },
    { name: 'limit', type: IntegerArg, group: QUERY },
    { name: 'offset', type: IntegerArg, group: QUERY },
    { name: 'grade', type: IntegerArg, group: QUERY, required: false }
    ],
    async (req, res) => {
        try {
            let { course } = req.parsedParams;
            let { limit, offset, grade } = req.parsedQuery;
            const notes = await database.getNotesByCourse(course, limit, offset, grade);
            resWriteSuccess(res, notes);
        } catch (err) {
            resWriteFail(res, 'Internal Server Error', 500);
            console.error(err);
        }
    },
);

const searchNotesByCourse = createController([
        { name: 'course', type: StringArg },
        { name: 'limit', type: IntegerArg, group: QUERY },
        { name: 'offset', type: IntegerArg, group: QUERY },
        { name: 'grade', type: IntegerArg, group: QUERY, required: false }
    ],
    async (req, res) => {
        try {
            let { course } = req.parsedParams;
            let { limit, offset, grade } = req.parsedQuery;
            const notes = await database.searchNotesByCourse(course, limit, offset, grade);
            resWriteSuccess(res, notes);
        } catch (err) {
            resWriteFail(res, 'Internal Server Error', 500);
            console.error(err);
        }
    }
);

const getByUUID = createController({ name: 'uuid', type: StringArg }, async (req, res) => {
    let { uuid } = req.parsedParams;
    try {
        const mentor = await database.getNotesById(uuid);
        resWriteSuccess(res, mentor);
    } catch (err) {
        if (err == NOT_FOUND) {
            resWriteFail(res, `Note with id '${uuid}' does not exist`, 404);
        } else if (err.errno == 1411) {
            resWriteFail(res, 'It seems you are tried to guess an ID. Please stop.', 400);
        } else {
            resWriteFail(res, 'Internal Server Error', 500);
            console.error(err);
        }
        
    }
}, 'uuid');

module.exports = {
    getAllNotes,
    getByUUID,
    getNotesByCourse,
    getNotesByGrade,
    searchNotesByCourse
};
