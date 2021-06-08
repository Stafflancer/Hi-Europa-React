import React, { Component, useState } from "react";
import Done from "components/components/ApiLayout/Reparation/Done";
import { updateHeaderAction } from "redux/actions/headerActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ConfirmedInterventionPage extends Component {
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
        <Done />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateHeader: bindActionCreators(updateHeaderAction.updateHeader, dispatch),
});

export default connect(null, mapDispatchToProps)(ConfirmedInterventionPage);
