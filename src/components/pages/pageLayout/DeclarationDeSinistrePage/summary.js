import React, { useState, useEffect } from "react";
import { updateHeaderAction } from "redux/actions/headerActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const SummaryPage = (props) => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const locale = i18n.language === "zh_CN" ? "cn" : i18n.language;
  const modifyInfo = () => {
    history.push(`/${locale}${t("slug./declaration-de-sinistre-page")}`);
  };
  const validateInfo = () => {
    history.push(`/${locale}${t("slug./declaration-de-sinistre-result-page")}`);
  };
  useEffect(() => {
    props.updateHeader("declaration-de-sinistre");
    return () => {
      props.updateHeader("H5");
    };
  }, []);
  return (
    <div className="declaration-de-sinistre-summary-page">
      <h2 className="title">Récapitulatif</h2>
      <div className="api-content-wrap">
        <h3 className="block-title">Vos informations</h3>
        <div className="info-block">
          <div className="info-line">
            <p className="title">N°de contrat</p>
            <p className="info">POLMRHLPA2T_12345</p>
          </div>
          <div className="info-line">
            <p className="title">Email</p>
            <p className="info">françoileoutre@gmail.com</p>
          </div>
          <div className="info-line">
            <p className="title">Téléphone</p>
            <p className="info">0669852545</p>
          </div>
        </div>
        <h3 className="block-title">À propos de votre sinistre</h3>
        <div className="info-block">
          <div className="info-line">
            <p className="title">Date du siniste</p>
            <p className="info">12/05/2021</p>
          </div>
          <div className="info-line">
            <p className="title">Heure du sinistre</p>
            <p className="info">22h58</p>
          </div>
          <div className="info-line">
            <p className="title">Type de sinistre</p>
            <p className="info">Matériel</p>
          </div>
          <div className="info-line">
            <p className="title">Nature du sinistre</p>
            <p className="info">Dégâts des eaux</p>
          </div>
          <div className="info-line">
            <p className="title">Autres personnes</p>
            <p className="info">1</p>
          </div>
        </div>
        <div className="person-block">
          <h4 className="title">Personne 1</h4>
          <div className="info-block">
            <div className="info-line">
              <p className="title">Prénom</p>
              <p className="info">Jean</p>
            </div>
            <div className="info-line">
              <p className="title">Nom</p>
              <p className="info">Dupond</p>
            </div>
            <div className="info-line">
              <p className="title">Email</p>
              <p className="info">jeandupond@gmail.com</p>
            </div>
            <div className="info-line">
              <p className="title">Numéro de téléphone</p>
              <p className="info">0669852545</p>
            </div>
            <div className="info-line">
              <p className="title">Adresse</p>
              <p className="info">45 rue de la maison</p>
            </div>
            <div className="info-line">
              <p className="title">Code postal</p>
              <p className="info">91540</p>
            </div>
            <div className="info-line">
              <p className="title">Ville</p>
              <p className="info">Mennecy</p>
            </div>
          </div>
        </div>
        <h3 className="block-title">Description du sinistre</h3>
        <div className="description-block">
          <div className="description-item">
            <h4 className="title">Le sinistre</h4>
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
          </div>
          <div className="description-item">
            <h4 className="title">Les dégats</h4>
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
          </div>
        </div>
        <div className="checkbox-confirmation">
          <input
            type="checkbox"
            className="custom-checkbox"
            id="checkbox-confirmation"
          />
          <label htmlFor="checkbox-confirmation">
            Je certifie l'authenticité, à ma connaissance, des informations
            déclarées et la bonne foi de ma pré-déclaration de sinistre.
          </label>
        </div>
        <p className="notice">
          Pour information, voir l'Article VII des{" "}
          <a href="">Conditions Générales</a> : "toute fausse déclaration
          volontaire peut entraîner une non prise en charge du sinistre par
          l'Assureur
        </p>
        <div className="button-group">
          <div className="api-custom-button_white" onClick={modifyInfo}>
            Modifier
          </div>
          <div className="api-custom-button_red" onClick={validateInfo}>
            Valider
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateHeader: bindActionCreators(updateHeaderAction.updateHeader, dispatch),
});

export default connect(null, mapDispatchToProps)(SummaryPage);
