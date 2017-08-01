import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchRepositories } from '../actions/searchActions';

class Results extends Component {

  componentDidMount() {
    this.props.searchRepositories();
  }

  render() {
		console.log(this.props)
    return (
      <div>Some Stuff</div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchRepositories: () => {
    dispatch(searchRepositories());
  },
});

const mapStateToProps = state => ({
  repositories: state.repositories,
});

Results.propTypes = {
  searchRepositories: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
