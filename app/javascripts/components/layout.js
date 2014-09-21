/** @jsx React.DOM */
'use strict';

var Layout
  , React = require('react')
  , Router = require('react-router')
  , NavItem = require('./nav-item');

/*
*/
Layout = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <ul className="nav nav-pills nav-stacked">
              <NavItem to="/">Home</NavItem>
              <NavItem to='tempates'>Templates</NavItem>
            </ul>
          </div>
          <div className="col-md-10">
            {this.props.activeRouteHandler()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Layout;
