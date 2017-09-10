module.exports.default = function (app) {
  // Insert Routes Below
  app.use('/api/v1/users', require('./user'));
  app.use('/api/v1/spotify', require('./spotify'));
}