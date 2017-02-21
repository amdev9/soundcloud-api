var _ = require('lodash')
var Promise = require('bluebird');
var request = require('request-promise');
var querystring = require('querystring');

function Oauth2() {}
module.exports = Oauth2;

Oauth2.post = function(scope, grant_type) {
  var Constants = require('./constants')
  var Helpers = require('../helpers')
  endpoint = Constants.API_URL + Constants.ROUTES.oauth2;
  var client_data = querystring.stringify({ 
    client_id: Constants.CLIENT.ID
  });
  oauth_cli = _.template(endpoint)({'client_id': client_data });
  
  var FormData = require('form-data');
  var fs = require('fs');
  var boundary = Helpers.generateUUID(true);
  
  var form = {
    'client_id': Constants.CLIENT.ID,
    'scope': scope,
    'client_secret': Constants.CLIENT.SECRET,
    'grant_type': grant_type
  }

  var options = {
    method: 'POST',
    uri: oauth_cli,
    formData: form,
    headers: {
      'Connection': 'Keep-Alive',
      'Accept': 'application/json',
      'App-Version': '484',
      'App-Environment': 'prod',
      'UDID': Helpers.generateUUID(false),
      'ADID': Helpers.generateUUID(true),
      'ADID-TRACKING': true,
      'Content-type': 'multipart/form-data; boundary=' + boundary,
      // 'Content-Length': form.length,
    },
    json: true
  };
  return request(options);
};


