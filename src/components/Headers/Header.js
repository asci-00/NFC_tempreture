import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Skeleton from '@material-ui/lab/Skeleton';

// @material-ui/icons components
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import EmojiEvents from "@material-ui/icons/EmojiEvents";
import GroupAdd from "@material-ui/icons/GroupAdd";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PieChart from "@material-ui/icons/PieChart";

// core components
import CardStats from "components/Cards/CardStats.js";

import componentStyles from "assets/theme/components/header.js";
import alert from 'func/common.js'

import * as Api from 'apis/dashboard.js'

const useStyles = makeStyles(componentStyles);

const boxConfiguration = [
  {
    title : '평균온도',
    key : 'avgTemperature',
    icon : InsertChartOutlined,
    iconColor : 'bgError'
  }, {
    title : '건물방문',
    key : 'buildingVisitCount',
    icon : PieChart,
    iconColor : 'bgWarning'
  }, {
    title : 'NFC태그',
    key : 'usedKioskCount',
    icon : InsertChartOutlined,
    iconColor : 'bgWarningLight'
  }, {
    title : '단말기개수',
    key : 'usedTerminalCount',
    icon : InsertChartOutlined,
    iconColor : 'bgInfo'
  },
]

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [data, setData] = useState(null)

  const upDown = [
    { 
      icon : ArrowUpward,
      arrowColor : theme.palette.success.main
    }, {
      icon : ArrowDownward,
      arrowColor : theme.palette.error.main
    }
  ]
  useEffect(async () => {
    const res = await Api.getTrendsData()
    if(res.status !== 200) alert('Api call error : 관리자에게 문의하세요.')
    else {
      Object.keys(res.data).map(key => {
        const target = boxConfiguration.find(config => config.key === key)
        target.status = (res.data[key].change < 0) ? 1 : 0
      })
      setData(res.data)
    }
  }, [])

  const dataComponent = () => data && 
  (
    <Grid container>
      {boxConfiguration.map((config, idx) => (
        <Grid item xl={3} lg={6} xs={12} key={idx}>
          <CardStats
            subtitle= {config.title}
            title={data[config.key].now + ""}
            icon={config.icon}
            color={config.iconColor}
            footer={
              <>
                <Box
                  component="span"
                  fontSize=".875rem"
                  color={upDown[config.status].arrowColor}
                  marginRight=".5rem"
                  display="flex"
                  alignItems="center"
                >
                  <Box
                    component={upDown[config.status].icon}
                    width="1.5rem!important"
                    height="1.5rem!important"
                  />{" " + Math.abs(data[config.key].change)}%</Box>
                <Box component="span" whiteSpace="nowrap">
                  Since yesterday
                </Box>
              </>
            }
          />
        </Grid>
      ))}
      {/* <Grid item xl={3} lg={6} xs={12}>
        <CardStats
          subtitle="평균온도"
          title={avTem}
          icon={InsertChartOutlined}
          color="bgError"
          footer={
            <>
              <Box
                component="span"
                fontSize=".875rem"
                color={theme.palette.success.main}
                marginRight=".5rem"
                display="flex"
                alignItems="center"
              >
                <Box
                  component={ArrowUpward}
                  width="1.5rem!important"
                  height="1.5rem!important"
                />{" "}
                3.48%
              </Box>
              <Box component="span" whiteSpace="nowrap">
                Since yesterday
              </Box>
            </>
          }
        />
      </Grid>
      <Grid item xl={3} lg={6} xs={12}>
        <CardStats
          subtitle="건물방문"
          title="2,356"
          icon={PieChart}
          color="bgWarning"
          footer={
            <>
              <Box
                component="span"
                fontSize=".875rem"
                color={theme.palette.error.main}
                marginRight=".5rem"
                display="flex"
                alignItems="center"
              >
                <Box
                  component={ArrowDownward}
                  width="1.5rem!important"
                  height="1.5rem!important"
                />{" "}
                3.48%
              </Box>
              <Box component="span" whiteSpace="nowrap">
                Since yesterday
              </Box>
            </>
          }
        />
      </Grid>
      <Grid item xl={3} lg={6} xs={12}>
        <CardStats
          subtitle="Kiosk 태그"
          title="924"
          icon={GroupAdd}
          color="bgWarningLight"
          footer={
            <>
              <Box
                component="span"
                fontSize=".875rem"
                color={theme.palette.warning.main}
                marginRight=".5rem"
                display="flex"
                alignItems="center"
              >
                <Box
                  component={ArrowDownward}
                  width="1.5rem!important"
                  height="1.5rem!important"
                />{" "}
                1.10%
              </Box>
              <Box component="span" whiteSpace="nowrap">
                Since yesterday
              </Box>
            </>
          }
        />
      </Grid>
      <Grid item xl={3} lg={6} xs={12}>
        <CardStats
          subtitle="단말기개수"
          title="49,65%"
          icon={EmojiEvents}
          color="bgInfo"
          footer={
            <>
              <Box
                component="span"
                fontSize=".875rem"
                color={theme.palette.success.main}
                marginRight=".5rem"
                display="flex"
                alignItems="center"
              >
                <Box
                  component={ArrowUpward}
                  width="1.5rem!important"
                  height="1.5rem!important"
                />{" "}
                10%
              </Box>
              <Box component="span" whiteSpace="nowrap">
                Since yesterday
              </Box>
            </>
          }
        />
      </Grid> */}
    </Grid>
  )

  const skeletonComponent = () => (
    <Grid spacing={3} container> {
      Array.from(new Array(4)).map((i, j) => (
        <Grid item xl={3} lg={6} xs={12} key={j}>
          <Skeleton variant="rect" height={118} />
        </Grid>
      ))  
    }</Grid>
  )

  return (
    <>
      <div className={classes.header}>
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <div>{data ? dataComponent() : skeletonComponent()}</div>
        </Container>
      </div>
    </>
  );
};

export default Header;
