import React from "react";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

import Alert from 'components/alert'

import { Route, Switch } from "react-router-dom"

export default function App() {
    return (
        <>
            <Switch>
                <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                <Route path="/user" render={(props) => <AdminLayout {...props} />} />
                <Route path="*" render={(props) => <AuthLayout {...props} />} />
            </Switch>
            <Alert/>
        </>
    )
}