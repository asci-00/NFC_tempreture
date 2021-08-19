import { all } from 'redux-saga/effects'
import { combineReducers } from 'redux'
import auth, { authSaga } from './auth'
import popup from './popup'

const rootReducer = combineReducers({ 
  auth, 
  popup
});
export function* rootSaga() {
  yield all([authSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;