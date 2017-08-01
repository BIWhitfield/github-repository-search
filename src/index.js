import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import Thunk from 'redux-thunk';
import reducer from './reducers/reducer';
import App from './App';

// import RouterComponent from './RouterComponent';
import './css/index.css';
import './css/font-awesome.css';
import './css/bulma.css';

const logger = createLogger();
const store = createStore(reducer, {}, applyMiddleware(Thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
