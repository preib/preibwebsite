const express = require('express');
const app = express();
const coreRouter = require('./routes');

let config;
if (process.env == 'production') {
    config = require('./config');
} else {
    config = require('./debugconfig');
}

app.use('/api', coreRouter);

app.listen(config.port, () => {
    console.log(`API Server listening on ${config.port}...`)
});
