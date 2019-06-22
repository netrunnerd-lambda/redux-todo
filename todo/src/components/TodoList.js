import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markComplete } from '../actions';
import Todo from './Todo';

class TodoList extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.todos !== prevProps.todos)
      window.localStorage.setItem('todos', JSON.stringify(this.props.todos));
  }

  render() {
    const { markComplete,
            todos } = this.props;

    return (
      <main className="list">
        {todos.map(todo => <Todo
                             key={todo.id}
                             onClick={_ => markComplete(todo.id)}
                             {...todo}
                           />)}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  todos: state
});

export default connect(
  mapStateToProps,
  { markComplete }
)(TodoList);
