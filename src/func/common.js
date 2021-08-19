import store from 'store.js'
import { setPopupConfig, setPopupMessage } from 'actions/popup'

export default function alert(config) {
    if(typeof config === 'string')
            store.dispatch(setPopupMessage(config))
    else    store.dispatch(setPopupConfig(config))
}