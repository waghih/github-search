import Actions from 'actions';

export const getDefaultState = () => ({
  isLoading: false,
  results: {},
  error: null,
});

export default function search(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }

  switch (action.type) {
    case Actions.SEARCH_REPOSITORIES:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.SEARCH_REPOSITORIES_SUCCESS:
      return {
        isLoading: false,
        results: action.results,
        error: null,
      };
    case Actions.SEARCH_REPOSITORIES_FAIL:
      return {
        isLoading: false,
        results: {},
        error: action.error,
      };
    default:
      return state;
  }
}
