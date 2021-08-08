import store from 'store.js'
import { setPopupConfig, setPopupMessage } from 'actions/popup'

export default function alert(config) {
    const action = 
        typeof config === 'string' ? 
            setPopupMessage(config) : setPopupConfig(config)
    store.dispatch(action)
}