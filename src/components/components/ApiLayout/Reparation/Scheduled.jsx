import React, { useState } from "react";
import ApiTitle from "../ApiTitle";

const Scheduled = (props) => {
  return (
    <div className="api-content-wrap scheduled-step">
      <h2 className="title">Programmer votre intervention</h2>
      <section className="diagnostic">
        <h3 className="heading">Diagnostic</h3>
        <p className="result">Panne sur chauffe eau électrique</p>
        <p className="description">
          Notre plombier procédera à la recherche et à l’identification de la
          panne pour l’équipement de production d’eau chaude sanitaire spécifié.
        </p>
      </section>
      <section className="schedule-your-intervention">
        <h3 className="heading">Programmez votre intervention</h3>
        <p className="description">
          Le jour et l’heure vous seront confirmés par le professionnel lors de
          son premier contact téléphonique. Le tarif de la prestation peut
          varier en fonction du jour et de l’heure choisis. En cas de difficulté
          en langue, vous pouvez contacter Hi Europa par notre Chatbot (24 h /
          24, 7 j / 7), par téléphone ou par mail.
        </p>
        <div className="date-time row">
          <div className="col-sm-12 col-md-6 date">
            <label>Jour de l’intervention</label>
            <input type="text" name="intervention-date" value="12/05/2021" className="custom-input" />
          </div>
          <div className="col-sm-12 col-md-6 time">
            <label>À partir de </label>
            <select className="custom-input" name="intervention-time">
              <option value="1">11h30</option>
              <option value="2">12h30</option>
              <option value="3">13h30</option>
            </select>
          </div>
        </div>
      </section>
      <section className="quote">
        <h3 className="heading">Devis</h3>
        <p className="price">
          165,00&euro; <sup>TTC</sup>
        </p>
        <p className="note">
          Pré-paiment, le paiement devient effectif qu'une fois l'intervetion
          validée et réalisée.{" "}
        </p>
        <p className="result">La prestation comprend : </p>
        <ul className="service-includes">
          <li>Les frais de déplacement</li>
          <li>La main dœuvre jusqu’à 1h30</li>
          <li>Le nétoyage du chantier</li>
        </ul>
        <p className="detail">
          Les tarifs sont calculés pour des prestations standard. Si votre
          problème nécessite une réparation spécifique, l’expert estimera la
          différence de prix une fois sur place. Un accor vous sera demandé et
          le devis complémentaire sera régler.
        </p>
      </section>
      <div className="bottom-group-button">
        <button className="api-custom-button_white"onClick={props.previousStep}>
          Annuler
        </button>
        <button className="api-custom-button_red" onClick={props.nextStep}>
          Confirmer l’intervention
        </button>
      </div>
    </div>
  );
};

export default Scheduled;
