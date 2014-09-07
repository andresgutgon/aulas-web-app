/** @jsx React.DOM */

var React = require('react')
  , Fluxxor = require('fluxxor')
  , FluxMixin = Fluxxor.FluxMixin(React)
  , FluxChildMixin = Fluxxor.FluxChildMixin(React)
  , StoreWatchMixin = Fluxxor.StoreWatchMixin
  , actions
  , Aulas = require('./aulas')
  , Stores = require('./stores/index')
  , Actions = require('./actions/index')
  , Routes = require('react-router').Routes
  , Route = require('react-router').Route
  , Link = require('react-router').Link;

var flux = new Fluxxor.Flux(Stores, Actions);

window.React = React;
window.Aulas = Aulas;
window.flux = flux;


var Application = React.createClass({
  mixins: [
    FluxMixin
  , StoreWatchMixin('todo')
  ]
, getInitialState: function () {
    return { newTodoText: '' };
  }

, getStateFromFlux: function () {
    var flux = this.getFlux();
    return {
      todoData: flux.store("todo").getState(),
    };
  },

  render: function () {
    return (
      <div>
        <ul>
          {this.state.todoData.todos.map(function (todo, i) {
            return <li key={i}><TodoItem todo={todo} /></li>;
          })}
        </ul>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" size="30" placeholder="New Todo"
                 value={this.state.newTodoText}
                 onChange={this.handleTodoTextChange} />
          <input type="submit" value="Add Todo" />
        </form>
        <button onClick={this.clearCompletedTodos}>Clear Completed</button>
        <br />
        <Link to="foo">Foo route</Link>

        <hr />

        {this.props.activeRouteHandler() || 'No route clicked'}
      </div>
    );
  },

  handleTodoTextChange: function(e) {
    this.setState({newTodoText: e.target.value});
  },

  onSubmitForm: function(e) {
    e.preventDefault();
    if (this.state.newTodoText.trim()) {
      this.getFlux().actions.todo.add(this.state.newTodoText);
      this.setState({newTodoText: ""});
    }
  },

  clearCompletedTodos: function(e) {
    this.getFlux().actions.todo.clear();
  }
});

var TodoItem = React.createClass({
  mixins: [FluxChildMixin],

  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render: function() {
    var style = {
      textDecoration: this.props.todo.complete ? "line-through" : ""
    };

    return <span style={style} onClick={this.onClick}>{this.props.todo.text}</span>;
  },

  onClick: function() {
    this.getFlux().actions.todo.toggle(this.props.todo);
  }
});

var Foo = React.createClass({
  mixins: [FluxChildMixin]
, render: function() {
    return <span>Hello router</span>;
  }
});

React.renderComponent((
  <Routes location='history'>
    <Route handler={Application} flux={flux}>
      <Route name='foo' path='/foo' handler={Foo} flux={flux} />
    </Route>
  </Routes>
), document.getElementById("app"));

// React.renderComponent(<Application flux={flux} />, document.getElementById("app"));
