import React from 'react';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
// import RouterComponent from './RouterComponent';
import './css/App.css';

const App = () => (
  <div className="App">
    <div className="columns">
      <div className="column" />
      <div className="column is-half">
        <NavBar />
        <SearchForm />
        <Results />
      </div>
      <div className="column" />
    </div>
  </div>
);

export default App;
