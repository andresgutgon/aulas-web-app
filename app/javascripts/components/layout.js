/** @jsx React.DOM */
'use strict';

var Layout
  , React = require('react')
  , Router = require('react-router')
  , Link = Router.Link;

Layout = React.createClass({
  render: function() {
    return (
      <div>
        <Link to='sandbox_index'>Go to sandbox</Link>
        {this.props.activeRouteHandler()}
      </div>
    );
  }
});

module.exports = Layout;
