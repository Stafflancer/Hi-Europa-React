import React, { useState } from "react";
import { connect } from "react-redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import { bindActionCreators } from "redux";
import homeInsuranceIcon from "assets/img/icons/home-insurance-icon.svg";
import emergencyRepairIcon from "assets/img/icons/emergency-repair-icon.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const IntroService = (props) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "zh_CN" ? "cn" : i18n.language;
  const [postalCodeWakam, setPostalCodeWakam] = useState("");
  const [postalCodeIMA, setPostalCodeIMA] = useState("");
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name == "repair") setPostalCodeIMA(value);
    if (name == "insurance") setPostalCodeWakam(value);
  };
  const storePostalCode = (event) => {
    const name = event.target.name;
    if (name == "repair") props.updateUserInfo({ postCode: postalCodeIMA });
    if (name == "insurance")
      props.updateUserInfo({ postCode: postalCodeWakam });
  };
  return (
    <div className="intro-service">
      <div className="intro-text">
        <p>{t("key-point-1")}</p>
        <p>{t("key-point-2")}</p>
        <p>{t("key-point-3")}</p>
      </div>
      <h4 className="heading">{t("key-point-title")}</h4>
      <div className="service-block-wrap">
        <div className="service-block">
          <h4 className="title">{t("Insurance Block Title")}</h4>
          <img src={homeInsuranceIcon} alt="service-icon" />
          <p className="description">{t("Insurance Block Message")}</p>
          <input
            type="text"
            placeholder={t("my post code")}
            className="my-postal-code"
            onInput={handleChange}
            maxLength="5"
            name="insurance"
            disabled
          />
          <Link
            to={`/${locale}${t("slug./api/devis")}`}
            className="custom-button_red disabled"
            onClick={storePostalCode}
            name="insurance"
          >
            {t("COMING SOON")}
            {/* Insurance Block CTA */}
          </Link>
        </div>
        <div className="service-block">
          <h4 className="title">{t("Repair Block Title")}</h4>
          <img src={emergencyRepairIcon} alt="service-icon" />
          <p className="description">{t("Repair Block Message")}</p>
          <input
            type="text"
            placeholder={t("my post code")}
            className="my-postal-code"
            onInput={handleChange}
            maxLength="5"
            name="repair"
          />
          <Link
            to={`/${locale}${t("slug./api/reparation")}`}
            className="custom-button_red"
            onClick={storePostalCode}
            name="repair"
          >
            {t("Repair Block CTA")}
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: bindActionCreators(userInfoActions.updateUserInfo, dispatch),
});

export default connect(null, mapDispatchToProps)(IntroService);
