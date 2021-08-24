export const REQUEST_AUTH = '@@AUTH/REQUEST'
export const SET_AUTH = '@@AUTH/SET';
export const INIT_AUTH = '@@AUTH/INIT'
export const REQUEST_FAIL = '@@AUTH/REQUEST_FAIL'
export const CLEAR_ERROR = '@@AUTH/CLEAR_ERROR'

export const requestAuth = (payload) => ({ type : REQUEST_AUTH, payload})
export const requestAuthFail = (payload) => ({ type : REQUEST_FAIL, payload})
export const clearError = () => ({ type: CLEAR_ERROR })
export const setAuth = (payload) => ({ type: SET_AUTH, payload })
export const initAuth = () => ({ type: INIT_AUTH })
