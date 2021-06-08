import React from "react";
import hieuropaLogo from "assets/img/brand/Hieuropa-logo.png";
import ServiceTag from "components/components/PageLayout/ServiceTag";
import CustomLink from "components/components/CustomLink";
import homeInsuranceIcon from "assets/img/icons/home-insurance-icon.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <CustomLink to="/" className="logo">
        <img src={hieuropaLogo} alt="Logo" />
      </CustomLink>
      <div className="nav-wrap">
        <ul className="nav-bar">
          <li style={{ position: "relative" }}>
            <CustomLink to="/home-insurance-page">
              {t("Assurance Habitation")}
            </CustomLink>
            <span className="coming-soon-tag">{t("COMING SOON")}</span>
          </li>
          <li>
            <CustomLink to="/emergency-troubleshooting-page">
              {t("Dépannage Urgence")}
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/aboutuspage">{t("Qui sommes-nous ?")}</CustomLink>
          </li>
          <li>
            <CustomLink to="/faqpage">{t("FAQ")}</CustomLink>
          </li>
          <li>
            <CustomLink to="/contactpage">{t("Contact")}</CustomLink>
          </li>
        </ul>
        <ServiceTag
          serviceName={t("Assurance Habitation Déclarer un sinistre")}
          img={homeInsuranceIcon}
          to="/declaration-de-sinistre-page"
          className="invisible"
        ></ServiceTag>
        <div className="break-line"></div>
        <ul className="terms-of-service">
          <li>
            <CustomLink to="/legal-notice">{t("Mentions legales")}</CustomLink>
          </li>
          <li>
            <CustomLink to="/privacy-policy-page">
              {t("Politique de confidentialité")}
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/cookies-page">
              {t("Politique relative aux cookies")}
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/CGU">CGU</CustomLink>
          </li>
        </ul>
      </div>
      <div className="break-line"></div>
      <p className="description">{t("Phrase - status")}</p>
    </footer>
  );
};

export default Footer;
