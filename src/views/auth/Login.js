import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import { useTheme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import Grid from "@material-ui/core/Grid"
// core components
import componentStyles from "assets/theme/views/auth/login.js"
import alert from 'func/common.js'
// action type
import { requestAuth } from 'actions/auth'

// User functionable file
import { signInWithGoogle, signInWithApple, getIDToken } from 'firebase.config'

const useStyles = makeStyles(componentStyles)

function Login(props) {
  const dispatch = useDispatch()
  const classes = useStyles()
  const theme = useTheme()

  const onDebug = (data) => ({ accountType: data.id })
  const onLogin = (userInfo) => {
    const { additionalUserInfo, } = userInfo
    if(additionalUserInfo.isNewUser) props.history.push('/regist')
    else dispatch(requestAuth({token : getIDToken()}))
  }
  return (
    <>
      <Grid item xs={12} lg={5} md={7}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title={
              <Box
                fontSize="80%"
                fontWeight="400"
                component="small"
                color={theme.palette.gray[600]}
              >
                Sign in with
              </Box>
            }
            titleTypographyProps={{
              component: Box,
              textAlign: "center",
              marginBottom: "1rem!important",
              marginTop: ".5rem!important",
              fontSize: "1rem!important",
            }}
            subheader={
              <Box textAlign="center">
                <Box
                  component={Button}
                  variant="contained"
                  marginRight=".5rem!important"
                  classes={{ root: classes.buttonRoot }}
                  onClick={() => signInWithApple().then(res => console.log(res))}
                >
                  <Box component="span" marginRight="4px">
                    <Box
                      alt="..."
                      component="img"
                      width="20px"
                      className={classes.buttonImg}
                      src={
                        require("assets/img/icons/common/apple.svg").default
                      }
                    ></Box>
                  </Box>
                  <Box component="span" marginLeft=".75rem">
                    Apple
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  classes={{ root: classes.buttonRoot }}
                  onClick={() => signInWithGoogle().then(onLogin)}
                >
                  <Box component="span" marginRight="4px">
                    <Box
                      alt="..."
                      component="img"
                      width="20px"
                      className={classes.buttonImg}
                      src={
                        require("assets/img/icons/common/google.svg").default
                      }
                    ></Box>
                  </Box>
                  <Box component="span" marginLeft=".75rem">
                    Google
                  </Box>
                </Button>
              </Box>
            }
          ></CardHeader>
        </Card>
      </Grid>
    </>
  )
}

export default Login
