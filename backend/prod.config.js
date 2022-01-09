module.exports.mysqlConfig = {
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DB
};

module.exports.port = parseInt(process.env.PORT);
module.exports.debugMode = process.env.DEBUG || false;
module.exports.email = process.env.EMAIL;
module.exports.password = process.env.EMAIL_PASS;