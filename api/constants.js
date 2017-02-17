var _ = require('lodash');

const ROUTES = {
  oauth2: 'oauth2/token?client_id=<%= client_id %>'
};

const CLIENT = {
  ID: "40ccfee680a844780a41fbe23ea89934",
  SECRET: "26a5240f7ee0ee2d4fa9956ed80616c2"
};

const API_URL = 'https://api.soundcloud.com/';

module.exports = {
  ROUTES: ROUTES,
  CLIENT: CLIENT,
  API_URL: API_URL,
  instagramAgentTemplate: _.template('Instagram <%= version %> Android (<%= agent %>)')
}
