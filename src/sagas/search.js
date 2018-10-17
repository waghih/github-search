import Actions from 'actions';
import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import api from 'api';

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

function* watchSearchRepositories() {
  yield takeLatest(Actions.SEARCH_REPOSITORIES, searchRepositories);
}

export default function* list() {
  yield all([fork(watchSearchRepositories)]);
}
