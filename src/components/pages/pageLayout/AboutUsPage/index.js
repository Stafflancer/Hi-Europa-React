import React, { useState } from "react";
// import logo from "../../../../assets/img/brand/logo.png";
// import { connect } from "react-redux";
// import { authActions } from "../../../../redux/actions/authActions";
// import loginLogo from "../../../../assets/img/svgs/user.svg";
// import { useHistory } from "react-router-dom";
import Banner from "components/components/PageLayout/Banner";
import GetMoreInfo from "components/components/PageLayout/GetMoreInfo";
import JoinUs from "components/components/PageLayout/JoinUs";

const AboutUsPage = (props) => {
  return (
    <div className="about-us-page">
      <Banner title="Qui sommes-nous ?"></Banner>
      <div className="content-wrap">
        <h4 className="title">Notre raison d'être</h4>
        <p className="content">
          Chez Hi Europa, nous pensons que l’attention sincère portée à l’autre
          permet un monde où chacun trouve sa place. Nous accompagnons ceux qui
          viennent de loin en essayant de simplifier leur vie quotidienne et
          d’effacer les obstacles qu’ils rencontrent en France ou en Europe. Nous
          apportons notre soutien dans les langues et les cultures d’origine de
          ces communautés.
        </p>
        <h4 className="title">Notre raison d'être</h4>
        <p className="content">
          Chez Hi Europa, nous pensons que l’attention sincère portée à l’autre
          permet un monde où chacun trouve sa place. Nous accompagnons ceux qui
          viennent de loin en essayant de simplifier leur vie quotidienne et
          d’effacer les obstacles qu’ils rencontrent en France ou en Europe. Nous
          apportons notre soutien dans les langues et les cultures d’origine de
          ces communautés.
        </p>
        <h4 className="title">Notre raison d'être</h4>
        <p className="content">
          Chez Hi Europa, nous pensons que l’attention sincère portée à l’autre
          permet un monde où chacun trouve sa place. Nous accompagnons ceux qui
          viennent de loin en essayant de simplifier leur vie quotidienne et
          d’effacer les obstacles qu’ils rencontrent en France ou en Europe. Nous
          apportons notre soutien dans les langues et les cultures d’origine de
          ces communautés.
        </p>
        <h4 className="title">Notre raison d'être</h4>
        <p className="content">
          Chez Hi Europa, nous pensons que l’attention sincère portée à l’autre
          permet un monde où chacun trouve sa place. Nous accompagnons ceux qui
          viennent de loin en essayant de simplifier leur vie quotidienne et
          d’effacer les obstacles qu’ils rencontrent en France ou en Europe. Nous
          apportons notre soutien dans les langues et les cultures d’origine de
          ces communautés.
        </p>
        <h4 className="title">Notre raison d'être</h4>
        <p className="content">
          Chez Hi Europa, nous pensons que l’attention sincère portée à l’autre
          permet un monde où chacun trouve sa place. Nous accompagnons ceux qui
          viennent de loin en essayant de simplifier leur vie quotidienne et
          d’effacer les obstacles qu’ils rencontrent en France ou en Europe. Nous
          apportons notre soutien dans les langues et les cultures d’origine de
          ces communautés.
        </p>
        <h4 className="title">Notre raison d'être</h4>
        <p className="content">
          Chez Hi Europa, nous pensons que l’attention sincère portée à l’autre
          permet un monde où chacun trouve sa place. Nous accompagnons ceux qui
          viennent de loin en essayant de simplifier leur vie quotidienne et
          d’effacer les obstacles qu’ils rencontrent en France ou en Europe. Nous
          apportons notre soutien dans les langues et les cultures d’origine de
          ces communautés.
        </p>
        <h4 className="title">Notre raison d'être</h4>
        <p className="content">
          Chez Hi Europa, nous pensons que l’attention sincère portée à l’autre
          permet un monde où chacun trouve sa place. Nous accompagnons ceux qui
          viennent de loin en essayant de simplifier leur vie quotidienne et
          d’effacer les obstacles qu’ils rencontrent en France ou en Europe. Nous
          apportons notre soutien dans les langues et les cultures d’origine de
          ces communautés.
        </p>
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
export default AboutUsPage;
