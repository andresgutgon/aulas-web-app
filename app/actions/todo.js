'use strict';

var Todo
  , Katuma = require('../katuma');

Todo = {
  add: function (text) {
    this.dispatch(Katuma.Events.todo.ADD_TODO, {text: text});
  }
, toggle: function (todo) {
    this.dispatch(Katuma.Events.todo.TOGGLE_TODO, {todo: todo});
  }
, clear: function () {
    this.dispatch(Katuma.Events.todo.CLEAR_TODOS);
  }
};

module.exports = Todo;
