import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchUser() {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  yield call(delay, 3000);
  yield put({ type: 'COMPLETE_REQUEST' })
}

export default function* rootSaga() {
  yield yield takeEvery("TEST_REQUEST", fetchUser);
}
