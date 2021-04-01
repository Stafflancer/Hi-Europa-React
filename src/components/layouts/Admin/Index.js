import React, {useEffect} from 'react'
import Header from '../../../components/components/header'
import SideMenu from '../../../components/components/sideMenu'
import {Route as RouteDom, Switch, withRouter} from "react-router-dom";
import {routes} from "../../../modules/routes";
import {connect} from "react-redux";
import {adminActions} from "../../../redux/actions";
import NotFound from "../../../components/pages/admin/NotFound";

const Index = ({getUser}) => {
  useEffect(() => {
    getUser()
  }, []);

  return (
    <section className="main-body leftmenu">
      <div>
        <Header/>
        <div className="jumps-prevent"></div>
        <div>
          <div>
            <SideMenu/>
          </div>
          <div className="main-content side-content pt-0">
            <div className="container-fluid">
              <div className="inner-body">
                <Switch>
                  <RouteDom exact path="/" render={() => (window.location.href = "/dashboard")} />
                  {routes.map(r => {
                    return (
                      <RouteDom
                        path={r.path}
                        key={r.path}
                        exact={true}
                        component={r.component}
                      />
                    );
                  })}
                  <RouteDom component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function mapStateToProps(state) {
  const { user } = state.adminReducer;
  return { user };
}

const mapDispatchToProps = d => ({
  getUser: () => d(adminActions.getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));
