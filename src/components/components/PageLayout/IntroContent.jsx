import React from "react";
import { useTranslation } from "react-i18next";

const IntroContent = () => {
  const { t } = useTranslation();
  return (
    <div className="intro-content">
      <div className="content-block">
        <h4 className="title">{t("three-values-1-title")}</h4>
        <p className="description">{t("three-values-1-explanation")}</p>
      </div>
      <div className="content-block">
        <h4 className="title">{t("three-values-2-title")}</h4>
        <p className="description">{t("three-values-2-explanation")}</p>
      </div>
      <div className="content-block">
        <h4 className="title">{t("three-values-3-title")}</h4>
        <p className="description">{t("three-values-3-explanation")}</p>
      </div>
    </div>
  );
};

export default IntroContent;
