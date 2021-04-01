import React, { useState } from "react";

const Summary = (props) => {
  return (
    <div className="api-content-wrap summary-step">
      <h2 className="title">Récapitulatif de votre intervention</h2>
      <section className="summary-date-time">
        <h3 className="heading">Date et heure de l’intervention</h3>
        <div className="wrap">
          <p className="summary-content">
            Le <span>12/05/2021</span> à <span>11h30</span>
          </p>
          <button className="modifier">Modifier</button>
        </div>
      </section>
      <section className="summary-address">
        <h3 className="heading">Adresse de l’intervention</h3>
        <div className="wrap">
          <p className="summary-content">
            Au <span>19 rue du général de gaulle, Mennecy, 91540, FR.</span>
          </p>
          <button className="modifier">Modifier</button>
        </div>
        <p className="other-thing">Lorem ipsum complément d’adresse</p>
      </section>
      <section className="summary-contact">
        <h3 className="heading">Contact sur place lors de l’intervention</h3>
        <div className="wrap">
          <p className="summary-content">
            Contact <span>Ming BOA</span>
            {"   "}Téléphone <span className="phone-number">06 82 82 82 82</span>
          </p>
          <button className="modifier">Modifier</button>
        </div>
      </section>
      <section className="diagnostic">
        <h3 className="heading">Diagnostic</h3>
        <p className="result">Panne sur chauffe eau électrique</p>
        <p className="description">
          Notre plombier procédera à la recherche et à l’identification de la
          panne pour l’équipement de production d’eau chaude sanitaire spécifié.
        </p>
      </section>
      <section className="service">
        <h3 className="heading">Prestation</h3>
        <p className="result">La prestation comprend : </p>
        <ul className="service-includes">
          <li>Les frais de déplacement</li>
          <li>La main dœuvre jusqu’à 1h30</li>
          <li>Le nétoyage du chantier</li>
        </ul>
      </section>
      <section className="service-price">
        <h3 className="heading">Prix de la prestation</h3>
        <p className="price">
          165,00&euro; <sup>TTC</sup>
        </p>
        <p className="note">
          Pré-paiment, le paiement devient effectif qu'une fois l'intervetion
          validée et réalisée.{" "}
        </p>
      </section>
      <section className="accept-cgv">
        <input
          type="checkbox"
          name="accept-cgv"
          id="accept-cgv"
          className="custom-checkbox"
        />
        <label htmlFor="accept-cgv">
          J’ai pris connaissance des <a href="">CGV</a> et je les accepte.
        </label>
      </section>
      <div className="bottom-group-button">
        <button
          className="api-custom-button_white"
          onClick={props.previousStep}
        >
          Annuler
        </button>
        <button className="api-custom-button_red" onClick={props.nextStep}>
          Passer au paiement
        </button>
      </div>
    </div>
  );
};

export default Summary;
