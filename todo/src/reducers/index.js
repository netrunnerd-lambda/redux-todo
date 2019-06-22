import { ADD_TODO,
         CLEAR_COMPLETED,
         MARK_COMPLETE } from '../actions/actionTypes';

const initialState = JSON.parse(window.localStorage.getItem('todos')) || [];
    
const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        {
          id: Date.now(),
          completed: false,
          text: action.text
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
