'use strict';

var Fluxxor = require('fluxxor')
  , Aulas = require('../aulas')
  , Todo;

Todo = Fluxxor.createStore({
  initialize: function () {
    this.todos = [];

    this.bindActions(
      Aulas.Events.todo.ADD_TODO, this.onAddTodo
    , Aulas.Events.todo.TOGGLE_TODO, this.onToggleTodo
    , Aulas.Events.todo.CLEAR_TODOS, this.onClearTodos
    );
  },

  onAddTodo: function (payload) {
    this.todos.push({text: payload.text, complete: false});
    this.emit("change");
  },

  onToggleTodo: function (payload) {
    payload.todo.complete = !payload.todo.complete;
    this.emit("change");
  },

  onClearTodos: function () {
    this.todos = this.todos.filter(function (todo) {
      return !todo.complete;
    });
    this.emit("change");
  },

  getState: function () {
    return {
      todos: this.todos
    };
  }
});

module.exports = Todo;



