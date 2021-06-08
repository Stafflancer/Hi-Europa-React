import React, { useState, useEffect } from "react";
import { updateHeaderAction } from "redux/actions/headerActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import blueMascotNormalIcon from "assets/img/icons/blue-mascot_normal.svg";
import { useTranslation } from "react-i18next";
import * as popupActions from "redux/actions/popupActions";
import { useHistory } from "react-router-dom";

const DeclarationDeSinistrePage = (props) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "zh_CN" ? "cn" : i18n.language;
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [hasOtherPerson, setHasOtherPerson] = useState(false);
  const [personList, setPersonList] = useState([]);
  const toggleHasOtherPerson = (value) => {
    setHasOtherPerson(value);
    if (value) {
      addPerson();
    } else {
      setPersonList([]);
    }
  };
  const addPerson = () => {
    setPersonList([
      ...personList,
      {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
      },
    ]);
  };
  const onChangePerson = (e, index) => {
    const { name, value } = e.target;
    const _personList = [...personList];
    _personList[index][name] = value;
    setPersonList(_personList);
  };
  const goToNextStep = () => {
    history.push(
      `/${locale}${t("slug./declaration-de-sinistre-summary-page")}`
    );
  };
  useEffect(() => {
    props.updateHeader("declaration-de-sinistre");
    return () => {
      props.updateHeader("H5");
    };
  }, []);
  return (
    <div className="declaration-de-sinistre-page">
      <h2 className="title">Votre pré-déclaration de sinistre en 2 minutes</h2>
      <div className="api-content-wrap">
        <p className="description">
          Nous sommes désolés que vous ayez un sinistre...
          <br />
          Ne vous inquiétez pas, nous allons vous accompagner tout au long de
          votre parcours.
          <br />
          <br />
          Une fois cette pré-déclaration finalisée, l’un de nos conseillers va
          vous appeler pour vous proposer des solutions concrètes pour la remise
          en l’état de votre habitation, de vos biens endommagés, la prise en
          charge de certains frais etc.{" "}
        </p>
        <p className="important-note-title">
          Important ! À lire avant de commencer.
        </p>
        <div className="important-note-content">
          <img
            src={blueMascotNormalIcon}
            alt="mascot-icon"
            className="mascot-icon"
          />
          <div className="content">
            <p>
              <b>
                Si vous ne trouvez pas le numéro de votre contrat ou si vous
                avez une question
              </b>
              , contacter notre Service Client bilingue français/chinois aux
              horaires d’ouverture (du lundi au samedi, de 8h30 à 18h30). Tel :
              XXXXXX
            </p>
            <p>
              <b>Si vous êtes victime d’un vol ou d’un cambriolage</b>, prenez
              rendez-vous au plus vite au commissariat ou à la gendarmerie la
              plus proche pourdéposer plainte (la pré-déclaration de sinistre ne
              remplace pas le dépôt de plainte).
            </p>
            <p>
              <b>
                Sauf cas d’urgence, ne faites pas de travaux de réparation de
                votre côté
              </b>
              . Avant d’engager des démarches de votre côté, parlez-en à votre
              conseiller Hi Europa lors de son appel après la finalisation de
              votre pré-déclaration de sinistre.
            </p>
            <p>
              <b>Ne jetez pas les objets et appareils endommagés</b>, même s’ils
              ont été brûlés dans un incendie, tant qu’ils n’ont pas été inclus
              dans l’évaluation du montant des dégâts
            </p>
          </div>
        </div>
        <div
          className={`api-custom-button_red ${step > 0 ? "d-none" : ""}`}
          onClick={() => setStep(1)}
        >
          Commencer ma prè-déclaration
        </div>
        <div className={`step step-1 ${step >= 1 ? "show" : ""}`}>
          <h3 className="step-title">
            <span className="step-number">1</span>
            <span className="step-amount">/3</span> Nous avons besoin de vous
            identifier
          </h3>
          <div className="input-row">
            <div className="input-item">
              <label>N°de contrat de votre assurance habitation</label>
              <input
                type="text"
                disabled
                className="custom-input"
                value="POLMRHLPA2T_"
              />
            </div>
            <div className="input-item">
              <label className="no-label">No lable</label>
              <input type="text" placeholder="12345" className="custom-input" />
            </div>
          </div>
          <p className="input-description">
            Le N°de votre contrat figure en 1ère page de vos Conditions
            Particulières. Il commence par POLMRHLPA2T _ puis se compose d’une
            série de 5 chiffres.
          </p>
          <div className="input-row">
            <div className="input-item">
              <label>Email</label>
              <input type="text" placeholder="Email" className="custom-input" />
            </div>
            <div className="input-item">
              <label>Numéro de téléphone</label>
              <input
                type="text"
                placeholder="06 12 24 12 24"
                className="custom-input"
              />
            </div>
          </div>
          <div
            className={`api-custom-button_red ${step > 1 ? "d-none" : ""}`}
            onClick={() => setStep(2)}
          >
            Continuer
          </div>
        </div>
        <div className={`step step-2 ${step >= 2 ? "show" : ""}`}>
          <h3 className="step-title">
            <span className="step-number">2</span>
            <span className="step-amount">/3</span> À propos de votre sinistre
          </h3>
          <div className="input-row">
            <div className="input-item">
              <label>Date du siniste</label>
              <input
                type="text"
                placeholder="jj/mm/aaaa"
                className="custom-input"
              />
            </div>
            <div className="input-item">
              <label>Heure du sinistre</label>
              <input type="text" placeholder="12h00" className="custom-input" />
            </div>
          </div>
          <p className="input-description">
            Si vous n’en êtes pas sûr, inscrivez la date et l’heure àlaquelle
            vous avez constaté le sinistre.
          </p>
          <div className="input-row">
            <div className="input-item">
              <label>Type de sinistre</label>
              <input
                type="text"
                placeholder="jj/mm/aaaa"
                className="custom-input"
              />
            </div>
            <div className="input-item">
              <label>Nature du sinistre</label>
              <input type="text" placeholder="12h00" className="custom-input" />
            </div>
          </div>
          <label>
            D’autres personnes n’habitant pas dans votre foyer est-elle
            concernée par ce sinistre (un voisin par exemple) ?{" "}
          </label>
          <div className="input-row">
            <div
              className={`yes-no custom-input ${
                hasOtherPerson ? "" : "active"
              }`}
              onClick={() => toggleHasOtherPerson(false)}
            >
              Non
            </div>
            <div
              className={`yes-no custom-input ${
                hasOtherPerson ? "active" : ""
              }`}
              onClick={() => toggleHasOtherPerson(true)}
            >
              Oui
            </div>
          </div>
          {personList.length > 0 &&
            personList.map((item, index) => (
              <div className="person-block" key={index}>
                <h4 className="heading">Personne {index + 1}</h4>
                <div className="input-row">
                  <div className="input-item">
                    <label>Prénom</label>
                    <input
                      type="text"
                      placeholder="Ming"
                      className="custom-input"
                      name="firstName"
                      value={personList[index].firstName}
                      onChange={(e) => onChangePerson(e, index)}
                    />
                  </div>
                  <div className="input-item">
                    <label>Nom</label>
                    <input
                      type="text"
                      placeholder="Bao"
                      className="custom-input"
                      name="lastName"
                      value={personList[index].lastName}
                      onChange={(e) => onChangePerson(e, index)}
                    />
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-item">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Email"
                      className="custom-input"
                      name="email"
                      value={personList[index].email}
                      onChange={(e) => onChangePerson(e, index)}
                    />
                  </div>
                  <div className="input-item">
                    <label>Numéro de téléphone</label>
                    <input
                      type="text"
                      placeholder="06 12 24 12 24"
                      className="custom-input"
                      name="phone"
                      value={personList[index].phone}
                      onChange={(e) => onChangePerson(e, index)}
                    />
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-item">
                    <label>Adresse</label>
                    <input
                      type="text"
                      placeholder="Adresse (numéro et rue)"
                      className="custom-input"
                      name="address"
                      value={personList[index].address}
                      onChange={(e) => onChangePerson(e, index)}
                    />
                  </div>
                  <div className="input-item">
                    <label>Code postal</label>
                    <input
                      type="text"
                      placeholder="Code postal"
                      className="custom-input"
                      name="zipCode"
                      value={personList[index].zipCode}
                      onChange={(e) => onChangePerson(e, index)}
                    />
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-item">
                    <label>Ville</label>
                    <input
                      type="text"
                      placeholder="Ville"
                      className="custom-input"
                      name="city"
                      value={personList[index].city}
                      onChange={(e) => onChangePerson(e, index)}
                    />
                  </div>
                </div>
              </div>
            ))}
          <p
            className={`add-another-person ${hasOtherPerson ? "" : "d-none"}`}
            onClick={addPerson}
          >
            + Ajouter une personne
          </p>
          <div
            className={`api-custom-button_red ${step > 2 ? "d-none" : ""}`}
            onClick={() => setStep(3)}
          >
            Continuer
          </div>
        </div>
        <div className={`step step-3 ${step >= 3 ? "show" : ""}`}>
          <h3 className="step-title">
            <span className="step-number">3</span>
            <span className="step-amount">/3</span> Décrivez-nous votre sinistre
          </h3>
          <p className="description">
            Toutes les informations que vous pourrez nous donner permettront de
            gagner du temps pour résoudre votre problème.
          </p>
          <label>
            Décrivez-nous rapidement et de façon synthétique le sinistre, sa
            localisation et ses circonstances.
          </label>
          <textarea
            className="custom-textarea"
            placeholder="Description du sinistre..."
            rows="2"
          ></textarea>
          <label>
            Décrivez-nous rapidement et de façon synthétique les dommages
            occasionnés par le sinistre.
          </label>
          <textarea
            className="custom-textarea"
            placeholder="Description des dommages occasionnés par le sinistre..."
            rows="2"
          ></textarea>
          <div className="button-group">
            <div
              className="api-custom-button_white"
              onClick={() =>
                props.popupActions.openPopup("confirming-cancellation")
              }
            >
              Annuler
            </div>
            <div className="api-custom-button_red" onClick={goToNextStep}>
              Envoyer ma pré-déclaration
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateHeader: bindActionCreators(updateHeaderAction.updateHeader, dispatch),
  popupActions: bindActionCreators(popupActions, dispatch),
});

export default connect(null, mapDispatchToProps)(DeclarationDeSinistrePage);
