import React, { useState } from "react";
import Banner from "components/components/PageLayout/Banner";
import GetMoreInfo from "components/components/PageLayout/GetMoreInfo";
import JoinUs from "components/components/PageLayout/JoinUs";
import GetYourQuote from "components/components/PageLayout/GetYourQuote";
import FAQInsurance from "components/components/PageLayout/FAQInsurance";
import homeInsuranceIcon from "assets/img/icons/home-insurance-icon.svg";
import { useTranslation } from "react-i18next";
import CustomLink from "components/components/CustomLink";
import { connect } from "react-redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import { bindActionCreators } from "redux";
import _Helmet from "components/components/_Helmet";

const HomeInsurancePage = (props) => {
  const { t } = useTranslation();
  const [postalCode, setpostalCode] = useState("");
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    setpostalCode(value);
  };
  const storePostalCode = () => {
    props.updateUserInfo({ postCode: postalCode });
  };
  return (
    <div className="service-page">
      <_Helmet pageName="home insurance"></_Helmet>
      <Banner
        title={t("Assurance Habitation Page.banner-title")}
        img={homeInsuranceIcon}
      ></Banner>
      <GetYourQuote
        to="/api/devis"
        message={t("Assurance Habitation Page.promise-phrase")}
        CTA={t("COMING SOON")}
        disabled
        // CTA={t("Assurance Habitation Page.CTA")}
      ></GetYourQuote>
      <div className="intro-content">
        <div className="content-block">
          <h4 className="title">
            {t("Assurance Habitation Page.Commercial arguments 1 - title")}
          </h4>
          <p className="description">
            {t("Assurance Habitation Page.Commercial arguments 1 - content")}
          </p>
        </div>
        <div className="content-block">
          <h4 className="title">
            {t("Assurance Habitation Page.Commercial arguments 2 - title")}
          </h4>
          <p className="description">
            {t("Assurance Habitation Page.Commercial arguments 2 - content")}
          </p>
        </div>
        <div className="content-block">
          <h4 className="title">
            {t("Assurance Habitation Page.Commercial arguments 3 - title")}
          </h4>
          <p className="description">
            {t("Assurance Habitation Page.Commercial arguments 3 - content")}
          </p>
        </div>
        <div className="content-block">
          <h4 className="title">
            {t("Assurance Habitation Page.Commercial arguments 4 - title")}
          </h4>
          <p className="description">
            {t("Assurance Habitation Page.Commercial arguments 4 - content")}
          </p>
        </div>
        <div className="content-block">
          <h4 className="title">
            {t("Assurance Habitation Page.Commercial arguments 5 - title")}
          </h4>
          <p className="description">
            {t("Assurance Habitation Page.Commercial arguments 5 - content")}
          </p>
        </div>
      </div>
      <div className="get-your-quote no-title">
        <div className="button-group">
          <input
            type="text"
            className="my-postal-code"
            placeholder={t("my post code")}
            value={postalCode}
            onInput={handleChange}
            maxLength="5"
            disabled
          />
          <CustomLink
            to="/api/devis"
            className="custom-button_red disabled"
            onClick={storePostalCode}
          >
            {t("COMING SOON")}
            {/* {t("Assurance Habitation Page.CTA")} */}
          </CustomLink>
        </div>
      </div>
      <FAQInsurance></FAQInsurance>
      <GetMoreInfo></GetMoreInfo>
      <JoinUs></JoinUs>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfoReducer.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: bindActionCreators(userInfoActions.updateUserInfo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeInsurancePage);
