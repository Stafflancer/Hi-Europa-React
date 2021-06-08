import React, { useState } from "react";
import Banner from "components/components/PageLayout/Banner";
import JoinUs from "components/components/PageLayout/JoinUs";
import aboutUsIcon from "assets/img/icons/about-us-icon.svg";
import { useTranslation } from "react-i18next";
import content from "translations/fr.json";
import _Helmet from "components/components/_Helmet";
import exclamationMark from "assets/img/icons/exclamation-mark.gif";
import CustomLink from "components/components/CustomLink";

const AboutUsPage = (props) => {
  const _sections = content.translations["Qui sommes-nous Page"]["section"];
  const sections = Object.values(_sections);
  const { t } = useTranslation();
  return (
    <div className="about-us-page">
      <_Helmet pageName="about us"></_Helmet>
      <Banner
        title={t("Qui sommes-nous Page.banner-title")}
        img={aboutUsIcon}
      ></Banner>
      <div className="content-wrapper">
        {sections.map((item, index) => (
          <div key={index}>
            <h4 className="title">
              {t(`Qui sommes-nous Page.section.section ${index + 1}.title`)}
            </h4>
            <p className="content">
              {t(`Qui sommes-nous Page.section.section ${index + 1}.message`)}
            </p>
          </div>
        ))}
      </div>
      <div className="get-more-info">
        <div className="chat-with-us flex-col-center">
          <h4 className="title">{t("Talk to us - title")}</h4>
          <img src={exclamationMark} alt="exclamation mark icon" />
          <div className="content">{t("Talk to us - message")}</div>
          <CustomLink to="/contactpage" className="custom-button_white">
            {t("Talk to us - CTA")}
          </CustomLink>
        </div>
      </div>
      <JoinUs></JoinUs>
    </div>
  );
};

export default AboutUsPage;
