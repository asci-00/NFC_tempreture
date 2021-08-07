export const REQUEST_AUTH = '@@AUTH/REQUEST_AUTH'
export const SET_AUTH = '@@AUTH/SET_AUTH';
export const INIT_AUTH = '@@AUTH/INIT_AUTH'

export const requestAuth = (payload) => ({ type : REQUEST_USER_INFO, payload})
export const setAuth = (payload) => ({ type: SET_AUTH, payload })
export const initAuth = () => ({ type: INIT_AUTH })
