var _ = require('lodash');
var soundCli = require("./index");

 
soundCli.Oauth2.post('signup', 'client_credentials')
  .then(function (res) {
    return res.access_token;
  })
  .then(function(token) {
    return soundCli.Users.post(token);
  })
  .then(function(res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);  
  });
