import React, { useState } from "react";
import hieuropaLogo from "assets/img/brand/Hieuropa-logo.svg";
import frLang from "assets/img/flags/FR.svg";
import zhLang from "assets/img/flags/ZH.svg";
import enLang from "assets/img/flags/EN.svg";

const Header = () => {
  const [showLangSwitcher, toggleLangSwitcher] = useState(false);
  const [showNav, toggleNav] = useState(false);
  const toggleSideMenu = () => {
    if (showLangSwitcher) {
      toggleLangSwitcher(false);
      toggleNav(false);
    } else {
      toggleNav(!showNav);
    }
  }
  return (
    <header className="header api-header">
      <span className="bottom-bar"></span>
      <a className="nav-bar__back red" href="#">
        <span className="fa-chevron-left icon"></span>
        <span>Annuler</span>
      </a>
      <div className={`nav-wrap`}>
        <a href="">
          <img src={hieuropaLogo} alt="Logo" className="logo" />
        </a>
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
