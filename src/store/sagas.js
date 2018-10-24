import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchUser() {
  yield put({ type: 'COMPLETE_REQUEST' })
}

export default function* rootSaga() {
  yield yield takeEvery("TEST_REQUEST", fetchUser);
}
