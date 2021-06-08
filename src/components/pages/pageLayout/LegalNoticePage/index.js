import React, { useState } from "react";
import Banner from "components/components/PageLayout/Banner";
import GetMoreInfo from "components/components/PageLayout/GetMoreInfo";
import JoinUs from "components/components/PageLayout/JoinUs";
import { useTranslation } from "react-i18next";
import _Helmet from "components/components/_Helmet";

const LegalNoticePage = (props) => {
  const { t } = useTranslation();
  return (
    <div className="legal-notice-page">
      <_Helmet pageName="legal notice"></_Helmet>
      <Banner title={t("Legal Notice Page.banner-title")}></Banner>
      <div className="content-wrapper">
        <p
          dangerouslySetInnerHTML={{
            __html: t("Legal Notice Page.content"),
          }}
        ></p>
      </div>
      <GetMoreInfo></GetMoreInfo>
      <JoinUs></JoinUs>
    </div>
  );
};

export default LegalNoticePage;
