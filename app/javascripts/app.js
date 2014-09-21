/** @jsx React.DOM */

var React = require('react')
  , Router = require('react-router')
  , Routes = Router.Routes
  , AppRoutes = require('./routes/routes');

React.renderComponent(<Routes location='history' children={AppRoutes} />, document.getElementById('app'));
