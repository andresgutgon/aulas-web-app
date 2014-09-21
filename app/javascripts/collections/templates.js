'use strict';

var Backbone = require('backbone')
  , Templates;

Templates = {
  model: require('../models/template.js')
, url: '/api/1/templates'
};

module.exports = Backbone.Collection.extend(Templates);
