import { ADD_TODO,
         CLEAR_COMPLETED,
         MARK_COMPLETE } from './actionTypes';

export const addTodo = text => ({
  type: ADD_TODO,
  text
});

export const clearCompleted = _ => ({
  type: CLEAR_COMPLETED
});

export const markComplete = id => ({
  type: MARK_COMPLETE,
  id
});
