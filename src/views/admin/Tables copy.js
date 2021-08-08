import React, {useEffect, useState} from "react"
import AsyncWrapper from "components/AsyncWrapper"

import { getAPI } from "apis/Api"

const defaultPopupConfig = {
  message : '',
  submit : true, reset : false, open : false,
}

const WrapperComponent = ({Component, ...props}) => {
  const [updated, setUpdated] = useState(false)
  const [props, setProps] = useState({ ...props, data : null })

  const [setPopup, popupConfig] = useState({...defaultPopupConfig})
  const { errorHandling, getAPI } = props

  const requestAPI = async () => {
    try {
      const data = await getAPI()
      setProps({...props, data})
    } catch(err) { errorHandling({setPopup, err}) }
  }
  const errHandling = err => {

  }
  return (
    <AsyncWrapper
      preProcess = {requestAPI}
      onError = {errHandling}
      updateCall = {updated}
      component = { props => 
        <Component {...props}/> 
      }/>
  )
}

// <div>
//   <WrapperComponent
//     preProcess = { () => await Api.call(url) }
//     onUpdate? = {() => {}} //기본 preProcess
//     errorHandling? = {(setPopup, error) => {}} //
//       setPopup({message : string,})
//     Skeleton = { <LoadingComponent/> }
    
//     Component = {(props) => <InnerComponent {...props}/>}
//   />
//   InnerComponent handling
//   setWarning() / setUpdate
// </div>
export default WrapperComponent;
