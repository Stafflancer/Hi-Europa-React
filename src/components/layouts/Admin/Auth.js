import React from "react";
import SignIn from "../../../components/pages/admin/Auth/SignIn";
import NotFound from "../../../components/pages/admin/NotFound";
import { Route as RouteDom, Switch, Redirect } from "react-router-dom";

const Auth = () => {
  return (
    <div className="page main-signin-wrapper">
      <Switch>
        <RouteDom
          path="/admin"
          exact
          render={() => <Redirect to="/admin/login" />}
        />
        <RouteDom path="/admin/login" exact component={SignIn} />
        <RouteDom component={NotFound} />
      </Switch>
    </div>
  );
};

export default Auth;
