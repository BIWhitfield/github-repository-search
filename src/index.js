import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Thunk from 'redux-thunk';
import reducer from './reducers';
import App from './App';

import './css/index.css';
import './css/font-awesome.css';
import './css/bulma.css';

import SearchForm from './components/SearchForm';
import Repository from './components/Repository';

const logger = createLogger();

const middlewares = [
  Thunk,
  logger,
];

const store = createStore(
reducer,
compose(applyMiddleware(...middlewares)));

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </App>
    </Router>
  </Provider>, document.getElementById('root'),
);
