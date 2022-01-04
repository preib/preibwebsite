const { Router } = require('express');
const controllers = require('../controllers/notes');

const notesRouter = Router();

notesRouter.get('/', controllers.getAllNotes);
notesRouter.get('/grade/:grade', controllers.getNotesByGrade);
notesRouter.get('/course/:course', controllers.getNotesByCourse);
notesRouter.get('/:uuid', controllers.getByUUID);

module.exports = notesRouter;