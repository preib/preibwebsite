const mysql = require('mysql');

let config;
if (process.env !== 'production' ) {
    config = require('../../debugconfig');
} else {
    config = require('../../config');
}

const db = mysql.createConnection(config.mysqlConfig);
db.connect();

module.exports = db;

// function exitHandler(cleanup, exit) {
//     if (cleanup) {
//         console.log('about to close db');
//         db.end();
//         console.log('db closed');
    
//     }
//     if (exit) {
//         process.exit();
//     }
// }

// process.on('exit', exitHandler.bind(true, false));
// process.on('SIGINT', exitHandler.bind(true, true));
// process.on('SIGUSR1', exitHandler.bind(true, true));
// process.on('SIGUSR2', exitHandler.bind(true, true));
// process.on('uncaughtException', exitHandler.bind(true, true));
