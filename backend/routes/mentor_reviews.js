const { Router } = require('express');
const { getTopReview, getWorstReview, getReviewsForMentor } = require('../controllers/mentor_reviews');

const mentorsReviewRouter = Router();

mentorsReviewRouter.get('/top/:uuid', getTopReview);
mentorsReviewRouter.get('/worst/:uuid', getWorstReview);
mentorsReviewRouter.get('/:uuid', getReviewsForMentor);

module.exports = mentorsReviewRouter;
