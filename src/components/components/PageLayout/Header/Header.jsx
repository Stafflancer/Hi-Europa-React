import React, { useState, useEffect } from "react";
import hieuropaLogo from "assets/img/brand/Hieuropa-logo.svg";
import frLang from "assets/img/flags/FR.svg";
import zhLang from "assets/img/flags/ZH.svg";
import enLang from "assets/img/flags/EN.svg";
import ServiceTag from "components/components/PageLayout/ServiceTag"
import { Link, NavLink, useLocation } from "react-router-dom";


const Header = () => {
  const [showLangSwitcher, toggleLangSwitcher] = useState(false);
  const [showNav, toggleNav] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [pathname]);
  const toggleSideMenu = () => {
    if (showLangSwitcher) {
      toggleLangSwitcher(false);
      toggleNav(false);
    } else {
      toggleNav(!showNav);
    }
  }
  return (
    <header className="header">
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
      <Link to="/">
        <img src={hieuropaLogo} alt="Logo" className="logo" />
      </Link>
      <div className={`nav-wrap ${showNav ? "open" : ""}`}>
        <ul className={`nav-bar ${pathname == "/" ? "homepage" : ""}`}>
          <li className="nav-bar__item">
            <NavLink
              activeClassName="active"
              to="/home-insurance-page"
              onClick={() => toggleNav(false)}
            >
              Assurance habitation
            </NavLink>
          </li>
          <li className="nav-bar__item">
            <NavLink
              activeClassName="active"
              to="/emergency-troubleshooting-page"
              onClick={() => toggleNav(false)}
            >
              Réparation d’urgence
            </NavLink>
          </li>
          <li className="nav-bar__item">
            <NavLink
              activeClassName="active"
              to="/aboutuspage"
              onClick={() => toggleNav(false)}
            >
              Qui sommes-nous
            </NavLink>
          </li>
          <li className="nav-bar__item">
            <NavLink
              activeClassName="active"
              to="/faqpage"
              onClick={() => toggleNav(false)}
            >
              FAQ
            </NavLink>
          </li>
          <li className="nav-bar__item">
            <NavLink
              activeClassName="active"
              to="/contactpage"
              onClick={() => toggleNav(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ServiceTag></ServiceTag>
      </div>
      <div className={`lang-switcher ${showLangSwitcher ? "open" : ""}`}>
        <div
          className="lang-switcher__icon"
          onClick={() => toggleLangSwitcher(true)}
        >
          <img src={frLang} alt="Français" className="active" />
          <img src={zhLang} alt="中国人" />
          <img src={enLang} alt="English" />
        </div>
        <div className="lang-switcher__popup">
          <ul className="lang-list">
            <li className="lang-item">
              <a href="">
                <img src={frLang} alt="Français" />
                Français
              </a>
            </li>
            <li className="lang-item">
              <img src={zhLang} alt="中国人" />
              <a href="">中国人</a>
            </li>
            <li className="lang-item">
              <img src={enLang} alt="English" />
              <a href="">English</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;