import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './style.css';
import App from './App';

const rootElement = document.getElementById('root'),
      reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      store = createStore(
        rootReducer,
        reduxDevTools
      );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
