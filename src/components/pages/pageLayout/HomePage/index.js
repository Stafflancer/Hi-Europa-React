import React, { useState } from "react";
// import logo from "../../../../assets/img/brand/logo.png";
// import { connect } from "react-redux";
// import { authActions } from "../../../../redux/actions/authActions";
// import loginLogo from "../../../../assets/img/svgs/user.svg";
// import { useHistory } from "react-router-dom";
import Banner from "components/components/PageLayout/Banner";
import IntroService from "components/components/PageLayout/IntroService";
import IntroContent from "components/components/PageLayout/IntroContent";
import GetMoreInfo from "components/components/PageLayout/GetMoreInfo";
import Comments from "components/components/PageLayout/Comments";
import JoinUs from "components/components/PageLayout/JoinUs";



const HomePage = (props) => {

  return (
    <div className="home-page">
      <Banner
        homepage
        title="Bienvenue chez Hi Europa"
        description="Nous aidons les familles chinoises à s’installer en France"
      ></Banner>
      <IntroService></IntroService>
      <IntroContent></IntroContent>
      <GetMoreInfo></GetMoreInfo>
      <Comments></Comments>
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
export default HomePage;
