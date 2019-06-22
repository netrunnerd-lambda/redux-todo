import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, clearCompleted } from '../actions';

class TodoForm extends Component {
  state = {
    input: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.input)
      this.props.addTodo(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <form className="input" onSubmit={this.handleSubmit}>
        <input
          autoFocus
          name="input"
          onChange={this.handleChange}
          type="text"
          value={this.state.input}
        />
        <button type="submit">
          ＋
        </button>
        <button onClick={this.props.clearCompleted}>
          －
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo, clearCompleted }
)(TodoForm);
