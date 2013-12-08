var request = require('supertest');
var express = require('express');
var app = require(__dirname + '/../lib/server.js')(express);

describe('GET /', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/')
      .expect(200, '{ "response": "OK" }')
      .end(function(err, res) {
        if (err) return done(err);
        done()
      });
  })
});
