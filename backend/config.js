require("dotenv").config();

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod.config');
} else {
    module.exports = require('./debug.config');
}