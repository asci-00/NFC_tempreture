import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MaterialTable from 'material-table';
// core components
import Header from "components/Headers/Header.js";
import Form from "components/Form"

import componentStyles from "assets/theme/views/admin/maps.js";
import commonStyles from "assets/theme/views/admin/common.js";
//import Map from "components/Map/Map";
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper'

import { columns, sample_data } from 'modules/static/terminal.js'

const useStyles = makeStyles(componentStyles),
      useStyles2 = makeStyles(commonStyles)

const Maps = () => {
  const classes = useStyles();
  const commonClasses = useStyles2()
  const [selected, setSelected] = useState(null)
  console.log(componentStyles)
  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >
        <Grid container>
          <Grid item xs={5} xl={5} className={commonClasses.removeUnderline}>
            <MaterialTable
              columns = {columns} data = {sample_data}
              options={{
                headerStyle: {
                  backgroundColor: '#ddd',
                },
                showTitle : false,
                maxBodyHeight: "500px",
                minBodyHeight: "500px",
                paging:false,
                rowStyle: rowData => ({
                  backgroundColor: (selected === rowData.tableData.id) ? 'powderblue' : '#FFF'
                }),
              }}
              onRowClick={((evt, selectedRow) => setSelected(selectedRow.tableData.id))}

            />
          </Grid>
          <Grid item xs={7} xl={7}>
            <Card classes={{ root: classes.cardRoot }}> 
              <Paper className={commonClasses.paper}>
                <Form data={sample_data[selected]}/>
              </Paper>
            </Card>
            {/* <Card classes={{ root: classes.cardRoot }}>
              <Map data={sample_data}/>
            </Card> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Maps;
