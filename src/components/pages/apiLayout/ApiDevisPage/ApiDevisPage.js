import React, { Component, useState } from "react";
import logo from "../../../../assets/img/brand/logo.png";
import { connect } from "react-redux";
import { authActions } from "../../../../redux/actions/authActions";
import loginLogo from "../../../../assets/img/svgs/user.svg";
import { useHistory } from "react-router-dom";

import StepWizard from "react-step-wizard";
import PostCode from "../../../components/ApiLayout/Devis/PostCode";
import HouseType from "../../../components/ApiLayout/Devis/HouseType";
import Ownership from "../../../components/ApiLayout/Devis/Ownership";
import ResidenceOrder from "../../../components/ApiLayout/Devis/ResidenceOrder";
import ApartmentDetail from "../../../components/ApiLayout/Devis/ApartmentDetail";
import ApartmentRooms from "../../../components/ApiLayout/Devis/ApartmentRooms";
import InsuranceStatus from "../../../components/ApiLayout/Devis/InsuranceStatus";
import InsuranceStatusYes from "../../../components/ApiLayout/Devis/InsuranceStatusYes";
import InsuranceStatusNo from "../../../components/ApiLayout/Devis/InsuranceStatusNo";
import InsuranceConfirm from "../../../components/ApiLayout/Devis/InsuranceConfirm";
import ErrorNoticeOne from "../../../components/ApiLayout/Devis/ErrorNoticeOne";
import ErrorNoticeSecond from "../../../components/ApiLayout/Devis/ErrorNoticeSecond";
import InsuranceUserDetail from "../../../components/ApiLayout/Devis/InsuranceUserDetail";
import ApiDevisResult from "../../../components/ApiLayout/Devis/Result";

class ApiDevisPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      bShowResult: false
    }
  };

  updateForm = (key, value) => {
    let formData = this.state.form;
    formData[key] = value;
    this.setState(form => ({ formData }));
  };

  showResult = () => {
    this.props.showResult();
    this.setState({bShowResult: true});
  };

  render() {
    if(this.state.bShowResult) {
      return (<ApiDevisResult formData={this.state.form} />);
    } else {
      return (
        <div className="Api-page">
          <StepWizard>
            <PostCode update={this.updateForm} />
            <HouseType update={this.updateForm} />
            <Ownership update={this.updateForm} />
            <ResidenceOrder update={this.updateForm} />
            <ApartmentDetail update={this.updateForm} />
            <ApartmentRooms update={this.updateForm} />
            <InsuranceStatus update={this.updateForm} />
            <InsuranceStatusYes update={this.updateForm} />
            <InsuranceStatusNo update={this.updateForm} />
            <InsuranceConfirm update={this.updateForm} />
            <ErrorNoticeOne update={this.updateForm} />
            <ErrorNoticeSecond update={this.updateForm} />
            <InsuranceUserDetail showResult={this.showResult} update={this.updateForm} formData={this.state.form} />
          </StepWizard>
        </div>
      )
    }
  }
}

export default ApiDevisPage;
