import { call, put, takeEvery } from 'redux-saga/effects'
import { listNew } from './reducers/dummyReducer';
//import Api from '...'


const getUsername = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const res1 = await res.json();
    return res1
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchData(action) {
    try {
        const userName = yield call(getUsername)
        yield put(listNew(userName))
    } catch (e) {
        console.log("some thing went wrong")
    }
}



/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* dummySaga() {
    yield takeEvery('FETCH_DATA', fetchData)
}


export default dummySaga