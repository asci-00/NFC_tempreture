import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
// @material-ui/lab components
import Pagination from "@material-ui/lab/Pagination";
// @material-ui/icons components

// core components
import Header from "components/Headers/Header.js";

//user component
import Table from 'components/Table';

//debuging data
import { userData, userColumns } from 'debug/data_sample';

const Tables = () => {
  //const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        // classes={{ root: classes.containerRoot }}
      >
        <Table columns = {userColumns} data = {userColumns}/>
      </Container>
    </>
  );
};

export default Tables;
