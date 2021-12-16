const { Router } = require('express');
const { searchMentors, getMentors, getByUUID, getRandomMentors } = require('../controllers/mentor');

const mentorRouter = Router();

mentorRouter.get('/', getMentors);
mentorRouter.get('/search', searchMentors);
mentorRouter.get('/random', getRandomMentors);
mentorRouter.get('/:uuid', getByUUID);

module.exports = mentorRouter;
