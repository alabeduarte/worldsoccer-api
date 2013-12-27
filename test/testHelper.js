var chai = require('chai');
global.assert = chai.assert;

global.request = function(app) {
  return {
    get: function(url, statusCode, expectedResponse, done) {
      var request = require('supertest');
      request(app)
        .get(url)
        .expect(statusCode, expectedResponse)
        .end(done);
    },
    getWithPredicate: function(url, assertionsOver, done) {
      var request = require('supertest');
      request(app)
        .get(url)
        .end(function(err, res){

          assertionsOver(res);

          if (err) return done(err);
          done();
        });
    }
  };
};