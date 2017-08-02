import * as types from '../actions/types';
import initialState from './INITIAL_STATE';


function readMeReducer(prevState = initialState, action) {
  if (!action) return prevState;

  switch (action.type) {
    case types.FETCH_REPOSITORY_README_REQUEST:
      return { ...prevState, loading: true };

    case types.FETCH_REPOSITORY_README_SUCCESS:
      return {
        ...prevState,
        readMe: action.data,
        readMeFetched: true,
        error: '',
        loading: false,
      };

    case types.FETCH_REPOSITORY_README_ERROR:
      return { ...prevState, error: 'Encountered an error during GET request' };

    default:
      return prevState;
  }
}

export default readMeReducer;
