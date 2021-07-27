import React, {useEffect, useState} from "react"
import AsyncWrapper from "components/AsyncWrapper"

import { getAPI } from "apis/Api"

const WrapperComponent = ({component, ...props}) => {
  const [updated, setUpdated] = useState(false)
  const [props, setProps] = useState({
    ...props,
    data : null
  })

  const requestAPI = async () => {
    const data = await getAPI()
    return { data }
  }
  const errHandling = err => {

  }
  return (
    <AsyncWrapper
      preProcess = {requestAPI}
      getData = {data => setProps({...props, data})}
      onError = {errHandling}
      updateCall = {updated}
    >
      <component 

      ></component>
    </AsyncWrapper>
  )
}

export default WrapperComponent;
