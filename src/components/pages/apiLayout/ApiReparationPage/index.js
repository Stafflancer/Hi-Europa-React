import React, { Component, useState } from "react";
import StepWizard from "react-step-wizard";
import Intro from "components/components/ApiLayout/Reparation/Intro";
import WhichService from "components/components/ApiLayout/Reparation/WhichService";
import WhatProblem from "components/components/ApiLayout/Reparation/WhatProblem";
import MoreDetails from "components/components/ApiLayout/Reparation/MoreDetails";
import Scheduled from "components/components/ApiLayout/Reparation/Scheduled";
import YourInfo from "components/components/ApiLayout/Reparation/YourInfo";
import Summary from "components/components/ApiLayout/Reparation/Summary";
import Done from "components/components/ApiLayout/Reparation/Done";
import CustomPopup from "components/components/ApiLayout/Reparation/CustomPopup/CustomPopup";

class ApiReparationPage extends Component {
  constructor(props) {
    super(props);
  }
  scrollToTop() {
    window.scrollTo({top: 0, left: 0});
  }
  render() {
    return (
      <div className="Api-page">
        <StepWizard onStepChange={this.scrollToTop}>
          <Intro />
          <WhichService />
          <WhatProblem />
          <MoreDetails />
          <Scheduled />
          <YourInfo />
          <Summary />
          <Done />
        </StepWizard>
        {/* <CustomPopup /> */}
      </div>
    );
  }
}

export default ApiReparationPage;
