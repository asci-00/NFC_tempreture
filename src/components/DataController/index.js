// react library
// material-ui
import { makeStyles } from "@material-ui/core/styles"
import style from 'assets/theme/views/popup'
// user component
import SkeletonComponent from 'components/Skeleton'
// func and styles
import alert from 'func/common'
import React, { useEffect, useState } from "react"

const useStyles = makeStyles(style)
const _errorHandling = (error, classes) => {
  alert({
    type: 'html',
    reset: false,
    message: (
      <div className={classes.wrapper}>
        <header className={classes.head}>
          <div className={classes.icon}>
            <img src={require("assets/img/icons/common/warning.png").default} />
          </div>
        </header>
        <section className={classes.text}>{error.message}</section>
      </div>
    )
  })
}

const DataController = (Component, config) => {
  const HOCComponent = (props) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const classes = useStyles()

    const {
      dataRequest = () => null,
      dataTransform = (data) => data,
      errorHandling = _errorHandling, //catch error during pre process
      Skeleton = SkeletonComponent, //display component during pre process
    } = config

    const getRequest = async () => {
      try {
        let resData = null
        if(dataRequest.length) {
          for(let idx = 0; idx < dataRequest.length; idx++) {
            resData[dataRequest[idx].field] = await dataRequest[idx].func()
            const dataTransformFunc = dataTransform.length ? dataTransform[idx] : dataTransform
            resData[dataRequest[idx].field] = dataTransformFunc(resData[dataRequest[idx].field])
          }
          setData(resData)
        } else {
          resData = await dataRequest()
          setData(dataTransform(resData))
        }
      } catch(err) { errorHandling(err, classes) }
      setLoading(false)
    }

    useEffect(() => getRequest(), [])

    const requestAPI = async (api, parms, reload = false, reloadData = null) => {
      setLoading(true)
      let res = null
      try {
        res = await api( ...parms )
        if (reload) getRequest()
      } catch (err) { errorHandling(err, classes) }
      setLoading(false)
      return res
    }

    return loading ? <Skeleton /> : <Component data={data} requestAPI={requestAPI} />
  }

  return HOCComponent
}

export default DataController