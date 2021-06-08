import React, { Component, useState } from "react";
import Payment from "components/components/ApiLayout/Reparation/Payment";
import { updateHeaderAction } from "redux/actions/headerActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class PaymentIMAPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  scrollToTop() {
    window.scrollTo({ top: 0, left: 0 });
  }
  componentDidMount() {
    this.props.updateHeader("api-header");
  }
  componentWillUnmount() {
    this.props.updateHeader("H5");
  }
  render() {
    return (
      <div className="Api-page">
        <Payment />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateHeader: bindActionCreators(updateHeaderAction.updateHeader, dispatch),
});

export default connect(null, mapDispatchToProps)(PaymentIMAPage);
