let exports: any;
if (process.env.NODE_ENV == "production") {
    exports = require('./prod-config');
} else {
    exports = require('./debug-config');
}

export const apiUrl = exports.apiUrl;
export const baseUrl = exports.baseUrl;