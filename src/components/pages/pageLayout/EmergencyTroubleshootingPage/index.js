import React, { useState } from "react";
import Banner from "components/components/PageLayout/Banner";
import GetMoreInfo from "components/components/PageLayout/GetMoreInfo";
import JoinUs from "components/components/PageLayout/JoinUs";
import GetYourQuote from "components/components/PageLayout/GetYourQuote";
import FAQRepair from "components/components/PageLayout/FAQRepair";
import emergencyRepairIcon from "assets/img/icons/emergency-repair-icon.svg";
import { useTranslation } from "react-i18next";
import CustomLink from "components/components/CustomLink";
import { connect } from "react-redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import { bindActionCreators } from "redux";
import _Helmet from "components/components/_Helmet";

const EmergencyTroubleshootingPage = (props) => {
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
      <_Helmet pageName="emergency troubleshooting"></_Helmet>
      <Banner
        title={t("Dépannage Urgence Page.banner-title")}
        img={emergencyRepairIcon}
      ></Banner>
      <GetYourQuote
        to="/api/reparation"
        message={t("Dépannage Urgence Page.promise-phrase")}
        CTA={t("Dépannage Urgence Page.CTA")}
      ></GetYourQuote>
      <div className="intro-content">
        <div className="content-block">
          <h4 className="title">
            {t("Dépannage Urgence Page.Commercial arguments 1 - title")}
          </h4>
          <p className="description">
            {t("Dépannage Urgence Page.Commercial arguments 1 - content")}
          </p>
        </div>
        <div className="content-block">
          <h4 className="title">
            {t("Dépannage Urgence Page.Commercial arguments 2 - title")}
          </h4>
          <p className="description">
            {t("Dépannage Urgence Page.Commercial arguments 2 - content")}
          </p>
        </div>
        <div className="content-block">
          <h4 className="title">
            {t("Dépannage Urgence Page.Commercial arguments 3 - title")}
          </h4>
          <p className="description">
            {t("Dépannage Urgence Page.Commercial arguments 3 - content")}
          </p>
        </div>
        <div className="content-block">
          <h4 className="title">
            {t("Dépannage Urgence Page.Commercial arguments 4 - title")}
          </h4>
          <p className="description">
            {t("Dépannage Urgence Page.Commercial arguments 4 - content")}
          </p>
        </div>
        <div className="content-block">
          <h4 className="title">
            {t("Dépannage Urgence Page.Commercial arguments 5 - title")}
          </h4>
          <p className="description">
            {t("Dépannage Urgence Page.Commercial arguments 5 - content")}
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
          />
          <CustomLink
            to="/api/reparation"
            className="custom-button_red"
            onClick={storePostalCode}
          >
            {t("Dépannage Urgence Page.CTA")}
          </CustomLink>
        </div>
      </div>
      <FAQRepair></FAQRepair>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmergencyTroubleshootingPage);
