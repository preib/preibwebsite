const { Router } = require('express');
const mentorRouter = require('./mentor');

const coreRouter = Router();

coreRouter.use('/mentors', mentorRouter);

module.exports = coreRouter;
