 
var _ = require('lodash')
var Promise = require('bluebird');
var request = require('request-promise');
var querystring = require('querystring');
 
function Users() {}
module.exports = Users;

Users.post = function(access_token, email, password, month, date_of_birth) {
    
  var Constants = require('./constants')
  var Helpers = require('../helpers')
  endpointTemplate = Constants.API_URL + Constants.ROUTES.users;
  var client_data = querystring.stringify({ 
    client_id: Constants.CLIENT.ID
  });
  endpoint = _.template(endpointTemplate)({'client_id': client_data });

  var boundary = Helpers.generateUUID(true);
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
      // 'Device-Locale': 'en-US',
      'UDID': Helpers.generateUUID(false),
      'ADID': Helpers.generateUUID(true),
      'ADID-TRACKING': true,
      'Content-type': 'multipart/form-data; boundary=' + boundary,
      'Authorization': 'OAuth ' + access_token
    },
    json: true  
  };
  return request(options);
};

