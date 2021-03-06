import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import Thunk from 'redux-thunk';
import reducer from './reducers';
import App from './App';

import './css/index.css';
import './css/font-awesome.css';
import './css/bulma.css';

const logger = createLogger();

const middlewares = [
  Thunk,
  logger,
];

const store = createStore(
reducer,
compose(applyMiddleware(...middlewares)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
