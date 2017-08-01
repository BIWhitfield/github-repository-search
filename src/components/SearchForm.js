import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchRepositories } from '../actions/searchActions';
import '../css/SearchForm.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(e) {
    this.setState({ searchInput: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    const searchTerm = this.state.searchInput;
    console.log(searchTerm);
    this.props.searchRepositories(searchTerm);
		this.setState({ searchInput: '' });
		console.log(searchTerm);
  }

  render() {
    return (
      <div className="field has-addons">
        <div className="control">
          <input
            value={this.state.searchInput}
            onChange={this.onChange}
            className="input"
            type="text"
            placeholder="Find a repository"
          />
        </div>
        <div className="control">
          <button className="button is-outlined" onClick={this.handleClick}>Search</button>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical">
            {this.props.repositories.repositories.map(repo => (
              <div key={repo.id} className="tile is-child">
                <h1>{repo.full_name}</h1>
                <p>Forks: {repo.forks}</p>
              </div>
					))}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchRepositories: (searchTerm) => {
    dispatch(searchRepositories(searchTerm));
  },
});

const mapStateToProps = state => ({
  repositories: state.repositories,
});

SearchBar.propTypes = {
  searchRepositories: PropTypes.func.isRequired,
  repositories: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
