import React, { useState, useEffect } from "react";
import ApiTitle from "../ApiTitle";
import HeaterIcon from "assets/img/icons/heater.svg";
import LightingIcon from "assets/img/icons/lighting.svg";
import PlumbingIcon from "assets/img/icons/plumbing.svg";
import WindowsIcon from "assets/img/icons/windows.svg";
import KeyIcon from "assets/img/icons/key2.svg";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import { bindActionCreators } from "redux";

const WhichService = (props) => {
  const { t } = useTranslation();
  const handleClick = (serviceType) => {
    props.setServiceType(serviceType);
    props.updateUserInfo({ problem_type: serviceType.toLowerCase() });
    props.nextStep();
  };
  useEffect(() => {}, []);
  return (
    <div className="api-content-wrap which-service-step">
      <ApiTitle content={t("IMA Page.How can we help you")} />
      <ul className="services-list">
        <li className="service-item" onClick={() => handleClick("CHAUFFAGE")}>
          <img
            src={HeaterIcon}
            alt="service-icon"
            className="service-item__icon"
          />
          <p className="service-item__name">{t("IMA Page.service 1")}</p>
        </li>
        <li className="service-item" onClick={() => handleClick("ELECTRICITE")}>
          <img
            src={LightingIcon}
            alt="service-icon"
            className="service-item__icon"
          />
          <p className="service-item__name">{t("IMA Page.service 2")}</p>
        </li>
        <li className="service-item" onClick={() => handleClick("PLOMBERIE")}>
          <img
            src={PlumbingIcon}
            alt="service-icon"
            className="service-item__icon"
          />
          <p className="service-item__name">{t("IMA Page.service 3")}</p>
        </li>
        <li className="service-item" onClick={() => handleClick("VITRERIE")}>
          <img
            src={WindowsIcon}
            alt="service-icon"
            className="service-item__icon"
          />
          <p className="service-item__name">{t("IMA Page.service 4")}</p>
        </li>
        <li className="service-item" onClick={() => handleClick("SERRURERIE")}>
          <img
            src={KeyIcon}
            alt="service-icon"
            className="service-item__icon"
          />
          <p className="service-item__name">{t("IMA Page.service 5")}</p>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: bindActionCreators(userInfoActions.updateUserInfo, dispatch),
});

export default connect(null, mapDispatchToProps)(WhichService);
