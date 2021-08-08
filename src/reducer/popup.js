//actions
import { SET_POPUP_CONFIG, SET_POPUP_MESSAGE, POPUP_CLOSE } from 'actions/popup'
//apis

const initialState = {
  title: undefined, 
  message : 'Message',
  submit : true, cancel : true,
  submitText: '확인', cancelText: '취소',
  onSubmit : () => {}, onCancel : () => {},
  onClose : () => {},
  visible : false
}

export default function popup(state = initialState, action) {
  console.log(action)
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
        message : action.payload,
        visible:true
      }
    case POPUP_CLOSE:
      return { ...state, visible: false}
    default:
      return state;
  }
}