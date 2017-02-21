var soundCli = require("./index");

var email = 'rabeccavance95@gmail.com';
var password = 'EKZ84D5Q';
var month = '3';
var date_of_birth = '1995';

soundCli.Oauth2.post('signup', 'client_credentials')
  .then(function (res) {
    return res.access_token;
  })
  .then(function(token) {
    return soundCli.Users.post(token, email, password, month, date_of_birth);
  })
  .then(function(res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);  
  });
