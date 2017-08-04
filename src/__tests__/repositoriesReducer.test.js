import repositoriesReducer from '../reducers/repositoriesReducer';
import * as types from '../actions/types';


describe('request reducer', () => {
  it('has default state', () => {
    expect(repositoriesReducer(undefined, { type: 'unexpected' })).toEqual({
      repositories: [],
      loading: false,
      error: null,
      repoFetched: false,
      readMeFetched: false,
      readMe: '',
      repository: {},
      owner: {},
    });
  });
  it('can send a request', () => {
    expect(repositoriesReducer(
			undefined,
      { type: types.FETCH_REPOS_REQUEST,
        data: {
          error: null,
          loading: true,
          readMe: '',
          readMeFetched: false,
          repoFetched: false,
          repositories: [],
          repository: {},
          owner: {} },
      })).toEqual({
        error: null,
        loading: true,
        readMe: '',
        readMeFetched: false,
        repoFetched: false,
        repositories: [],
        repository: {},
        owner: {} });
  });
});
