var app = require('../../index');
var expect = require('chai').expect;
var request = require('supertest');


describe('test', function () {
  it ('tests', function (done) {
    request(app)
      .get('/api/v1/users')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) {
          console.log('you have fucked up.');
          done(err);
        } else {
          expect(res.body.users.length).to.equal(3);
          done();
        }
      })
  });
});