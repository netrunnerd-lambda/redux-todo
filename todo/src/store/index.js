import { createStore } from 'redux';
import { loadStorage, updateStorage } from './localStorage';
import rootReducer from './reducers';

const initialState = loadStorage(),
      reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer, initialState, reduxDevTools);

store.subscribe(_ => updateStorage(store.getState()));
