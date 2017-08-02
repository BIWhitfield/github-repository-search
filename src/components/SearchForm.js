import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchRepositories } from '../actions/searchActions';
import RepoCard from './RepoCard';
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
    this.props.searchRepositories(searchTerm);
    this.setState({ searchInput: '' });
  }

  render() {
    return (
      <div className="columns">
        <div className="column" />

        <div className="column is-half">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                value={this.state.searchInput}
                onChange={this.onChange}
                className="input"
                type="text"
                placeholder="Find a repository"
              />
            </div>

            <div className="control">
              <button type="button" className="button is-outlined is-primary" onClick={this.handleClick}>Search</button>
            </div>

            <div className="tile is-ancestor">
              <div className="tile is-parent is-vertical">
                {this.props.repositories.repositories.map(repo => (
                  <RepoCard title={repo.full_name} key={repo.id} />
						))}
              </div>
            </div>
          </div>
        </div>
        <div className="column" />
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
