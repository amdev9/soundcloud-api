 
var _ = require('lodash')
var Promise = require('bluebird');
var request = require('request-promise');

function Users() {

}

module.exports = Users;

Users.post = function(access_token) {
    
  var Constants = require('./constants')
  var Helpers = require('../helpers')
  endpointTemplate = Constants.API_URL + Constants.ROUTES.users;
  endpoint = _.template(endpointTemplate)({'client_id': Constants.CLIENT.ID });
   
  var fs = require('fs');
  var boundary = Helpers.generateUUID(true);
  
  var password = 'testersmans';
  var month = 2;
  var date_of_birth = 1991;
  var email = 'koro3asdasd@gmail.com';
  var gender = 'female';

  var form = {
    'user[terms_of_use]': 1,
    'user[password_confirmation]': password,
    'user[gender]': gender,
    'user[date_of_birth][year]': date_of_birth,
    'user[email]': email,
    'user[date_of_birth][month]': month,
    'user[password]': password
  }

  var options = {
    method: 'POST',
    uri: endpoint,
    formData: form,
    headers: {
      'Connection': 'Keep-Alive',
      'Accept': 'application/json',
      'App-Version': '484',
      'App-Environment': 'prod',
      'Device-Locale': 'en-US',
      'UDID': Helpers.generateUUID(false),
      'ADID': Helpers.generateUUID(true),
      'ADID-TRACKING': true,
      'Content-type': 'multipart/form-data; boundary=' + boundary,
      'Content-Length': form.length,
      'Authorization': 'OAuth ' + access_token
    },
    json: true // Automatically parses the JSON string in the response
  };
  return request(options);
};

