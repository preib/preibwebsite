const { Router } = require('express');
const {
    contactMentor,
    sendGeneralMessage
} = require('../controllers/email');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const emailRouter = Router();

emailRouter.post('/mentor', jsonParser, contactMentor);
emailRouter.post('/general', jsonParser, sendGeneralMessage);

module.exports = emailRouter;