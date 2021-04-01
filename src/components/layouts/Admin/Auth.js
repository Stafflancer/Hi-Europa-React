import React from 'react'
import SignIn from "../../../components/pages/admin/Auth/SignIn";
import NotFound from "../../../components/pages/admin/NotFound";
import {Route as RouteDom, Switch} from "react-router-dom";

const Auth = () => {
  return (
    <div className="page main-signin-wrapper">
      <Switch>
        <RouteDom
          path="/admin/login"
          component={SignIn}
        />
        <RouteDom component={NotFound} />
      </Switch>
    </div>
  )
}

export default Auth;
