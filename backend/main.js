const express = require('express');
const app = express();
const coreRouter = require('./routes');
const path = require("path");
const config = require('./config');

console.log(process.env);

app.use(express.static(path.join(__dirname, "public")));
app.use('/api', coreRouter);

console.log(config.port);

app.listen(config.port, () => {
    console.log(`API Server listening on ${config.port}...`)
});
