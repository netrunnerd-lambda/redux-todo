import React from 'react';

const Todo = ({ id, completed, text, onClick }) => (
  <section
    className={`todo ${completed ? 'todo-complete' : ''}`} 
    onClick={onClick}
  >
    {completed ? ' ' : text}
  </section>
);

export default Todo;
