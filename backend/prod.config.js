require("dotenv").config()
console.log(process.env.SQL_PASS);

module.exports.mysqlConfig = {
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS || "",
    database: process.env.SQL_DB,
    port: 3306
};

module.exports.port = parseInt(process.env.PORT);
module.exports.debugMode = Boolean(process.env.DEBUG || false);
module.exports.email = process.env.EMAIL;
module.exports.password = process.env.EMAIL_PASS;