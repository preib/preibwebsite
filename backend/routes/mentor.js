const { Router } = require('express');
const { searchMentors, getMentors, getByUUID } = require('../controllers/mentor');

const mentorRouter = Router();

mentorRouter.get('/', getMentors);
mentorRouter.get('/search', searchMentors);
mentorRouter.get('/:uuid', getByUUID);

module.exports = mentorRouter;
