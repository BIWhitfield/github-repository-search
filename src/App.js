import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Repository from './components/Repository';
import './css/App.css';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <div className="App">
      <NavBar />
      <div className="columns" >
        <div className="column" />
        <div className="column is-half" />
        <div className="column" />
      </div>
      <Route exact path="/" component={SearchBar} />
      <Route path="/repos/:owner/:repo" component={Repository} />
    </div>
  </Router>
);

export default App;
