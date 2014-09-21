'use strict';

var Backbone = require("backbone")
  , Template;

Template = {
  urlRoot: '/api/1/templates'
};

module.exports = Backbone.Model.extend(Template);
