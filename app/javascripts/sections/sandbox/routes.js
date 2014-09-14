/** @jsx React.DOM */
'use strict';

var Router = require('react-router')
  , Route = Router.Route
  , Routes = Router.Routes
  , routes;

routes = function() {
  return [
    <Route key='sandbox_index' name='sandbox_index' path='sandbox' handler={require('./views/index')} />
  ]
};

module.exports = routes;


