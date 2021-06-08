import React, { useState, useEffect } from "react";
import Banner from "components/components/PageLayout/Banner";
import GetMoreInfo from "components/components/PageLayout/GetMoreInfo";
import JoinUs from "components/components/PageLayout/JoinUs";
import { useTranslation } from "react-i18next";
import content from "translations/fr.json";

const CookiePage = (props) => {
  const { t } = useTranslation();
  const _content = content.translations["Cookie Page"]["content"];
  const cookieContent = _content.map((item, index) => (
    <div key={index}>
      {item.title !== "" && (
        <h4 className="title">{t(`Cookie Page.content.${index}.title`)}</h4>
      )}
      {item.text.map((_item, _index) => (
        <p
          className="content"
          key={_index}
          dangerouslySetInnerHTML={{
            __html: t(`Cookie Page.content.${index}.text.${_index}`),
          }}
        ></p>
      ))}
    </div>
  ));
  useEffect(() => {
    const cookieBoxLink1 = document.getElementById("cookie-box-link-1");
    const cookieBoxLink2 = document.getElementById("cookie-box-link-2");
    const showCookieBox = () => {
      const cookieButton = document.getElementsByClassName(
        "AxeptioButton__AxeptioButtonStyle-sc-40u05m-0"
      )[0];
      cookieButton && cookieButton.click();
    };
    cookieBoxLink1 &&
      cookieBoxLink1.addEventListener("click", () => {
        showCookieBox();
        const checkExist = setInterval(() => {
          const cookieSetting = document.getElementsByClassName(
            "ButtonGroup__BtnStyle-hfufib-0"
          )[0];
          if (cookieSetting) {
            cookieSetting.click();
            clearInterval(checkExist);
          }
        }, 100);
      });
    cookieBoxLink2 &&
      cookieBoxLink2.addEventListener("click", () => {
        showCookieBox();
      });
  }, []);
  return (
    <div className="cookie-page">
      <Banner title={t("Cookie Page.banner-title")}></Banner>
      <div className="content-wrapper">{cookieContent}</div>
      <GetMoreInfo></GetMoreInfo>
      <JoinUs></JoinUs>
    </div>
  );
};

export default CookiePage;
