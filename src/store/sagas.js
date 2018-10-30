'use strict';

import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import * as actionTypes from '../actions/action-types';
import {walk, homeDir} from '../util/file';

function* initialize() {
    let _files = null;
    const _walk = () => {
        const home = homeDir();
        console.log(`home: ${home}, ${process.platform}`);
        return walk(home)
            .then(files => {
                _files = files;
            })
            .catch(console.log);
    }

    yield call(_walk);
    yield put({type: actionTypes.INITIALIZED, files: _files});
}

export default function* rootSaga() {
    yield takeEvery(actionTypes.INITIALIZE, initialize);
}
