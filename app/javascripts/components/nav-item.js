/** @jsx React.DOM */
'use strict';

var NavItem
  , React = require('react')
  , Link = require('react-router').Link
  , ActiveState = require('react-router').ActiveState;

NavItem = React.createClass({
  mixins: [ ActiveState ]
, getInitialState: function () {
    return { isActive: false };
  }
, updateActiveState: function () {
    this.setState({
      isActive: NavItem.isActive(this.props.to, this.props.params, this.props.query)
    })
  }
, render: function() {
    var className = this.state.isActive ? 'active' : ''
      , link = Link(this.props);

    return (<li className={className}>{link}</li>);
  }
});

module.exports = NavItem;
