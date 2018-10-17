import Actions from 'actions';
import search, { getDefaultState } from 'reducers/search';

describe('reducers: search', () => {
  const initialState = getDefaultState();
  const params = {
    page: 1,
    per_page: 10,
    q: 'example',
  };
  const results = {
    total_count: 1,
    incomplete_results: false,
    items: [],
  };
  const error = new Error();

  it('should return the initial state', () => {
    const state = undefined;
    const action = { type: '' };
    const expectedState = initialState;
    const newState = search(state, action);
    expect(newState).toEqual(expectedState);
    expect(state).not.toEqual(newState);
  });

  it('should return existing state if no matching action type', () => {
    const state = initialState;
    const action = { type: '' };
    const expectedState = initialState;
    const newState = search(state, action);
    expect(newState).toEqual(expectedState);
  });

  it('should return the state for action SEARCH_REPOSITORIES', () => {
    const state = initialState;
    const action = { type: Actions.SEARCH_REPOSITORIES, params };
    const expectedState = { isLoading: true, error: null, results: {} };
    const newState = search(state, action);
    expect(newState).toEqual(expectedState);
    expect(state).not.toEqual(newState);
  });

  it('should return the state for action SEARCH_REPOSITORIES_SUCCESS', () => {
    const state = { isLoading: true, errors: null, results: {} };
    const action = { type: Actions.SEARCH_REPOSITORIES_SUCCESS, results };
    const expectedState = { isLoading: false, error: null, results };
    const newState = search(state, action);
    expect(newState).toEqual(expectedState);
    expect(state).not.toEqual(newState);
  });

  it('should return the state for action SEARCH_REPOSITORIES_FAIL', () => {
    const state = { isLoading: true, errors: null, results: {} };
    const action = { type: Actions.SEARCH_REPOSITORIES_FAIL, error };
    const expectedState = { isLoading: false, error, results: {} };
    const newState = search(state, action);
    expect(newState).toEqual(expectedState);
    expect(state).not.toEqual(newState);
  });
});
