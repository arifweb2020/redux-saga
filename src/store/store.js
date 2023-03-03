import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import userReducer from './extra-reducers/testSlice';
import nameReducer from './sagas/reducers/nameReducer';
import rootSaga from './sagas/rootSaga';
import dummyReducer from './sagas/reducers/dummyReducer';

// create the saga middleware
let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

export const store = configureStore({
  reducer: {
    users: userReducer,
    nameList: nameReducer,
    listNew:dummyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});

sagaMiddleware.run(rootSaga)