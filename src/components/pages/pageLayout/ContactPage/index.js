import React, { useState } from "react";
import Banner from "components/components/PageLayout/Banner";
import JoinUs from "components/components/PageLayout/JoinUs";
import ContactUs from "components/components/PageLayout/ContactUs";
import contactUsIcon from "assets/img/icons/contact-us-icon.svg";
import { useTranslation } from "react-i18next";
import _Helmet from "components/components/_Helmet";

const ContactPage = (props) => {
  const { t } = useTranslation();
  return (
    <div className="FAQ-page">
      <_Helmet pageName="contact"></_Helmet>
      <Banner
        title={t("Contact Page.banner-title")}
        img={contactUsIcon}
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
