'use strict';

var Todo
  , Aulas = require('../aulas');

Todo = {
  add: function (text) {
    this.dispatch(Aulas.Events.todo.ADD_TODO, {text: text});
  }
, toggle: function (todo) {
    this.dispatch(Aulas.Events.todo.TOGGLE_TODO, {todo: todo});
  }
, clear: function () {
    this.dispatch(Aulas.Events.todo.CLEAR_TODOS);
  }
};

module.exports = Todo;
