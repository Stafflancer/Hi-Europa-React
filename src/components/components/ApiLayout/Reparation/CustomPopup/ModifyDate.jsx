import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

const ModifyDate = (props) => {
  return (
    <div className="modify-date-popup">
      <h3 className="title">Date de l’intervention</h3>
      <p className="error-message">Nous sommes désolés mais ce créneau horaire n’est plus disponible.
        Merci de sélectionner un nouveau créneau.</p>
      <div className="popup-content">
        <div className="input-wrap">
          <label>Jour de l’intervention</label>
          <input type="text" name="intervention-day" value="12/05/2021" className="custom-input" />
        </div>
        <div className="input-wrap">
          <label>À partir de </label>
          <select className="custom-input" name="intervention-time">
              <option value="1">11h30</option>
              <option value="2">12h30</option>
              <option value="3">13h30</option>
            </select>
        </div>
        <div className="bottom-group-button">
          <button className="api-custom-button_white">Annuler</button>
          <button className="api-custom-button_red">Modifier</button>
        </div>
      </div>
    </div>
  );
};

export default ModifyDate;
