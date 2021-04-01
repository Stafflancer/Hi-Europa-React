import React, { useState } from "react";
// import logo from "../../../../assets/img/brand/logo.png";
// import { connect } from "react-redux";
// import { authActions } from "../../../../redux/actions/authActions";
// import loginLogo from "../../../../assets/img/svgs/user.svg";
// import { useHistory } from "react-router-dom";
import Banner from "components/components/PageLayout/Banner";
import JoinUs from "components/components/PageLayout/JoinUs";
import ContactUs from "components/components/PageLayout/ContactUs";


const ContactPage = (props) => {
  return (
    <div className="FAQ-page">
      <Banner
        title="Nous contacter"
      ></Banner>
      <ContactUs></ContactUs>
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
export default ContactPage;
