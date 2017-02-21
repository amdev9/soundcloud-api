var _ = require('lodash')
var sound = require("../index")
var should = require('should');
var session;


describe("Public endpoints", function() {
  it("should be possible to post #Oauth2", function(done) {
    sound.Oauth2.post('signup', 'client_credentials')
      .then(function (response) {
        response.access_token.should.be.a.String();
        done();
    })
  });
  // sound.Users.post(token, email, password, month, date_of_birth);
});



