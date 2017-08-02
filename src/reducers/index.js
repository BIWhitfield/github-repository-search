import { combineReducers } from 'redux';

import repositoriesReducer from './repositoriesReducer';
import repositoryReducer from './repositoryReducer';
import readMeReducer from './readMeReducer';

export default combineReducers({
  repositories: repositoriesReducer,
  repository: repositoryReducer,
  readMe: readMeReducer,
});
