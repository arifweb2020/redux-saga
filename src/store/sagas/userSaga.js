import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { nameList, techChng } from './reducers/nameReducer';
//import Api from '...'


const getUsername = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const res1 = await res.json();
    console.log("name", res[0]?.name)
    return res1[(Math.ceil(Math.random() * 10))]?.name
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    //   try {
    //     const user = yield call(Api.fetchUser, action.payload.userId)
    //     yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    //   } catch (e) {
    //     yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    //   }

    try {
        const userName = yield getUsername()
        // when r using createReducer use that way
        // yield put({ type: 'USER_FETCH_SUCCEEDED', payload: userName })
        yield put(nameList(userName))
    } catch (e) {
        console.log("some thing went wrong")
    }
}

function* changeTech() {
    yield delay(2000)
    yield put(techChng("Mobile App Developer"))
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* userSaga() {
    yield takeEvery('CHANGE_NAME', fetchUser)
    yield takeEvery('CHANGE_TECH', changeTech)
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest('USER_FETCH_REQUESTED', fetchUser)
// }

export default userSaga