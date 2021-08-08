import React from "react"
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// core components
import AuthHeader from "components/Headers/AuthHeader.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";

import componentStyles from "assets/theme/layouts/auth.js";

import { useDispatch, useSelector } from 'react-redux'
import { requestAuth, setAuth } from 'actions/auth'

import { getUserPath } from 'assets/js/common.js'

const useStyles = makeStyles(componentStyles)

const Auth = (props) => {
  const classes = useStyles();
  const mainContent = React.useRef(null);
  const { isLogin, level } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const location = useLocation();
  React.useEffect(() => {
    //body css class 수정
    document.body.classList.add(classes.bgDefault);
    //로그인 유효성 검증
    const token = sessionStorage.getItem('token')
    if(token) {
      if(isLogin) props.history.push(getUserPath(level))
      else {
        sessionStorage.removeItem('token')
        dispatch(requestAuth({token})) //create action getUserInfo
      }
    }
    return () => document.body.classList.remove(classes.bgDefault)
  }, [isLogin])

  React.useEffect(() => {
    //scroll 초기화
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  React.useEffect(async () => {
    if (sessionStorage.getItem('token')) {  //login session 존재 확인
      try {
        const loginInfo = {test : 'apply'}//await Auth.getUserInfo(sessionStorage.getItem('token'))
        dispatch(setAuth({loginInfo}))
        props.history.push(getUserPath(level))
      } 
      catch(e) { sessionStorage.remove('token') } 
    }
  }, [])

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        
        <AuthHeader />
        {/* Page content */}
        <Container
          component={Box}
          maxWidth="xl"
          marginTop="-8rem"
          paddingBottom="3rem"
          position="relative"
          zIndex="101"
        >
          <Box component={Grid} container justifyContent="center">
            <Switch>
              {getRoutes(routes)}
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </Box>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
