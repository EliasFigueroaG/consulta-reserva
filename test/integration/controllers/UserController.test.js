var request = require('supertest');
var supertest = require("supertest");
var sails = require('sails');
var server = supertest.agent("http://localhost:1337");

describe('userController', function() {

  describe('post user pass login', function() {
    it('Deberia retornar ok con cuenta valida', function (done) {
      server
        .post('/login')
        .send({ email: 'koreano@gmail.com', password: 'koreano' })
        .expect(200,done);

    });
    it('Deberia retornar badRequest con usuario no valido', function (done) {
      server
        .post('/login')
        .send({ email: 'koreano@gmail.com', password: 'koreano2' })
        .expect(400,done);

    });


  });

});
