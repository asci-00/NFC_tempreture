import React, {useEffect, useState} from "react"
import AsyncWrapper from "components/AsyncWrapper"
// core components
import Header from "components/Headers/Header.js"
import { getAPI } from "apis/Api"
import componentStyles from "assets/theme/views/admin/tables.js"

const useStyles = makeStyles(componentStyles)

const Tables = (data) => {
  return (<><Header /></>)
}

const WrapTables = (props) => {
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
      updateState = {updated}

    >
      <Table onClick={() => setUpdated(!updated)}></Table>
    </AsyncWrapper>
  )
}

export default Tables;
