import Actions from 'actions';

describe('actions: user submit query', () => {
  it('should create an action to search repositories based on query', () => {
    const params = {
      page: 1,
      per_page: 10,
      q: 'example',
    };
    const expectedAction = {
      type: Actions.SEARCH_REPOSITORIES,
      params,
    };
    expect(Actions.searchRepositories(params)).toEqual(expectedAction);
  });

  it('should create an action when search repositories return response successfully', () => {
    const results = {
      total_count: 1,
      incomplete_results: false,
      items: [],
    };
    const expectedAction = {
      type: Actions.SEARCH_REPOSITORIES_SUCCESS,
      results,
    };
    expect(Actions.searchRepositoriesSuccess(results)).toEqual(expectedAction);
  });

  it('should create an action if fail to get a response', () => {
    const error = new Error();
    const expectedAction = {
      type: Actions.SEARCH_REPOSITORIES_FAIL,
      error,
    };
    expect(Actions.searchRepositoriesFail(error)).toEqual(expectedAction);
  });
});
