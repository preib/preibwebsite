const express = require('express');
const app = express();
const coreRouter = require('./routes');
require("dotenv").config();
const config = require('./config');
const db = require('./data/rawdata/connector');

app.use('/api', coreRouter);

app.listen(config.port, () => {
    setInterval(function () {
        db.query('SELECT 1');
    }, 5000);
    console.log(`API Server listening on ${config.port}...`)
});
