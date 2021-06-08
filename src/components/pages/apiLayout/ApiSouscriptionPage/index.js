import React, { Component, useState } from "react";
import logo from "../../../../assets/img/brand/logo.png";
import { authActions } from "../../../../redux/actions/authActions";
import loginLogo from "../../../../assets/img/svgs/user.svg";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import { updateHeaderAction } from "redux/actions/headerActions";

import StepWizard from "react-step-wizard";
import Address from "../../../components/ApiLayout/Souscription/Address";
import Dependency from "../../../components/ApiLayout/Souscription/Dependency";
import InsuranceCanceled from "../../../components/ApiLayout/Souscription/InsuranceCanceled";
import SubscriberInfo from "../../../components/ApiLayout/Souscription/SubscriberInfo";
import ErrorNoticeDate from "../../../components/ApiLayout/Souscription/ErrorNoticeDate";
import CancelCurrent from "../../../components/ApiLayout/Souscription/CancelCurrent";
import NewInsurance from "../../../components/ApiLayout/Souscription/NewInsurance";
import Summary from "../../../components/ApiLayout/Souscription/Summary";
import Conditions from "../../../components/ApiLayout/Souscription/Conditions";
import Last from "../../../components/ApiLayout/Souscription/Last";
import Confirm from "../../../components/ApiLayout/Souscription/Confirm";

class ApiSouscriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: props.userInfo,
    };
  }

  updateUserInfo = (key, value) => {
    let userInfo = this.state.userInfo;
    userInfo[key] = value;
    this.setState({ ...this.state, userInfo: userInfo });
    this.props.updateUserInfo(userInfo);
  };

  componentDidMount() {
    this.props.updateHeader("api-result");
    this.props.setActiveMenu("2");
  }

  componentWillUnmount() {
    this.props.updateHeader("H5");
  }
  render() {
    return (
      <div className="Api-page">
        <StepWizard>
          <Address
            update={this.updateUserInfo}
            userInfo={this.state.userInfo}
            activeMenu={this.props.setActiveMenu}
          />
          <Dependency
            update={this.updateUserInfo}
            userInfo={this.state.userInfo}
            activeMenu={this.props.setActiveMenu}
          />
          <InsuranceCanceled
            userInfo={this.state.userInfo}
            update={this.updateUserInfo}
            activeMenu={this.props.setActiveMenu}
          />
          <ErrorNoticeDate
            userInfo={this.state.userInfo}
            update={this.updateUserInfo}
          />
          <SubscriberInfo
            userInfo={this.state.userInfo}
            update={this.updateUserInfo}
            activeMenu={this.props.setActiveMenu}
          />
          <CancelCurrent
            userInfo={this.state.userInfo}
            update={this.updateUserInfo}
            activeMenu={this.props.setActiveMenu}
          />
          <NewInsurance
            userInfo={this.state.userInfo}
            update={this.updateUserInfo}
            activeMenu={this.props.setActiveMenu}
          />
          <Summary
            userInfo={this.state.userInfo}
            formData={this.state.userInfo}
            update={this.updateUserInfo}
            activeMenu={this.props.setActiveMenu}
          />
          <Conditions
            userInfo={this.state.userInfo}
            formData={this.state.userInfo}
            update={this.updateUserInfo}
            activeMenu={this.props.setActiveMenu}
          />
          <Last
            userInfo={this.state.userInfo}
            update={this.updateUserInfo}
            activeMenu={this.props.setActiveMenu}
          />
          <Confirm
            userInfo={this.state.userInfo}
            update={this.updateUserInfo}
            activeMenu={this.props.setActiveMenu}
          />
        </StepWizard>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { userInfo } = state.userInfoReducer;
  return { userInfo };
}

const mapDispatchToProps = (d) => ({
  updateUserInfo: (data) => d(userInfoActions.updateUserInfo(data)),
  updateHeader: bindActionCreators(updateHeaderAction.updateHeader, d),
  setActiveMenu: bindActionCreators(updateHeaderAction.setActiveMenu, d),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiSouscriptionPage);
