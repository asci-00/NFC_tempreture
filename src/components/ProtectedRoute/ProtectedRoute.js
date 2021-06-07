import React from 'react';
import { Route } from 'react-router-dom';
import auth from 'auth'

const ProtectedRoute = ({ render, ...rest }) => {

  return (
    <Route {...rest} render={
      props => {
        auth.isAuthenticated() ? render(props) : null
      }
    } />
  )
}

export default ProtectedRoute;