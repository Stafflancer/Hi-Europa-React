import React, { Component } from "react";
import Header from "../../components/ApiLayout/Header/Header"
import HeaderResult from "../../components/ApiLayout/Header/HeaderResult"
import { Route as RouteDom, Switch, withRouter } from "react-router-dom";
import { routes } from "../../../modules/apiLayout/routes";
import NotFound from "../../pages/admin/NotFound";

class ApiLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerType: ''
    };
  }

  showResult = () => {
    this.setState({headerType: 'result'});
  };

  renderHeader = () => {
    if(this.state.headerType == '') {
      return (<Header />);
    } else {
      return (<HeaderResult />);
    }
  }

  render() {
    return (
      <div className="page-wrap">
        {this.renderHeader()}
        <div className="page-container">
          <div className="page-content">
            <Switch>
            <RouteDom
              exact
              path="/api"
              render={() => (window.location.href = "/api/devis")}
            />
              {routes.map((r) => {
                return (
                  <RouteDom
                    path={r.path}
                    key={r.path}
                    exact={true}
                    render={(props) => <r.component {...props} showResult={this.showResult} />}
                  />
                );
              })}
              <RouteDom component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default ApiLayout;
