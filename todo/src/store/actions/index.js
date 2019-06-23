import { v4 } from 'uuid';

import { ADD_TODO,
         CLEAR_COMPLETED,
         MARK_COMPLETE } from './actionTypes';

export const addTodo = text => {
  const todo = {
    id: v4(),
    completed: false,
    text
  };

  return {
    type: ADD_TODO,
    ...todo
  };
}

export const clearCompleted = _ => ({
  type: CLEAR_COMPLETED
});

export const markComplete = id => ({
  type: MARK_COMPLETE,
  id
});
