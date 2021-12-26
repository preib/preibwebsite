const rawData = require('../rawdata/mentor');
const { NOT_FOUND } = require('../../constants');
const Mentor = require('../models/Mentor');

const mapMentor = (rawMentor) => {
    return new Mentor({
        ...rawMentor,
        imageUrl: rawMentor.image_url,
        bannerUrl: rawMentor.banner_url,
        description: rawMentor.mentor_description,
        languages: rawMentor.languages ? rawMentor.languages.split('|') : [],
        courses: rawMentor.courses ? rawMentor.courses.split('|').map((course_item) => {return {courseName: course_item.split('+')[0], strength: Number.parseInt(course_item.split('+')[1])}}) : {}
    });
};

const getAllMentors = async (limit, offset) => {
    const rawMentors = await rawData.getAllMentors(limit, offset);
    return rawMentors.map(mapMentor);
};

const getRandomMentors = async (limit) => {
    const rawMentors = await rawData.getRandomMentors(limit);
    return rawMentors.map(mapMentor);
}

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
    getRandomMentors,
    getByUUID,
    searchMentors
};
