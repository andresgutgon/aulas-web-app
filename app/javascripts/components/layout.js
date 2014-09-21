/** @jsx React.DOM */
'use strict';

var Layout
  , React = require('react')
  , Router = require('react-router')
  , Link = Router.Link;

Layout = React.createClass({
  render: function() {
    return (
      <div className="js-offcanvas off-canvas">
        <div className="js-offcanvas-content off-canvas-content full-expanded">
          {this.props.activeRouteHandler()}
        </div>

        <button className="js-offcanvas-button open-sidebar"><i className="fa fa-2x fa-bars"></i></button>

        <div className="off-canvas-sidebar full-expanded scroll-y">
          <Link to='tempates_index'>Go to templates</Link>
        </div>
      </div>
    );
  }
});

module.exports = Layout;
