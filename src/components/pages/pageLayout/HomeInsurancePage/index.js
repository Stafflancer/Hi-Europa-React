import React, { useState } from "react";
// import logo from "../../../../assets/img/brand/logo.png";
// import { connect } from "react-redux";
// import { authActions } from "../../../../redux/actions/authActions";
// import loginLogo from "../../../../assets/img/svgs/user.svg";
// import { useHistory } from "react-router-dom";
import Banner from "components/components/PageLayout/Banner";
import IntroContent from "components/components/PageLayout/IntroContent";
import GetMoreInfo from "components/components/PageLayout/GetMoreInfo";
import Comments from "components/components/PageLayout/Comments";
import JoinUs from "components/components/PageLayout/JoinUs";
import GetYourQuote from "components/components/PageLayout/GetYourQuote";
import FAQ from "components/components/PageLayout/FAQ";

const HomeInsurancePage = (props) => {
  return (
    <div className="service-page">
      <Banner title="Assurance habitation"></Banner>
      <GetYourQuote></GetYourQuote>
      <IntroContent></IntroContent>
      <GetMoreInfo></GetMoreInfo>
      <FAQ></FAQ>
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
export default HomeInsurancePage;
