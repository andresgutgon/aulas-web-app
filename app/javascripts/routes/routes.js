/** @jsx React.DOM */
'use strict';

var Router = require('react-router')
  , AppRoutes
  , Route = Router.Route
  , Routes = Router.Routes
  , AppLayout = require('../components/layout')
  , Sandbox = require('../sections/sandbox/routes');

module.exports = (
  <Route handler={AppLayout}>
    {Sandbox()}
  </Route>
);

