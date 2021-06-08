import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomLink from "components/components/CustomLink";
import * as popupActions from "redux/actions/popupActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ConfirmingCancellationPopup = (props) => {
  const { t } = useTranslation();
  return (
    <div className="confirming-cancellation-popup">
      <h3 className="title">
        Etes-vous sûr de ne pas vouloir continuer votre pré-déclaration de
        sinistre ?
      </h3>
      <p className="description">
        Si vous avez-vous des questions ou besoin d’aide, n’hésitez pas à
        contacter Hi Europa au numéro de télophone : <b>00 00 00 000</b> aux
        horaires suivants : <b>XXX</b>
      </p>
      <CustomLink to="/" onClick={() => props.popupActions.closePopup()}>
        <div className="api-custom-button_red">Annuler ma pré-déclaration</div>
      </CustomLink>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  popupActions: bindActionCreators(popupActions, dispatch),
});

export default connect(null, mapDispatchToProps)(ConfirmingCancellationPopup);
