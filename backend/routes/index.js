const { Router } = require('express');
const mentorRouter = require('./mentor');
const mentorsReviewsRouter = require('./mentor_reviews');
const emailRouter = require('./email');

const coreRouter = Router();

coreRouter.use('/reviews/mentors', mentorsReviewsRouter);
coreRouter.use('/mentors', mentorRouter);
coreRouter.use('/contact', emailRouter);

module.exports = coreRouter;
