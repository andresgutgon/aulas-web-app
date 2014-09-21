/** @jsx React.DOM */
'use strict';

var Router = require('react-router')
  , Route = Router.Route
  , routes;

routes = function() {
  return [
    <Route name='tempates' handler={require('./views/index')} />
  , <Route name='tempate' path='tempates/:templateId' handler={require('./views/show')} />
  ]
};

module.exports = routes;


