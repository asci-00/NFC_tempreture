//actions
import { SET_POPUP_CONFIG, SET_POPUP_MESSAGE } from 'actions/popup'
//apis

const initialState = {
  title: 'modal', 
  message : 'message',
  submit : true, cancel : true,
  onSubmit : () => {}, onCancel : () => {},
  onClose : () => {},
  visible : false
}

export default function popup(state = initialState, action) {
  switch (action.type) {
    case SET_POPUP_CONFIG:
      return { 
        ...state, 
        ...action.payload,
        visible:true
      }
    case SET_POPUP_MESSAGE:
      return { 
        ...state, 
        ...action.payload,
        visible:true
      }
    case POPUP_CLOSE:
      return { ...state, visible: false}
    default:
      return state;
  }
}