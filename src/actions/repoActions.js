import axios from 'axios';
import * as types from './types';
import { API } from '../config';


export function fetchRepoRequest() {
  return {
    type: types.FETCH_REPOSITORY_REQUEST,
  };
}

export function fetchRepoSuccess(repo) {
  return {
    type: types.FETCH_REPOSITORY_SUCCESS,
    data: repo,
  };
}

export function fetchRepoError(error) {
  return {
    type: types.FETCH_REPOSITORY_ERROR,
    data: error,
  };
}

export function fetchRepo(repoLink) {
  return function (dispatch) {
    dispatch(fetchRepoRequest());
    return axios.get(`${API}${repoLink}`).then((res) => {
      dispatch(fetchRepoSuccess(res.data));
    }).catch((err) => {
      dispatch(fetchRepoError(err));
    });
  };
}
