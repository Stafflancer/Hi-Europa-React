import React, { Component, useState } from "react";
import StepWizard from "react-step-wizard";
import Intro from "components/components/ApiLayout/Reparation/Intro";
import WhichService from "components/components/ApiLayout/Reparation/WhichService";
import WhatProblem from "components/components/ApiLayout/Reparation/WhatProblem";
import MoreDetails_1 from "components/components/ApiLayout/Reparation/MoreDetails_1";
import MoreDetails_2 from "components/components/ApiLayout/Reparation/MoreDetails_2";
import Scheduled from "components/components/ApiLayout/Reparation/Scheduled";
import YourInfo from "components/components/ApiLayout/Reparation/YourInfo";
import Summary from "components/components/ApiLayout/Reparation/Summary";
import { IMA } from "APIs/IMA";
import { updateHeaderAction } from "redux/actions/headerActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";

class _ApiReparationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedServiceType: "",
      serviceId: null,
      childProblem: {
        index: null,
        problems: [],
      },
      childProblem_2: {
        index: null,
        problems: [],
      },
    };
  }
  setServiceType = (value) => {
    this.setState({
      selectedServiceType: value,
    });
  };
  setChildProblem = (p) => {
    this.setState({
      childProblem: {
        index: p.index,
        problems: p.problem["child-step"],
      },
    });
  };
  setChildProblem2 = (p) => {
    this.setState({
      childProblem_2: {
        index: p.index,
        problems: p.problem["child-step"],
      },
    });
  };
  setServiceId = (id) => {
    this.setState({
      serviceId: id,
    });
  };
  scrollToTop() {
    window.scrollTo({ top: 0, left: 0 });
  }
  componentDidMount() {
    this.props.updateHeader("api-header");
    IMA.getAccessToken();
  }
  componentWillUnmount() {
    this.props.updateHeader("H5");
  }
  render() {
    const { selectedServiceType, childProblem, childProblem_2, serviceId } =
      this.state;
    const { t } = this.props;
    return (
      <div className="Api-page">
        <StepWizard onStepChange={this.scrollToTop} isHashEnabled isLazyMount>
          <Intro />
          <WhichService
            hashKey={t("hash.which-service")}
            setServiceType={this.setServiceType}
          />
          <WhatProblem
            hashKey={t("hash.what-problem")}
            selectedServiceType={selectedServiceType}
            setChildProblem={this.setChildProblem}
            setServiceId={this.setServiceId}
          />
          <MoreDetails_1
            selectedServiceType={selectedServiceType}
            hashKey={t("hash.more-details-1")}
            childProblem={childProblem}
            setChildProblem2={this.setChildProblem2}
            setServiceId={this.setServiceId}
          />
          <MoreDetails_2
            selectedServiceType={selectedServiceType}
            hashKey={t("hash.more-details-2")}
            childProblem_2={childProblem_2}
            detailIndex1={childProblem.index}
            setServiceId={this.setServiceId}
          />
          <Scheduled hashKey={t("hash.scheduled")} serviceId={serviceId} />
          <YourInfo hashKey={t("hash.your-info")} />
          <Summary hashKey={t("hash.summary")} />
        </StepWizard>
      </div>
    );
  }
}

const ApiReparationPage = withTranslation()(_ApiReparationPage);

const mapDispatchToProps = (dispatch) => ({
  updateHeader: bindActionCreators(updateHeaderAction.updateHeader, dispatch),
});

export default connect(null, mapDispatchToProps)(ApiReparationPage);
