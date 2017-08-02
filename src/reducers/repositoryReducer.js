import * as types from '../actions/types';
import initialState from './INITIAL_STATE';


function repositoryReducer(prevState = initialState, action) {
  if (!action) return prevState;

  switch (action.type) {
    case types.FETCH_REPOSITORY_REQUEST:
      return { ...prevState, loading: true };

    case types.FETCH_REPOSITORY_SUCCESS:
      return {
        ...prevState,
        repoFetched: true,
        repository: action.data,
        error: '',
        loading: false,
      };

    case types.FETCH_REPOSITORY_ERROR:
      return { ...prevState, error: 'Encountered an error during GET request' };

    default:
      return prevState;
  }
}

export default repositoryReducer;
