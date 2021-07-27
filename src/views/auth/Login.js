import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons components
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";

// core components
import componentStyles from "assets/theme/views/auth/login.js";

// action type
import { requestAuth } from 'reducer/auth'

// User Components
import Warning from 'components/Dialog/Warning'

// User functionable file
import { isAvailable } from 'func/data'
import { signInWithGoogle, signInWithApple, getIDToken, onSignIn } from 'firebase.config'

const useStyles = makeStyles(componentStyles);

function Login(props) {
  const [info, setInfo] = useState({id : '', pw : ''})
  const [open, setOpen] = useState(false)
  const {isLogin, accountType} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const classes = useStyles();
  const theme = useTheme();

  const onDebug = (data) => ({accountType : data.id})

  const onSubmit = (accInfo) => {
    if(!isAvailable(accInfo.id) || !isAvailable(accInfo.pw)) setOpen(true)
    else dispatch(requestAuth(onDebug(accInfo)))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')) { 
      //token 유효성 검사 api 호출
    }
    if(isLogin) props.history.push(`/${accountType}`)
  }, [isLogin])

  return (
    <>
      <Warning open = {open} onClose={() => setOpen(false)}>
        아이디와 패스워드를 입력하십시오.
      </Warning>
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
                  onClick={() => {
                    signInWithGoogle().then(res => {
                      console.log(res)
                      onSignIn(res)
                      //getIDToken().then(res => console.log(res))
                    })
                  }}
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
          <CardContent classes={{ root: classes.cardContent }}>
            <Box
              color={theme.palette.gray[600]}
              textAlign="center"
              marginBottom="1rem"
              marginTop=".5rem"
              fontSize="1rem"
            >
              <Box fontSize="80%" fontWeight="400" component="small">
                Or sign in with credentials
              </Box>
            </Box>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="email"
                placeholder="Email"
                startAdornment={
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                }
                onChange = {ev => setInfo({...info, id:ev.target.value})}
                value = {info.id}
              />
            </FormControl>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="password"
                placeholder="Password"
                startAdornment={
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                }
                onChange = {ev => setInfo({...info, pw:ev.target.value})}
                value = {info.pw}
              />
            </FormControl>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Remeber me"
              labelPlacement="end"
              classes={{
                root: classes.formControlLabelRoot,
                label: classes.formControlLabelLabel,
              }}
            />
            <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
              <Button color="primary" variant="contained" onClick={()=>onSubmit({...info})}>
                Sign in
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Grid container component={Box} marginTop="1rem">
          <Grid item xs={6} component={Box} textAlign="left">
            <a
              href="#admui"
              onClick={(e) => e.preventDefault()}
              className={classes.footerLinks}
            >
              Forgot password
            </a>
          </Grid>
          <Grid item xs={6} component={Box} textAlign="right">
            <a
              href="#admui"
              onClick={(e) => e.preventDefault()}
              className={classes.footerLinks}
            >
              Create new account
            </a>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;