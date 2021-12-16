const { Router } = require('express');
const { contactMentor } = require('../controllers/email');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const emailRouter = Router();

emailRouter.post('/mentor', jsonParser, contactMentor);

module.exports = emailRouter;