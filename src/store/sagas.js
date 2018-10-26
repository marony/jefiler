import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import * as actionTypes from '../actions/action-types';
import {walk} from '../util/file';

function* initialize() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    let _files = null;
    const _walk = () => {
        return walk('./src/')
            .then(files => {
                _files = files;
            })
    }

    yield call(_walk);
    yield put({type: actionTypes.INITIALIZED, files: _files});
}

export default function* rootSaga() {
    yield takeEvery(actionTypes.INITIALIZE, initialize);
}
