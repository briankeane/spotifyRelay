/**
 * Express configuration -- takes the app as an argument and adds all the middleware
 *                          to it
 */

'use strict';

const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./environment');

module.exports.default = function (app) {
  app.use(morgan('dev'));
  app.use(bodyParser.json({ type: '*/*' }));
}