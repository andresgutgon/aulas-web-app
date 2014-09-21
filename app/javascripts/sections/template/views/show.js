/** @jsx React.DOM */
'use strict';

var Index
  , Router = require('react-router')
  , React = require('react')
  , TemplateModel = require('../../../models/template')
  , TemplatesCollection = require('../../../collections/templates');

Index = React.createClass({
  mixins: [Router.AsyncState]
, statics: {
    getInitialAsyncState: function (params, query, setState) {
      return {
        template: new TemplateModel({id: params.templateId}).fetch()
      };
    }
  }
, getInitialState: function () {
    return {
      template: null
    };
  }
, render: function () {
    if (!this.state.template) {
      return (
        <div>Loading template...</div>
      );
    }

    var template = new TemplateModel(this.state.template);

    return (
      <div>
        <h1>{template.get('name')}</h1>
        <p>Este es su identificador: <strong>{template.get('identifier')}</strong></p>
      </div>
    );
  }
});

module.exports = Index;
