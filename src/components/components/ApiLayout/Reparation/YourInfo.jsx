import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

const YourInfo = (props) => {
  const [whoWillCome, setWhoWillCome] = useState("me");
  const onChangeValue = (event) => {
    const target = event.target;
    const value = target.value;
    setWhoWillCome(value);
  }
  return (
    <div className="api-content-wrap your-info-step">
      <h2 className="title">Vos informations</h2>
      <div className="information-form">
        <div className="row gender">
          <div className="col-6 d-flex">
            <input
              type="radio"
              value="0"
              name="gender"
              id="female"
              defaultChecked
              className="custom-radio"
            />
            <label htmlFor="female">Madame</label>
          </div>
          <div className="col-6 d-flex">
            <input
              type="radio"
              value="1"
              name="gender"
              id="male"
              className="custom-radio"
            />
            <label htmlFor="male">Monsieur</label>
          </div>
        </div>
        <div className="row owner-or-tenant">
          <div className="col-6 d-flex">
            <input
              type="radio"
              value="0"
              name="ownership"
              id="owner"
              defaultChecked
              className="custom-radio"
            />
            <label htmlFor="owner">Propriétaire</label>
          </div>
          <div className="col-6 d-flex">
            <input
              type="radio"
              value="1"
              name="ownership"
              id="tenant"
              className="custom-radio"
            />
            <label htmlFor="tenant">Locataire</label>
          </div>
        </div>
        <div className="input-wrap">
          <label>Prénom</label>
          <input type="text" name="firstName" className="custom-input" />
        </div>
        <div className="input-wrap">
          <label>Nom</label>
          <input type="text" name="lastName" className="custom-input" />
        </div>
        <div className="input-wrap">
          <label>Adresse (numéro et nom de la rue)</label>
          <input type="text" name="address" className="custom-input" />
        </div>
        <div className="input-wrap">
          <label>Complément d’adresse</label>
          <input type="text" name="otherAddress" className="custom-input" />
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
        <div className="input-wrap">
          <label>Email</label>
          <input type="email" name="email" className="custom-input" />
        </div>
        <div className="input-wrap">
          <label>Numéro de téléphone</label>
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
            className="custom-input"
          ></input>
        </div>
        <p className="note">
          Notre professionnel vous appellera à ce numéro pour planifier son
          intervention.
        </p>
        <div className="who-come" onChange={onChangeValue}>
          <div className="i-there d-flex">
            <input
              type="radio"
              value="me"
              name="whoCome"
              id="me"
              className="custom-radio"
              defaultChecked
            />
            <label htmlFor="me">
              C’est moi qui serais sur place pour l’intervention
            </label>
          </div>
          <div className="other-there d-flex">
            <input
              type="radio"
              value="other"
              name="whoCome"
              id="other"
              className="custom-radio"
            />
            <label htmlFor="other">
              Une autre personne sera sur place pour l’intervention
            </label>
          </div>
        </div>
        <Collapse in={whoWillCome == 'other' ? true : false}>
          <div className="other-info">
            <div className="row gender">
              <div className="col-6 d-flex">
                <input
                  type="radio"
                  value="0"
                  name="other-gender"
                  id="other-female"
                  defaultChecked
                  className="custom-radio"
                />
                <label htmlFor="other-female">Madame</label>
              </div>
              <div className="col-6 d-flex">
                <input
                  type="radio"
                  value="1"
                  name="other-gender"
                  id="other-male"
                  className="custom-radio"
                />
                <label htmlFor="other-male">Madame</label>
              </div>
            </div>
            <div className="input-wrap">
              <label>Prénom</label>
              <input
                type="text"
                name="other-firstName"
                className="custom-input"
              />
            </div>
            <div className="input-wrap">
              <label>Nom</label>
              <input
                type="text"
                name="other-lastName"
                className="custom-input"
              />
            </div>
            <div className="input-wrap">
              <label>Numéro de téléphone</label>
              <input
                type="tel"
                name="other-phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
                className="custom-input"
              ></input>
            </div>
          </div>
        </Collapse>
        <div className="accept-temrs-policy">
          <input
            type="checkbox"
            name="accept-terms-policy"
            id="accept-terms-policy"
            className="custom-checkbox"
          />
          <label htmlFor="accept-terms-policy">
            Je veux recevoir des offres de services de la part d’Hi Europa et de
            ses partenaires dans les conditions définies par les{" "}
            <a href="">Conditions Générales d’Utilisation</a> du site.
          </label>
        </div>
        <button className="api-custom-button_red" onClick={props.nextStep}>
          Valider mes informations
        </button>
      </div>
    </div>
  );
};

export default YourInfo;
