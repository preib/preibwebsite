const { Router } = require('express');
const { searchMentors, getMentors } = require('../controllers/mentor');

const mentorRouter = Router();

mentorRouter.get('/', getMentors);
mentorRouter.get('/search', searchMentors);

module.exports = mentorRouter;
