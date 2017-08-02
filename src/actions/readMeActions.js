import axios from 'axios';
import * as types from './types';
import { API } from '../config';


export function fetchRepoReadMeRequest() {
  return {
    type: types.FETCH_REPOSITORY_README_REQUEST,
  };
}

export function fetchRepoReadMeSuccess(readMe) {
  return {
    type: types.FETCH_REPOSITORY_README_SUCCESS,
    data: readMe,
  };
}

export function fetchRepoReadMeError(error) {
  return {
    type: types.FETCH_REPOSITORY_README_ERROR,
    data: error,
  };
}

export function fetchReadMe(repoLink) {
  return function (dispatch) {
    dispatch(fetchRepoReadMeRequest());
    return axios.get(`${API}${repoLink}/readme`).then((res) => {
      dispatch(fetchRepoReadMeSuccess(res.data.content));
    }).catch((err) => {
      dispatch(fetchRepoReadMeError(err));
    });
  };
}
