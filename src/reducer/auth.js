import { put, takeEvery } from 'redux-saga/effects';

// 액션 타입
const SETAUTH = 'SETAUTH';
const SETAUTH_ASYNC = 'SETAUTH_ASYNC';

// 액션 생성 함수
export const setAuth = (payload) => ({ type: SETAUTH, payload });
export const setAuthAsync = (payload) => ({ type: SETAUTH_ASYNC, payload });

function* setAuthSaga(action) {   //API 호출
  return new Promise((res, rej) => {
    put(setAuth({...action.payload}))
  }, 500)
}

export function* authSaga() {
  yield takeEvery(SETAUTH_ASYNC, setAuthSaga); // 모든 INCREASE_ASYNC 액션을 처리
  //yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = {
    level : -1,
    name : 'GUEST',
    accountType : 'guest',
    code : '',
    tocken : ''
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SETAUTH:
      return {...state, ...action.payload};
    default:
      return state;
  }
}