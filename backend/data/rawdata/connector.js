const mysql = require('mysql2');

const config = require('../../config');

const db = mysql.createPool(config.mysqlConfig);
// db.connect();
db.query('select 1 + 1', (err, rows) => { /* */ });
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
