import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchReadMe } from '../actions/readMeActions';
import { fetchRepo } from '../actions/repoActions';
import base64Decoder from '../helperFunctions/base64Decoder';
import markDownFormatter from '../helperFunctions/markDownFormatter';

import '../css/Repository.css';

class Repository extends Component {

  componentDidMount() {
    this.props.fetchReadMe(this.props.match.url);
    this.props.fetchRepo(this.props.match.url);
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-2" />

        <div className="column is-3" >
          <div className="container">
            <section>
              <img
                className="image"
                src={this.props.owner.avatar_url}
                alt="Owner Avatar"
              />
            </section>
            <section className="section">
              <div className="container">
                <h1 className="title"><b>{this.props.repo.full_name}</b></h1>
                <p>{this.props.repo.description}</p>
              </div>
            </section>

            <section>
              <div className="container">
                <p>Details</p>
                <p><b>Forks:</b> {this.props.repo.forks_count} || <b>Open Issues:</b> {this.props.repo.open_issues_count} || <b>Stars:</b> {this.props.repo.stargazers_count}</p>
              </div>
            </section>
          </div>
        </div>

        <div className="column is-5">
          {
						this.props.readMe === undefined
						? <p>No ReadMe in repository!</p>
						: <section className="section">
								<div className="container">
									<h1 className="title"><b>ReadMe</b></h1>
									<div
										className="content"
										dangerouslySetInnerHTML={{ __html: markDownFormatter(base64Decoder(this.props.readMe)) }}
									/>
								</div>
							</section>
						}
        </div>
        <div className="column is-2" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchReadMe: (repoLink) => {
    dispatch(fetchReadMe(repoLink));
  },
  fetchRepo: (repoLink) => {
    dispatch(fetchRepo(repoLink));
  },
});

const mapStateToProps = state => ({
  readMe: state.readMe.readMe,
  repo: state.repository.repository,
  owner: state.owner.owner,
});

Repository.propTypes = {
  fetchReadMe: PropTypes.func.isRequired,
  readMe: PropTypes.string.isRequired,
  fetchRepo: PropTypes.func.isRequired,
  repo: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  owner: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Repository);
