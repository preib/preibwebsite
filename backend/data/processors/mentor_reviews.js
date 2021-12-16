const rawData = require('../rawdata/mentor_reviews');
const { NOT_FOUND } = require('../../constants');
const MentorReview = require('../models/MentorReview');

const mapReview = (rawReview) => {
    return new MentorReview({ ...rawReview });
};

const getTopReview = async (uuid) => {
    const rawReviews = await rawData.getTopReviewForMentor(uuid);
    if (rawReviews.length == 0) {
        throw NOT_FOUND;
    }
    return rawReviews.map(mapReview)[0];
};

const getWorstReview = async (uuid) => {
    const rawReviews = await rawData.getWorstReviewForMentor(uuid);
    if (rawReviews.length == 0) {
        throw NOT_FOUND;
    }
    return rawReviews.map(mapReview)[0];
};

const getReviewsForMentor = async (uuid, limit, offset) => {
    const rawReviews = await rawData.getReviewsForMentor(uuid, limit, offset);
    if (rawReviews.length == 0) {
        throw NOT_FOUND;
    }
    return rawReviews.map(mapReview);
};

module.exports = {
    getTopReview,
    getWorstReview,
    getReviewsForMentor
};
