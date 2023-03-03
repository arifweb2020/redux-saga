import { all, call } from 'redux-saga/effects'
import dummySaga from './dummySaga';
import userSaga from './userSaga';

function* rootSaga() {
    yield all([
        call(dummySaga),
        userSaga()
    ])
}

export default rootSaga