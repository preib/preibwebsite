const { Router } = require('express');
const { searchMentors, getMentors, getByUUID } = require('../controllers/mentor');

const mentorRouter = Router();

mentorRouter.get('/', getMentors);
mentorRouter.get('/:uuid', getByUUID);
mentorRouter.get('/search', searchMentors);

module.exports = mentorRouter;
