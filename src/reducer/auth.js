import { put, takeEvery, delay } from 'redux-saga/effects';
//actions
import { 
  REQUEST_AUTH,
  SET_AUTH,
  requestAuthFail, setAuth 
} from 'actions/auth'
//apis
import * as Api from 'apis/auth'

function* requestAuthSaga(action) {   //API 호출
  yield delay(1000)
  try {
    const res = await Api.getAuthInfo(action.payload)
    yield put(setAuth({...res.data}))
    sessionStorage.setItem('token', res.data.token)
  } catch(err) { yield put(requestAuthFail()) }
  //if api call fail

}

export function* authSaga() {
  yield takeEvery(REQUEST_AUTH, requestAuthSaga); // 모든 INCREASE_ASYNC 액션을 처리
  //yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

const initialState = {
  isLogin : false,  //로그인 유무 / 로그인 될 시, login 페이지에서 감지 후 sessionStoreage에 저장
  level : -1,
  name : 'GUEST',
  groupCode : '',
  email : '',
  uuid : '',
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