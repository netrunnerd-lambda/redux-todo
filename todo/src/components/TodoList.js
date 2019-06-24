import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markComplete } from '../store/actions';
import Todo from './Todo';

class TodoList extends Component {
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
