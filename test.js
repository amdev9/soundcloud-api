var _ = require('lodash');
var soundCli = require("./index");

 
soundCli.Oauth2.post('signup', 'client_credentials')
  .then(function (res) {
    console.log(res.access_token);
    soundCli.Users.post(res.access_token);
    
  })
  .catch(function (err) {
    console.log(err);  
  });
