const rawData = require('../rawdata/notes');
const { NOT_FOUND } = require('../../constants');
const Notes = require('../models/Notes');

const mapNotes = (rawNote) => {
    return new Notes(rawNote);
};

const getAllNotes = async (limit, offset, grade) => {
    const rawNotes = await rawData.getAllNotes(limit, offset, grade);
    return rawNotes.map(mapNotes);
};

const getNotesByCourse = async (courseId, limit, offset, grade) => {
    const rawNotes = await rawData.getNotesByCourse(courseId, limit, offset, grade);
    return rawNotes.map(mapNotes);
};

const searchNotesByCourse = async (courseId, limit, offset, grade) => {
    const rawNotes = await rawData.getNotesByCourse(courseId, limit, offset, grade);
    return rawNotes.map(mapNotes);
}

const getNotesByGrade = async (grade, limit, offset) => {
    const rawNotes = await rawData.getNotesByGrade(grade, limit, offset);
    return rawNotes.map(mapNotes);
};

const getNotesById = async (uuid) => {
    const rawNote = await rawData.getNoteById(uuid);
    if (rawNote.length === 0) {
        throw NOT_FOUND;
    }
    return mapNotes(rawNote[0]);
};

module.exports = {
    getAllNotes,
    getNotesByGrade,
    getNotesById,
    getNotesByCourse,
    searchNotesByCourse
};
