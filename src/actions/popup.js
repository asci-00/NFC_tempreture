export const SET_POPUP_CONFIG = '@@POPUP/SET_CONFIG'
export const SET_POPUP_MESSAGE = '@@POPUP/SET_MESSAGE'
export const POPUP_CLOSE = '@@POPUP/CLOSE'

export const setPopupConfig = (config) => ({ type: SET_POPUP_CONFIG, payload : {...config} })
export const setPopupMessage = (message) => ({ type: SET_POPUP_CONFIG, payload : message })
export const closePopup = () => ({ type: POPUP_CLOSE })