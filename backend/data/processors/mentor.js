const rawData = require('../rawdata/mentor');
const { NOT_FOUND } = require('../../constants');
const Mentor = require('../models/Mentor');

const mapMentor = (rawMentor) => {
    return new Mentor({
        ...rawMentor,
        languages: rawMentor.languages.split('|'),
        courses: rawMentor.courses.split('|')
    });
};

const getAllMentors = async (limit, offset) => {
    const rawMentors = await rawData.getAllMentors(limit, offset);
    return rawMentors.map(mapMentor);
};

const searchMentors = async (country, city, school, languages, courses, limit, offset) => {
    const rawMentors = await rawData.searchMentors(country, city, school, languages, courses, limit, offset);
    if (rawMentors.length == 0) {
        throw NOT_FOUND;
    }
    return rawMentors.map(mapMentor);
};

module.exports = {
    getAllMentors,
    searchMentors
};
