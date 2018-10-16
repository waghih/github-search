import Actions from 'actions';
import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import api from 'api';

function* searchRepositories({ params }) {
  try {
    const response = yield call(api.searchRepositories, params);
    if (response) {
      yield put(Actions.searchRepositoriesSuccess({}));
    } else {
      yield put(Actions.searchRepositoriesFail('error'));
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchSearchRepositories() {
  yield takeLatest(Actions.SEARCH_REPOSITORIES, searchRepositories);
}

export default function* list() {
  yield all([fork(watchSearchRepositories)]);
}
