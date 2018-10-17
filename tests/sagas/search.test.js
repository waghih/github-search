import sagaHelper from 'redux-saga-testing';
import Actions from 'actions';
import { call, put } from 'redux-saga/effects';

const api = {
  searchRepositories: jest.fn(),
};

function* searchRepositories({ params }) {
  try {
    const response = yield call(api.searchRepositories, params);
    if (response && response.status === 200) {
      yield put(Actions.searchRepositoriesSuccess(response.data));
    } else {
      yield put(Actions.searchRepositoriesFail('Something went wrong'));
    }
  } catch (error) {
    yield put(Actions.searchRepositoriesFail(error));
  }
}

describe('sagas: search repositories when exceed rate limit', () => {
  const params = {
    page: 1,
    per_page: 10,
    q: 'example',
  };
  const error = new Error(403);

  const it = sagaHelper(searchRepositories({ params }));

  it('should have called the searh repositories API', (result) => {
    expect(result).toEqual(call(api.searchRepositories, params));
    expect(api.searchRepositories).not.toHaveBeenCalled();

    return new Error(403);
  });

  it('should trigger searchRepositoriesFail() with forbidden error', (result) => {
    expect(result).toEqual(put(Actions.searchRepositoriesFail(error)));
  });

  it('and then nothing', (result) => {
    expect(result).toBeUndefined();
  });
});


describe('sagas: search repositories successfully', () => {
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

  const it = sagaHelper(searchRepositories({ params }));

  it('should have called the searh repositories API', (result) => {
    expect(result).toEqual(call(api.searchRepositories, params));
    expect(api.searchRepositories).not.toHaveBeenCalled();

    const response = {
      status: 200,
      data: results,
    };

    return response;
  });

  it('should trigger searchRepositoriesSuccess()', (result) => {
    expect(result).toEqual(put(Actions.searchRepositoriesSuccess(results)));
  });

  it('and then nothing', (result) => {
    expect(result).toBeUndefined();
  });
});
