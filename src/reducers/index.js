import { combineReducers } from 'redux';

import repositoriesReducer from './repositoriesReducer';

export default combineReducers({
  repositories: repositoriesReducer,
});
