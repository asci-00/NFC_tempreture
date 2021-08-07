import { useDispatch } from 'react-redux'
import { setPopupConfig, setPopupMessage } from '/actions/popup'
const dispatch = useDispatch()
export default function alert(config) { 
    if(typeof config === 'string') dispatch(setPopupMessage(config))
    else dispatch(setPopupConfig(config)) 
}