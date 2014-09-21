/** @jsx React.DOM */
'use strict';

var Router = require('react-router')
  , Route = Router.Route
  , Routes = Router.Routes
  , routes;

routes = function() {
  return [
    <Route key='tempates_index' name='tempates_index' path='tempates' handler={require('./views/index')} />
  ]
};

module.exports = routes;


