import React, { useEffect, useState } from "react"
// core components
import Warning from "components/Dialog/Warning";

const ReqContainer = (props) => {
  const {
    preProcess, //api request or pre process
    getData, //Receive preprocessing results
    onError, //catch error during pre process
    updateCall, //data update
    Skeleton, //display component during pre process
    children, //display component after pre process
  } = props

  const [state, setState] = useState('loading')
  const [open, setOpen] = useState(false)

  //load - display Skeleton / show - display RComponent / error - display onError result
  useEffect(() => {
    preProcess()
      .then(res => { getData(res); setState('show') })
      .catch(err => onError(err))
  }, [updateCall])
  
  return (
    <>
      <children/>
    </>
  );
}

export default ReqContainer;
