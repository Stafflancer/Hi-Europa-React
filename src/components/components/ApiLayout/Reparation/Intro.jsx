import React, { useState, useEffect } from "react";
import ApiTitle from "../ApiTitle";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Intro = props => {
  const { t } = useTranslation();
  const [postalCode, setPostalCode] = useState(props.userInfo.postCode);
  const [invalidCode, setInvalidCode] = useState(false);
  const handleChange = event => {
    const value = event.target.value;
    setPostalCode(value);
  };
  const validatePostalCode = () => {
    const code = Number(postalCode);
    if (postalCode.length == 5 && code && 1000 <= code && code <= 95999) {
      setInvalidCode(false);
      props.updateUserInfo({ postCode: postalCode });
      props.nextStep();
    } else {
      setInvalidCode(true);
    }
  };
  return (
    <div className="api-content-wrap intro-step">
      <ApiTitle content={t("IMA Page.introduction")} />
      <div className="code-postal-wrap">
        <label>{t("postCode")}</label>
        <div className="flex-row-center">
          <input
            type="text"
            className="custom-input"
            value={postalCode}
            onChange={handleChange}
            maxLength="5"
          />
          <button
            className="api-custom-button_red"
            onClick={validatePostalCode}
          >
            {t("IMA Page.confirm")}
          </button>
        </div>
        {invalidCode && <div className="error-message">Invalid Zipcode</div>}
        <p className="description">{t("IMA Page.title")}</p>
        <div className="process">
          <div className="process__item">
            <div className="process__item-number">1</div>
            <div className="process__item-text">{t("IMA Page.text 1")}</div>
          </div>
          <div className="process__item">
            <div className="process__item-number">2</div>
            <div className="process__item-text">{t("IMA Page.text 2")}</div>
          </div>
          <div className="process__item">
            <div className="process__item-number">3</div>
            <div className="process__item-text">{t("IMA Page.text 3")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfoReducer.userInfo,
});

const mapDispatchToProps = dispatch => ({
  updateUserInfo: bindActionCreators(userInfoActions.updateUserInfo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
