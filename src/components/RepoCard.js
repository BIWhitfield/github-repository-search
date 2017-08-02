import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RepoCard = function (props) {
  return (
    <div className="box">
      <Link to={`/repos/${props.title}`} className="title is-3"><h1>{props.title}</h1></Link>
    </div>
  );
};

RepoCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RepoCard;
