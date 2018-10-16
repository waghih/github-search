const SEARCH = 'SEARCH';

export const SEARCH_REPOSITORIES = `${SEARCH}/SEARCH_REPOSITORIES`;
export const SEARCH_REPOSITORIES_SUCCESS = `${SEARCH}/SEARCH_REPOSITORIES_SUCCESS`;
export const SEARCH_REPOSITORIES_FAIL = `${SEARCH}/SEARCH_REPOSITORIES_FAIL`;

// export const getSearchResults = store => store.SEARCH.results;

export const searchRepositories = params => ({
  type: SEARCH_REPOSITORIES,
  params,
});

export const searchRepositoriesSuccess = results => ({
  type: SEARCH_REPOSITORIES_SUCCESS,
  results,
});

export const searchRepositoriesFail = error => ({
  type: SEARCH_REPOSITORIES_FAIL,
  error,
});
