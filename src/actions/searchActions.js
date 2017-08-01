import axios from 'axios';
import * as types from './types';
import { ROOT } from '../config';


export function searchRepositoriesRequest() {
  return {
    type: types.FETCH_REPOS_REQUEST,
  };
}

export function searchRepositoriesSuccess(repositories) {
  return {
    type: types.FETCH_REPOS_SUCCESS,
    data: repositories,
  };
}

export function searchRepositoriesError(error) {
  return {
    type: types.FETCH_REPOS_ERROR,
    data: error,
  };
}

export function searchRepositories() {
  return function (dispatch) {
    dispatch(searchRepositoriesRequest());
    axios.get(`${ROOT}topic:ruby+topic:rails`).then((res) => {
      dispatch(searchRepositoriesSuccess(res.data));
    }).catch((err) => {
      dispatch(searchRepositoriesError(err));
    });
  };
}
