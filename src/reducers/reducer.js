import * as types from '../actions/types';
import initialState from './INITIAL_STATE';


function reducer(prevState = initialState, action) {
  if (!action) return prevState;

  switch (action.type) {
    case types.FETCH_REPOS_REQUEST:
      return { ...prevState, loading: true };

    case types.FETCH_REPOS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        repositories: action.data,
        error: '',
      };

    case types.FETCH_REPOS_ERROR:
      return { ...prevState, error: 'Encountered an error during GET request' };

    default:
      return prevState;
  }
}

export default reducer;
