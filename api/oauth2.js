var _ = require('lodash')
var Promise = require('bluebird');
var request = require('request-promise');

function Oauth2(scope, grant_type) {
  var Constants = require('./constants')
  var Helpers = require('../helpers')

  endpoint = Constants.API_URL + Constants.ROUTES.oauth2;
  oauth_cli = _.template(endpoint)({'client_id': Constants.CLIENT.ID });
 
  console.log(oauth_cli);
  console.log(Helpers.generateUUID(false));
  console.log(Helpers.generateUUID(true));

  var FormData = require('form-data');
  var fs = require('fs');
  var boundary = Helpers.generateUUID(true);
  var form = new FormData();
 
  form._boundary = boundary + "--";

  form.append('client_id', Constants.CLIENT.ID );
  form.append('scope', scope);
  form.append('client_secret', Constants.CLIENT.SECRET);
  form.append('grant_type', grant_type);
 
  // console.log(form);

  var options = {
    uri: oauth_cli,
    // formData: form,
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
      // 'Content-Length': form.length,
      // 'Cookie2': $Version=1',
      'Accept-Encoding': 'gzip',
    },
    json: true // Automatically parses the JSON string in the response
  };

  request(options)
    .then(function (repos) {
      console.log(repos.body);
    })
    .catch(function (err) {
      console.log(err);
    });

}

module.exports = Oauth2;