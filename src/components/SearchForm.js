import React from 'react';
import '../css/SearchForm.css';

const SearchBar = () => (
  <div className="field has-addons">
    <div className="control">
      <input className="input" type="text" placeholder="Find a repository" />
    </div>
    <div className="control">
      <a className="button is-outlined">Search</a>
    </div>
  </div>
);

export default SearchBar;
