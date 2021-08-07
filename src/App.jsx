import React from "react";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

import ProtectedRoute from 'components/ProtectedRoute'
import Alert from 'components/alert'

import { Route, Switch } from "react-router-dom"

export default function App() {
    return (
        <>
            <Switch>
                <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                <ProtectedRoute path="/admin" render={(props) => <AdminLayout {...props} />} />
                <ProtectedRoute path="/user" render={(props) => <AdminLayout {...props} />} />
                <Route path="*" render={(props) => <AuthLayout {...props} />} />
            </Switch>
            <Alert/>
        </>
    )
}