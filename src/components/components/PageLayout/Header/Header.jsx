import React, { useState, useEffect } from "react";
import hieuropaLogo from "assets/img/brand/Hieuropa-logo.png";
import frLang from "assets/img/flags/FR.svg";
import zhLang from "assets/img/flags/ZH.svg";
import ServiceTag from "components/components/PageLayout/ServiceTag";
import { useLocation } from "react-router-dom";
import homeInsuranceIcon from "assets/img/icons/home-insurance-icon.svg";
import { useTranslation } from "react-i18next";
import CustomLink from "components/components/CustomLink";
import { connect } from "react-redux";

const Header = (props) => {
  const { t, i18n } = useTranslation();
  const activeLang = i18n.language;
  const [showLangSwitcher, toggleLangSwitcher] = useState(false);
  const [showNav, toggleNav] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  const toggleSideMenu = () => {
    if (showLangSwitcher) {
      toggleLangSwitcher(false);
      toggleNav(false);
    } else {
      toggleNav(!showNav);
    }
  };
  const changeLang = (lang) => {
    toggleLangSwitcher(false);
    if (lang !== activeLang) {
      const locale = lang === "zh_CN" ? "cn" : lang;
      const newLang = i18n.getFixedT(lang);
      const _slug = /[^/]*$/.exec(`${pathname}`)[0];
      const slug = newLang(`slug.${_slug}`);
      const origin = window.location.origin;
      const url = origin + `/${locale}/${slug}`;
      window.location.href = url;
    }
  };
  const H5Header = (
    <React.Fragment>
      <div
        className={`hamburger-button ${showNav ? "open" : ""} ${
          showLangSwitcher ? "open-lang" : ""
        }`}
        onClick={toggleSideMenu}
      >
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
      </div>
      <CustomLink to="/" className="logo-center-H5">
        <img src={hieuropaLogo} alt="Logo" className="logo" />
      </CustomLink>
      <div className={`nav-wrap ${showNav ? "open" : ""}`}>
        <ul className={`nav-bar ${pathname == "/" ? "homepage" : ""}`}>
          <li className="nav-bar__item">
            <CustomLink
              activeClassName="active"
              to="/home-insurance-page"
              onClick={() => toggleNav(false)}
            >
              {t("Assurance Habitation Coming Soon")}
            </CustomLink>
          </li>
          <li className="nav-bar__item">
            <CustomLink
              activeClassName="active"
              to="/emergency-troubleshooting-page"
              onClick={() => toggleNav(false)}
            >
              {t("Dépannage Urgence")}
            </CustomLink>
          </li>
          <li className="nav-bar__item">
            <CustomLink
              activeClassName="active"
              to="/aboutuspage"
              onClick={() => toggleNav(false)}
            >
              {t("Qui sommes-nous ?")}
            </CustomLink>
          </li>
          <li className="nav-bar__item">
            <CustomLink
              activeClassName="active"
              to="/faqpage"
              onClick={() => toggleNav(false)}
            >
              {t("FAQ")}
            </CustomLink>
          </li>
          <li className="nav-bar__item">
            <CustomLink
              activeClassName="active"
              to="/contactpage"
              onClick={() => toggleNav(false)}
            >
              {t("Contact")}
            </CustomLink>
          </li>
        </ul>
        <ServiceTag
          serviceName={t("Assurance Habitation Déclarer un sinistre")}
          img={homeInsuranceIcon}
          to="/declaration-de-sinistre-page"
          onClick={() => toggleNav(false)}
          className="invisible"
        ></ServiceTag>
      </div>
    </React.Fragment>
  );
  const apiHeader = (
    <React.Fragment>
      <span className="bottom-bar"></span>
      <CustomLink className="nav-bar__back red" to="/">
        <span className="fa-chevron-left icon"></span>
        <span>{t("Cancel")}</span>
      </CustomLink>
      <CustomLink to="/" className="logo-center-api">
        <img src={hieuropaLogo} alt="Logo" className="logo api-layout" />
      </CustomLink>
    </React.Fragment>
  );
  const apiResultHeader = (
    <React.Fragment>
      <CustomLink to="/">
        <img src={hieuropaLogo} alt="Logo" className="logo api-layout" />
      </CustomLink>
      <div className={`nav-wrap`}>
        <span
          className={`nav-num ${props.active == "1" ? "active" : ""} ${
            props.active > 1 ? "visited" : ""
          }`}
        >
          1
        </span>
        <span
          className={`nav-num ${props.active == "2" ? "active" : ""} ${
            props.active > 2 ? "visited" : ""
          }`}
        >
          2
        </span>
        <span
          className={`nav-num ${props.active == "3" ? "active" : ""} ${
            props.active > 3 ? "visited" : ""
          }`}
        >
          3
        </span>
        <span
          className={`nav-num ${props.active == "4" ? "active" : ""} ${
            props.active > 4 ? "visited" : ""
          }`}
        >
          4
        </span>
        <span className={`nav-num ${props.active == "5" ? "active" : ""} `}>
          5
        </span>
      </div>
    </React.Fragment>
  );
  const renderHeader = () => {
    const { headerType } = props;
    switch (headerType) {
      case "H5":
        return H5Header;
      case "api-header":
        return apiHeader;
      case "api-result":
        return apiResultHeader;
      case "declaration-de-sinistre":
        return apiHeader;
      default:
        return H5Header;
    }
  };
  return (
    <header className="header api-header">
      {renderHeader()}
      <div className="lang-switcher-wrap">
        {props.headerType === "declaration-de-sinistre" && (
          <div className="working-time-block">
            <p>
              Service client <span className="phone-number">0800 00 00 00</span>
            </p>
            <p className="working-time">De 9h à 17h, lundi au samedi</p>
          </div>
        )}
        <div className={`lang-switcher ${showLangSwitcher ? "open" : ""}`}>
          <div
            className="lang-switcher__icon"
            onClick={() => toggleLangSwitcher(true)}
          >
            <img
              src={frLang}
              alt="Français"
              className={activeLang === "fr" ? "active" : ""}
            />
            <img
              src={zhLang}
              alt="中文"
              className={activeLang === "zh_CN" ? "active" : ""}
            />
          </div>
          <div className="lang-switcher__popup">
            <div
              className="hamburger-button api-layout open-lang"
              onClick={toggleSideMenu}
            >
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
            </div>
            <ul className="lang-list">
              <li className="lang-item" onClick={() => changeLang("fr")}>
                <img src={frLang} alt="Français" />
                Français
              </li>
              <li className="lang-item" onClick={() => changeLang("zh_CN")}>
                <img src={zhLang} alt="中文" />
                中文
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  headerType: state.headerReducer.headerType,
  active: state.headerReducer.active,
});

export default connect(mapStateToProps)(Header);
