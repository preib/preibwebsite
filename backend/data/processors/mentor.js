const rawData = require('../rawdata/mentor');
const { NOT_FOUND } = require('../../constants');
const Mentor = require('../models/Mentor');

const mapMentor = (rawMentor) => {
    return new Mentor({
        ...rawMentor,
        description: rawMentor.mentor_description,
        languages: rawMentor.languages ? rawMentor.languages.split('|') : [],
        courses: rawMentor.courses ? rawMentor.courses.split('|') : []
    });
};

const getAllMentors = async (limit, offset) => {
    const rawMentors = await rawData.getAllMentors(limit, offset);
    return rawMentors.map(mapMentor);
};

const getByUUID = async (uuid) => {
    const rawMentor = await rawData.getByUUID(uuid);
    if (rawMentor.length == 0) {
        throw NOT_FOUND;
    }
    return mapMentor(rawMentor[0]);
}

const searchMentors = async (partial, limit, offset) => {
    const rawMentors = await rawData.searchMentors(partial, limit, offset);
    if (rawMentors.length == 0) {
        throw NOT_FOUND;
    }
    return rawMentors.map(mapMentor);
};

module.exports = {
    getAllMentors,
    getByUUID,
    searchMentors
};
