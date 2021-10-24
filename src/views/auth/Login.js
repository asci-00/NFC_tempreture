import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import Grid from "@material-ui/core/Grid"
// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles"
// action type
import { clearError, requestAuth } from 'actions/auth'
import { requestNewAccount, requestNewAccountGroup } from 'apis/account'
// core components
import componentStyles from "assets/theme/views/auth/login.js"
// User functionable file
import { getCurrentUser, getIDToken, removeUser, signInWithApple, signInWithGoogle } from 'firebase.config'
import alert from 'func/common.js'
import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import Regist from 'views/admin/popup/Regist'

const useStyles = makeStyles(componentStyles)

function Login(props) {
  const dispatch = useDispatch()
  const error = useSelector(state => state.auth.error)
  const [open, setOpen] = useState(false)
  const [info, setInfo] = useState({
    name : '',
    email : '',
    uuid : ''
  })
  const classes = useStyles()
  const theme = useTheme()

  const onLogin = async (userInfo) => {
    const { additionalUserInfo } = userInfo
    const { email, name } = additionalUserInfo.profile
    const { uid : uuid } = await getCurrentUser()

    if(additionalUserInfo.isNewUser) {
      try {
        setInfo({email, name, uuid})
        setOpen(true)
      } catch(err) { removeUser() }
    }
    else {
      const token = await getIDToken()
      dispatch(requestAuth({ token }))
    }
  }

  const createUser = async (type, userInfo) => {
    const { name, groupName, groupCode, address } = userInfo
    if(type === 'new') requestNewAccountGroup(info.name, info.email, info.uuid, userInfo.groupName, userInfo.address)
    else requestNewAccount(info.name, info.email, info.uuid, userInfo.groupCode)
  }

  if(error) alert({
    message: 'Login fail!',
    cancel : false,
    onClose : () => dispatch(clearError())
  })

  return (
    <>
      <Grid item xs={12} lg={5} md={7}>
        <Regist {...info} open={open} onSubmit={createUser} onClose={()=>{
          removeUser()
          setOpen(false)
        }}/>
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
