//actions
import {
  CLEAR_ERROR,
  ERROR, error, INIT_AUTH, REQUEST_AUTH, REQUEST_FAIL, setAuth, SET_AUTH
} from 'actions/auth';
import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';

const successInfo = {
  isLogin : true,  //로그인 유무 / 로그인 될 시, login 페이지에서 감지 후 sessionStoreage에 저장
  uuid : 'uuid_test', level : 0,
  name : '관리자',groupCode : "041-31499-g1",
  groupName : '관리자',email : 'admin@admin.com',
  address: '경기도', approve : true,
  error: undefined
}

function* requestAuthSaga(action) {     //API 호출
  yield put(setAuth(successInfo))
  sessionStorage.setItem('token', successInfo.uuid)
  // try {
  //   const { data } = yield call(Api.getAuthInfo, action.payload)
  //   yield put(setAuth({...data.data}))
  //   sessionStorage.setItem('token', data.token)
  // } catch(err) { yield put(requestAuthFail(err)) }
  //if api call fail
}

function* requestAuthFailSaga(action) { //API 호출
  const err = action.payload
  sessionStorage.removeItem('token')
  yield put(error(err))
}

export function* authSaga() {
  yield all([
    takeEvery(REQUEST_AUTH, requestAuthSaga),       // 모든 INCREASE_ASYNC 액션을 처리
    takeLatest(REQUEST_FAIL, requestAuthFailSaga),
  ])
}

const initialState = {
  isLogin : false,  //로그인 유무 / 로그인 될 시, login 페이지에서 감지 후 sessionStoreage에 저장
  uuid : '', level : 0,
  name : '',groupCode : '',
  groupName : '',email : '',
  address: '', approve : false,
  error: undefined
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.payload,
        isLogin:true
      }
    case INIT_AUTH:
      return { ...initialState }
    case ERROR:
      return { ...state, error: action.payload }
    case CLEAR_ERROR:
      return { ...state, error: undefined}
    default:
      return state;
  }
}