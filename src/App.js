import React from 'react';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
// import RouterComponent from './RouterComponent';
import './css/App.css';

const App = () => (
  <div className="App">
    <div className="columns">
      <div className="column" />
      <div className="column is-half">
        <NavBar />
        <SearchForm />
      </div>
      <div className="column" />
    </div>
  </div>
);

export default App;
