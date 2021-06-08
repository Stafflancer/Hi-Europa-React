import React, { useState } from "react";
import Banner from "components/components/PageLayout/Banner";
import GetMoreInfo from "components/components/PageLayout/GetMoreInfo";
import JoinUs from "components/components/PageLayout/JoinUs";
import ServiceTag from "components/components/PageLayout/ServiceTag";
import faqIcon from "assets/img/icons/FAQ-icon.svg";
import aboutUsIcon from "assets/img/icons/about-us-icon.svg";
import homeInsuranceIcon from "assets/img/icons/home-insurance-icon.svg";
import emergencyRepairIcon from "assets/img/icons/emergency-repair-icon.svg";
import { useTranslation } from "react-i18next";
import _Helmet from "components/components/_Helmet";

const FAQPage = (props) => {
  const { t } = useTranslation();
  return (
    <div className="FAQ-page">
      <_Helmet pageName="FAQ"></_Helmet>
      <Banner title={t("FAQ")} img={faqIcon}></Banner>
      <div className="group-tag">
        <ServiceTag
          serviceName={t("FAQ Page.category 1")}
          to="/faq-hieuropa"
          img={aboutUsIcon}
        ></ServiceTag>
        <ServiceTag
          serviceName={t("FAQ Page.category 2")}
          to="/faq-assurance-habitation"
          img={homeInsuranceIcon}
        ></ServiceTag>
        <ServiceTag
          serviceName={t("FAQ Page.category 3")}
          to="/faq-emergency-response"
          img={emergencyRepairIcon}
        ></ServiceTag>
      </div>
      <GetMoreInfo></GetMoreInfo>
      <JoinUs></JoinUs>
    </div>
  );
};

export default FAQPage;
