/** @jsx React.DOM */
'use strict';

var Index
  , Router = require('react-router')
  , React = require('react')
  , TemplateModel = require('../../../models/template')
  , TemplatesCollection = require('../../../collections/templates')
  , Link = Router.Link;

Index = React.createClass({
  mixins: [Router.AsyncState]
, statics: {
    getInitialAsyncState: function (params, query, setState) {
      var buffer = '';
      return {
        templates: new TemplatesCollection().fetch() // may be a promise
      };
    }
  }

, getInitialState: function () {
    return {
      templates: null
    };
  }
, render: function () {
    if (!this.state.templates) {
      return (
        <div>Loading templates...</div>
      );
    }

    return (
      <ul>{
        this.state.templates.map(function (template) {
          var template = new TemplateModel(template);
          return <li key={template.id}>
            <Link to='tempate' params={{templateId: template.id}}>{template.get('name')}</Link>
          </li>;
        })
      }</ul>
    );
  }
});

module.exports = Index;
