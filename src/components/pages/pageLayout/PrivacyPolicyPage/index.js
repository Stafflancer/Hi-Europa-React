import React, { useState } from "react";
import Banner from "components/components/PageLayout/Banner";
import GetMoreInfo from "components/components/PageLayout/GetMoreInfo";
import JoinUs from "components/components/PageLayout/JoinUs";
import { useTranslation } from "react-i18next";
import content from "translations/fr.json";

const PrivacyPolicyPage = (props) => {
  const { t } = useTranslation();
  const pageName = "Privacy Policy Page";
  const _content = content.translations[`${pageName}`]["content"];
  const privacyPolicyContent = _content.map((item, index) => (
    <div key={index}>
      {item.title !== "" && (
        <h4 className="title">{t(`${pageName}.content.${index}.title`)}</h4>
      )}
      {item.text.map((_item, _index) => (
        <p
          className="content"
          key={_index}
          dangerouslySetInnerHTML={{
            __html: t(`${pageName}.content.${index}.text.${_index}`),
          }}
        ></p>
      ))}
    </div>
  ));
  return (
    <div className="privacy-policy-page">
      <Banner title={t(`${pageName}.banner-title`)}></Banner>
      <div className="content-wrapper">{privacyPolicyContent}</div>
      <GetMoreInfo></GetMoreInfo>
      <JoinUs></JoinUs>
    </div>
  );
};

export default PrivacyPolicyPage;
