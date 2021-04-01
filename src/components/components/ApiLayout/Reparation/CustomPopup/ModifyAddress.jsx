import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

const ModifyAddress = (props) => {
  return (
    <div className="modify-address-popup">
      <h3 className="title">Adresse de l’intervention</h3>
      <div className="popup-content">
        <div className="input-wrap">
          <label>Adresse (numéro et nom de la rue)</label>
          <input type="text" value="19 rue du général de gaulle" className="custom-input" />
        </div>
        <div className="input-wrap">
          <label>Complément d’adresse</label>
          <input type="text" value="Lorem ipsum" className="custom-input" />
        </div>
        <p className="note">
          Merci de préciser toutes informations complémentaires (Digicodes,
          batiments...) nécessaires à l’éxecution de la prestation.{" "}
        </p>
        <div className="input-wrap">
          <label>Code postal</label>
          <input
            type="text"
            name="postalCode"
            className="custom-input"
            value="91 540"
            disabled
          />
        </div>
        <div className="input-wrap">
          <label>Ville</label>
          <input
            type="text"
            name="city"
            className="custom-input"
            value="Mennecy"
            disabled
          />
        </div>
        <div className="bottom-group-button">
          <button className="api-custom-button_white">Annuler</button>
          <button className="api-custom-button_red">Modifier</button>
        </div>
      </div>
    </div>
  );
};

export default ModifyAddress;
