import { all, fork } from 'redux-saga/effects';
import search from './search';

export default function* root() {
  yield all([
    fork(search),
  ]);
}
