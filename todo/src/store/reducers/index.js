import { ADD_TODO,
         CLEAR_COMPLETED,
         MARK_COMPLETE } from '../actions/actionTypes';

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      const { id, completed, text } = action;

      return [
        {
          id,
          completed,
          text
        },
        ...state
      ];
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
    case MARK_COMPLETE:
      return state.map(todo => action.id === todo.id ? {...todo, completed: !todo.completed} : todo);
    default:
      return state;
  }
};

export default todos;
