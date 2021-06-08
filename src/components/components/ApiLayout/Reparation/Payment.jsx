import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { PAYMENT_WIDGET } from "config/Environment";

const Payment = (props) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === "zh_CN" ? "zh" : i18n.language;
  const locale = i18n.language === "zh_CN" ? "cn" : i18n.language;
  const tempPaymentToken = localStorage.getItem("tempPaymentToken");
  const paymentToken = props.userInfo.paymentToken || tempPaymentToken;
  localStorage.setItem("tempPaymentToken", paymentToken);
  console.log("paymentToken : ", paymentToken);
  const loadScript = () => {
    let tag = document.createElement("script");
    tag.async = true;
    tag.type = "text/javascript";
    tag.src = PAYMENT_WIDGET;
    document.body.appendChild(tag);
  };
  useEffect(() => {
    loadScript();
  }, []);
  return (
    <div className="api-content-wrap payment-step">
      <div
        id="ImaPayment"
        data-token={paymentToken}
        lang={currentLang}
        withconfirmationpage="false"
        returnurlsuccess={`/${locale}${t("slug./api/confirmed-intervention")}`}
        // returnurlerror="http://localhost:3000"
      ></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfoReducer.userInfo,
});

export default connect(mapStateToProps)(Payment);
