if (process.env == "production") {
    module.exports = require('./prod-config');
} else {
    module.exports = require('./debug-config');
}
