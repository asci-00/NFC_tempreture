import React from "react";
import ReactDOM from "react-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import rootReducer, { rootSaga } from './reducer'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "assets/theme/theme.js";

import { Provider } from 'react-redux'

import { BrowserRouter } from "react-router-dom";

import App from './App'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <Alert />
    </BrowserRouter>
  </ThemeProvider>,
  document.querySelector("#root"));
