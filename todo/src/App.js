import React, { Component } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <>
        <TodoForm />
        <TodoList />
      </>
    );
  }
}

export default App;
