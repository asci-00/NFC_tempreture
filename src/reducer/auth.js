import { put, takeEvery, delay } from 'redux-saga/effects';

// 액션 타입
const SET_AUTH = '@@AUTH/SETAUTH';
const REQUEST_ASYNC_AUTH = '@@AUTH/REQUEST_ASYNC';

// 액션 생성 함수
export const setAuth = (payload) => ({ type: SET_AUTH, payload });
export const requestAuth = (payload) => ({ type: REQUEST_ASYNC_AUTH, payload });
const requestAuthSuccess = (data) => ({})
const requestAuthFail = (data) => ({})



function* requestAuthSaga(action) {   //API 호출
  yield delay(1000)
  yield put(setAuth({...action.payload}))
  //if api call fail

}

export function* authSaga() {
  yield takeEvery(REQUEST_ASYNC_AUTH, requestAuthSaga); // 모든 INCREASE_ASYNC 액션을 처리
  //yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

const initialState = {
  isLogin : false,  //로그인 유무 / 로그인 될 시, login 페이지에서 감지 후 sessionStoreage에 저장
  level : -1,
  name : 'GUEST',
  accountType : 'guest',
  code : '',
  tocken : ''
};

const debugToken = 'goieEkf12KFpw=sd#@ksEFG'

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {...state, ...action.payload, token : debugToken, isLogin:true};
    default:
      return state;
  }
}