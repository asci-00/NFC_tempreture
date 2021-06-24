import React from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AdminLayout from "layouts/Admin"
import AuthLayout from "layouts/Auth"

const ProtectedRoute = ({ render, ...rest }) => {
  const accType = useSelector(state => state.auth.accountType)
  
  return (
    <Route {...rest} render={
      props => {
        const path = props.location.pathname.split('/')
        // console.log(accType, props.match.path)
        if(accType === 'guest') return <AuthLayout {...props}/>
        else if(`/${accType}` !== props.match.path) return <AdminLayout {...props} />
        else return render(props)
      }
    } />
  )
}

export default ProtectedRoute;