import React from "react";
import ReactDOM from "react-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "assets/css/common.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "assets/theme/theme.js";

import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

import store from './store.js'
import App from './App'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
  document.querySelector("#root"));
