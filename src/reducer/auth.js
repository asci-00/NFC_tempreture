import { put, takeEvery, takeLatest, call, all } from 'redux-saga/effects';
//actions
import { 
  REQUEST_AUTH, REQUEST_FAIL,
  SET_AUTH,
  INIT_AUTH,
  requestAuthFail, setAuth, initAuth 
} from 'actions/auth'
//apis
import * as Api from 'apis/auth'
import alert from 'func/common.js'

function* requestAuthSaga(action) {     //API 호출
  try {
    const { data } = yield call(Api.getAuthInfo, action.payload)
    yield put(setAuth({...data.data}))
    sessionStorage.setItem('token', data.token)
  } catch(err) { yield put(requestAuthFail()) }
  //if api call fail
}

function* requestAuthFailSaga(action) { //API 호출
  const err = action.payload
  console.log(err)
  sessionStorage.removeItem('token')
  //alert('')
  yield put(initAuth())
}

export function* authSaga() {
  yield all([
    takeEvery(REQUEST_AUTH, requestAuthSaga),       // 모든 INCREASE_ASYNC 액션을 처리
    takeLatest(REQUEST_FAIL, requestAuthFailSaga),
  ])
}

const initialState = {
  isLogin : false,  //로그인 유무 / 로그인 될 시, login 페이지에서 감지 후 sessionStoreage에 저장
  uuid : '', level : -1,
  name : '',groupCode : '',
  groupName : '',email : '',
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
    default:
      return state;
  }
}