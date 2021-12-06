let exports:string;
if (process.env.NODE_ENV == "production") {
    exports = require('./prod-config');
} else {
    exports = require('./debug-config');
}

export const apiUrl = exports;