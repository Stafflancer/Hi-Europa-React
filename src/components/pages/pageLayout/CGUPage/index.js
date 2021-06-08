import React, { useState } from "react";
import Banner from "components/components/PageLayout/Banner";
import GetMoreInfo from "components/components/PageLayout/GetMoreInfo";
import JoinUs from "components/components/PageLayout/JoinUs";
import { useTranslation } from "react-i18next";
import content from "translations/fr.json";

const CGUPage = (props) => {
  const { t } = useTranslation();
  const _content = content.translations["CGU Page"]["content"];
  const CGUContent = _content.map((item, index) => (
    <div key={index}>
      {item.title !== "" && (
        <h4 className="title">{t(`CGU Page.content.${index}.title`)}</h4>
      )}
      {item.text.map((_item, _index) => (
        <p
          className="content"
          key={_index}
          dangerouslySetInnerHTML={{
            __html: t(`CGU Page.content.${index}.text.${_index}`),
          }}
        ></p>
      ))}
    </div>
  ));
  return (
    <div className="CGU-page">
      <Banner title={t("CGU Page.banner-title")}></Banner>
      <p className="version">{t("CGU Page.version")}</p>
      <div className="content-wrapper">{CGUContent}</div>
      <GetMoreInfo></GetMoreInfo>
      <JoinUs></JoinUs>
    </div>
  );
};

export default CGUPage;
