import React, { Component } from "react";
import ReactLoading from "react-loading";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userInfoActions } from "../../../../redux/actions";
import { updateHeaderAction } from "redux/actions/headerActions";

import StepWizard from "react-step-wizard";
import PostCode from "../../../components/ApiLayout/Devis/PostCode";
import AccomodationType from "../../../components/ApiLayout/Devis/AccomodationType";
import ProspectType from "../../../components/ApiLayout/Devis/ProspectType";
import ResidenceType from "../../../components/ApiLayout/Devis/ResidenceType";
import ApartmentDetail from "../../../components/ApiLayout/Devis/ApartmentDetail";
import ApartmentRooms from "../../../components/ApiLayout/Devis/ApartmentRooms";
import InsuranceStatus from "../../../components/ApiLayout/Devis/InsuranceStatus";
import InsuranceStatusYes from "../../../components/ApiLayout/Devis/InsuranceStatusYes";
import InsuranceStatusNo from "../../../components/ApiLayout/Devis/InsuranceStatusNo";
import InsuranceConfirm from "../../../components/ApiLayout/Devis/InsuranceConfirm";
import ErrorNoticeOne from "../../../components/ApiLayout/Devis/ErrorNoticeOne";
import ErrorNoticeSecond from "../../../components/ApiLayout/Devis/ErrorNoticeSecond";
import ErrorHouse from "../../../components/ApiLayout/Devis/ErrorHouse";
import ErrorResidence from "../../../components/ApiLayout/Devis/ErrorResidence";
import InsuranceUserDetail from "../../../components/ApiLayout/Devis/InsuranceUserDetail";
import ApiDevisResult from "../../../components/ApiLayout/Devis/Result";

class ApiDevisPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: props.userInfo,
      bShowResult: false,
      bLoading: false,
      initPrice: {
        price: 0,
        opReplaceValue: 0,
        opProtectionValueables: 0,
        opElectricalDamage: 0,
        opVol: 0,
        opAffaires: 0,
        opProtectionJuridical: 0,
        opInsuranceSchool: 0,
        opDependence: 0,
      },
    };
  }

  componentDidMount() {
    this.props.updateHeader("api-header");
  }

  componentWillUnmount() {
    this.props.updateHeader("H5");
  }

  updateUserInfo = (key, value) => {
    let userInfo = this.state.userInfo;
    userInfo[key] = value;
    this.setState({ ...this.state, userInfo: userInfo });
    this.props.updateUserInfo(userInfo);
  };

  updateInitPrice = (price) => {
    this.setState({ ...this.state, initPrice: price });
  };

  showResult = () => {
    this.props.updateHeader("api-result");
    this.props.setActiveMenu("1");
    this.setState({ bLoading: false });
    this.setState({ bShowResult: true });
  };

  loadStatus = (status) => {
    this.setState({ bLoading: status });
  };

  render() {
    if (this.state.bShowResult) {
      return (
        <ApiDevisResult
          userInfo={this.state.userInfo}
          initPrice={this.state.initPrice}
          update={this.updateUserInfo}
        />
      );
    } else {
      return (
        <div className="Api-page">
          {!this.state.bLoading ? (
            <StepWizard isHashEnabled isLazyMount>
              <PostCode
                update={this.updateUserInfo}
                userInfo={this.state.userInfo}
              />
              <AccomodationType
                update={this.updateUserInfo}
                userInfo={this.state.userInfo}
              />
              <ProspectType
                update={this.updateUserInfo}
                userInfo={this.state.userInfo}
              />
              <ResidenceType
                update={this.updateUserInfo}
                userInfo={this.state.userInfo}
              />
              <ApartmentDetail
                update={this.updateUserInfo}
                userInfo={this.state.userInfo}
              />
              <ApartmentRooms
                update={this.updateUserInfo}
                userInfo={this.state.userInfo}
              />
              <InsuranceStatus
                update={this.updateUserInfo}
                userInfo={this.state.userInfo}
              />
              <InsuranceStatusYes update={this.updateUserInfo} />
              <InsuranceStatusNo update={this.updateUserInfo} />
              <InsuranceConfirm update={this.updateUserInfo} />
              <ErrorNoticeOne update={this.updateUserInfo} userInfo={this.state.userInfo} />
              <ErrorNoticeSecond update={this.updateUserInfo} userInfo={this.state.userInfo} />
              <InsuranceUserDetail
                hashKey="insurance-user-detail"
                showResult={this.showResult}
                update={this.updateUserInfo}
                updateInitPrice={this.updateInitPrice}
                userInfo={this.state.userInfo}
              />
              <ErrorHouse update={this.updateUserInfo} userInfo={this.state.userInfo} />
              <ErrorResidence update={this.updateUserInfo} userInfo={this.state.userInfo} />
            </StepWizard>
          ) : (
            <ReactLoading
              className="loading-bar"
              type={"bars"}
              color="#C62D54"
            />
          )}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  const { userInfo } = state.userInfoReducer;
  return { userInfo };
}

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: (data) => dispatch(userInfoActions.updateUserInfo(data)),
  updateHeader: bindActionCreators(updateHeaderAction.updateHeader, dispatch),
  setActiveMenu: bindActionCreators(updateHeaderAction.setActiveMenu, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApiDevisPage);
