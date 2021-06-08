import React from "react";
import exclamationMark from "assets/img/icons/exclamation-mark.gif";
import redExclamationMark from "assets/img/icons/red-exclamation-mark.gif";
import { useTranslation } from "react-i18next";
import CustomLink from "components/components/CustomLink";

const GetMoreInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="get-more-info">
      <div className="chat-with-us flex-col-center">
        <h4 className="title">{t("Talk to us - title")}</h4>
        <img src={exclamationMark} alt="exclamation mark icon" />
        <div className="content">{t("Talk to us - message")}</div>
        <CustomLink to="/contactpage" className="custom-button_white">
          {t("Talk to us - CTA")}
        </CustomLink>
      </div>
      <div className="know-more-about-us flex-col-center">
        <h4 className="title">{t("Help those who come from far - title")}</h4>
        <img src={redExclamationMark} alt="logo" />
        <div className="content">
          {t("Help those who come from far - message")}
        </div>
        <CustomLink to="/aboutuspage" className="custom-button_red">
          {t("Help those who come from far - CTA")}
        </CustomLink>
      </div>
    </div>
  );
};

export default GetMoreInfo;
