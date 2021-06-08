import React, { useState } from "react";
import Banner from "components/components/PageLayout/Banner";
import IntroService from "components/components/PageLayout/IntroService";
import IntroContent from "components/components/PageLayout/IntroContent";
import Comments from "components/components/PageLayout/Comments";
import JoinUs from "components/components/PageLayout/JoinUs";
import teamWorkIcon from "assets/img/icons/teamwork.png";
import { useTranslation } from "react-i18next";
import exclamationMark from "assets/img/icons/exclamation-mark.gif";
import redExclamationMark from "assets/img/icons/red-exclamation-mark.gif";
import CustomLink from "components/components/CustomLink";
import _Helmet from "components/components/_Helmet";

const HomePage = (props) => {
  const { t } = useTranslation();
  return (
    <div className="home-page">
      <_Helmet pageName="home page"></_Helmet>
      <Banner
        homepage
        title={t("home.banner-title")}
        description={t("home.promise-phrase")}
        img={teamWorkIcon}
      ></Banner>
      <IntroService></IntroService>
      <IntroContent></IntroContent>
      <div className="chat-with-us flex-col-center">
        <h4 className="title">{t("Talk to us - title")}</h4>
        <img src={exclamationMark} alt="exclamation mark icon" />
        <div className="content">{t("Talk to us - message")}</div>
        <CustomLink to="/contactpage" className="custom-button_white">
          {t("Talk to us - CTA")}
        </CustomLink>
      </div>
      <Comments></Comments>
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
      <JoinUs></JoinUs>
    </div>
  );
};

export default HomePage;
