// react library
import React, { useEffect, useState } from "react"
// material-ui
import { makeStyles } from "@material-ui/core/styles"
// user component
import SkeletonComponent from 'components/Skeleton'
// func and styles
import alert from 'func/common'
import style from 'assets/theme/views/popup'

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
  const HOCComponent = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const classes = useStyles()

    useEffect(() => {
      dataRequest().then(res => {
        setData(dataTransform(res))
        setLoading(false)
      }).catch(err => { errorHandling(err, classes) })
    }, [])

    const {
      dataRequest = () => null,
      dataTransform = (data) => data,
      errorHandling = _errorHandling, //catch error during pre process
      Skeleton = SkeletonComponent, //display component during pre process
    } = config

    const requestAPI = async (api, parms, reload = false, reloadData = null) => {
      setLoading(true)
      let res = null
      try {
        res = await api({ ...parms })
        if (reload) {
          const req_data = await dataRequest()
          setData(dataTransform(req_data))
        }
      } catch (err) { errorHandling(err, classes) }
      setLoading(false)
      return res
    }
    
    return loading ? <Skeleton /> : <Component data={data} requestAPI={requestAPI} />
  }

  return HOCComponent
}

export default DataController