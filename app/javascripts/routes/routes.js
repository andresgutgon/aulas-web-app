/** @jsx React.DOM */
'use strict';

var Router = require('react-router')
  , AppRoutes
  , Route = Router.Route
  , Routes = Router.Routes
  , AppLayout = require('../components/layout')
  , Template = require('../sections/template/routes');

module.exports = (
  <Route handler={AppLayout}>
    {Template()}
  </Route>
);

