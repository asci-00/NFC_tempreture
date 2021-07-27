import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "assets/theme/theme.js";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

import ProtectedRoute from 'components/ProtectedRoute'

import rootReducer, { rootSaga } from './reducer'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()
const store = createStore( rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <ProtectedRoute path="/admin" render={(props) => <AdminLayout {...props} />}/>
          <ProtectedRoute path="/user" render={(props) => <AdminLayout {...props} />}/>
          <Route path="*" render={(props) => <AuthLayout {...props} />} />
        </Switch>
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
  document.querySelector("#root")
);
