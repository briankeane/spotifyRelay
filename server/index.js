'use strict';

// set default node environment to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// export the application
exports = module.exports = require('./app');