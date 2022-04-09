//react library
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
//@material-ui components
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
//styles
import { makeStyles } from "@material-ui/core/styles";
import commonStyles from "assets/theme/views/admin/common.js";
import componentStyles from "assets/theme/views/admin/maps.js";
//user components
import Header from "components/Headers/Header.js";
import Map from 'components/Map/Map';
import MaterialTable, { MTableToolbar } from 'material-table';
import { map_sample_data } from 'modules/static/map.js';
//static configuration data
import { columns, sample_data } from 'modules/static/terminal.js';
import React, { useMemo, useState } from "react";
//api request
//import * as kiosk from 'apis/kiosk'
//hoc component
//import DataController from 'components/DataController'
import Filtering from 'views/admin/popup/Filtering';

const useStyles = makeStyles(componentStyles),
      useStyles2 = makeStyles(commonStyles)

const UserManage = (props) => {
  const layoutC = useStyles()
  const commonC = useStyles2()
  const [selected, setSelected] = useState(null)
  const [mapData, setMapData] = useState(map_sample_data)
  const [open, setOpen] = useState(false)
  const { data, requestAPI } = props
  console.log(map_sample_data)
  const MapComponent = useMemo(() => <Map data={mapData}/>, [mapData]) // <Map data={data.log}/>, [data.log]

  return (
    <>
      <Header />
      {/* Page content */}
      <Filtering open={open} onClose={()=>setOpen(false)}/>
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: layoutC.containerRoot }}
      >
        <div className={layoutC.buttonGroup}>
          <div className={layoutC.leftButtonGroup}>
            <Button
              variant="contained"
              color="primary" size="medium"
              onClick={()=>setOpen(true)}
            >필터검색</Button>
            <Button
              variant="contained"
              color="default" size="medium"
              onClick = {() => setMapData([])}
            >필터취소</Button>
          </div>
          <div className={layoutC.rightButtonGroup}>
            <Button
              variant="contained"
              color="default"
              size="medium"
            >모바일푸시</Button>
          </div>
        </div>
        <Grid container>
          <Grid item xs={12} xl={5}>
            <MaterialTable
              columns = {columns} data = {sample_data} //data = {data.userData}
              options={{
                headerStyle: {
                  backgroundColor: '#ddd',
                },
                maxBodyHeight: "500px",
                minBodyHeight: "500px",
                paging:false,
                rowStyle: rowData => ({
                  backgroundColor: (selected === rowData.tableData.id) ? 'powderblue' : '#FFF'
                }),
              }}
              components={{
                Toolbar : props => (
                <div className={commonC.toolbar}><MTableToolbar {...props} /></div>
                )
              }}
              title="Device목록"
              onRowClick={((evt, selectedRow) => setSelected(selectedRow.tableData.id))}
            />
          </Grid>
          <Grid item xs={12} xl={7}>
            <Card classes={{ root: layoutC.cardRoot }} style={{height:'564px', border:'1px solid grey'}}>
              {MapComponent}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

// export default DataController(UserManage, {
//   dataRequest: [{
//     func : kisok.getRequest,
//     key : 'userData'
//   }, {
//     func : kisok.getLogData,
//     key : 'log'
//    }],
//   dataTransform : (res) => res.data.data
// });
// export default DataController(UserManage, {
//   dataRequest: [
//     {

//     }
//   ],
//   dataTransform : (res) => res.data.data
// })
export default UserManage