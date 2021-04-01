import React, { useState } from "react";
// import logo from "../../../../assets/img/brand/logo.png";
// import { connect } from "react-redux";
// import { authActions } from "../../../../redux/actions/authActions";
// import loginLogo from "../../../../assets/img/svgs/user.svg";
// import { useHistory } from "react-router-dom";
import Banner from "components/components/PageLayout/Banner";
import GetMoreInfo from "components/components/PageLayout/GetMoreInfo";
import JoinUs from "components/components/PageLayout/JoinUs";
import ServiceTag from "components/components/PageLayout/ServiceTag";

const FAQPage = (props) => {
  return (
    <div className="FAQ-page">
      <Banner title="FAQ"></Banner>
      <div className="group-tag">
        <ServiceTag></ServiceTag>
        <ServiceTag></ServiceTag>
        <ServiceTag></ServiceTag>
      </div>
      <GetMoreInfo></GetMoreInfo>
      <JoinUs></JoinUs>
    </div>
  );
};

// function mapStateToProps(state) {
//   const { loggingIn, loggedIn, failure } = state.authReducer;
//   return { loggingIn, loggedIn, failure };
// }

// const mapDispatchToProps = (d) => ({
//   login: (data) => d(authActions.login(data)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default FAQPage;
