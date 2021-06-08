import React, { useState, useEffect } from "react";
import { updateHeaderAction } from "redux/actions/headerActions";
import blueMascotNormalIcon from "assets/img/icons/blue-mascot_normal.svg";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import CustomLink from "components/components/CustomLink";

const ResultPage = (props) => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    props.updateHeader("declaration-de-sinistre");
    return () => {
      props.updateHeader("H5");
    };
  }, []);
  return (
    <div className="declaration-de-sinistre-result-page">
      <div className="content-wrap">
        <img
          src={blueMascotNormalIcon}
          alt="mascot-icon"
          className="mascot-icon"
        />
        <h3 className="title">
          Votre pré-déclaration à bien été enregistrée !
        </h3>
        <p className="head-line">
          Votre numéro de dossier pour votre suivi est le
        </p>
        <p className="contract-id">
          SINMRHLPA2T_<span>12345</span>
        </p>
        <p className="text-line">
          <b>Prochaine étape :</b>
          <br />
          Vous allez recevoir dans un instant un email de confirmation et l’un
          de nos conseillers va vous contacter au plus vite pour faire un point
          sur votre sinistre ainsi que vous proposer des solutions concrètes
          pour la remise en état de votre habitation.
          <br />A très vite par téléphone.
        </p>
        <p className="text-line">
          Pour toute question, vous pouvez contacter le Service Client Hi Europa
          au tel : <b>00 00 00 000</b> aux horaires suivants :
        </p>
        <p className="text-line">
          IMPORTANT : Sauf cas d’urgence, avant d’engager des démarches de votre
          côté, attendez d’en parler avec votre conseiller Hi Europa.
        </p>
        <p className="head-line thank-you">Merci pour votre confiance</p>
        <CustomLink to="/" className="back-to-home-page">
          {t("confirmation payment.go to homepage")}
        </CustomLink>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateHeader: bindActionCreators(updateHeaderAction.updateHeader, dispatch),
});

export default connect(null, mapDispatchToProps)(ResultPage);
