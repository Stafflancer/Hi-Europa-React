import React from "react";
import homeInsuranceIcon from "assets/img/icons/home-insurance-icon.svg";
import emergencyRepairIcon from "assets/img/icons/emergency-repair-icon.svg";

const IntroService = () => {
  return (
    <div className="intro-service">
      <div className="intro-text">
        <p>100% franco-chinois</p>
        <p>100% à vos côtés</p>
        <p>Sécurité et confiance</p>
      </div>
      <h4 className="heading">On vous accompagne ?</h4>
      <div className="service-block-wrap">
        <div className="service-block">
          <h4 className="title">Assurance Habitation</h4>
          <img src={homeInsuranceIcon} alt="service-icon" />
          <p className="description">
            Personnalisée en ligne votre prise en charge et obtenée immédiatement
            votre devis.
          </p>
          <input
            type="text"
            placeholder="Mon code postal"
            className="my-postal-code"
          />
          <a href="" className="custom-button_red">
            Obtenir mon prix
          </a>
        </div>
        <div className="service-block">
          <h4 className="title">Réparation d’urgence</h4>
          <img src={emergencyRepairIcon} alt="service-icon" />
          <p className="description">
            Plomberie, chauffage, élécticité... faite appel à nos experts !
          </p>
          <input
            type="text"
            placeholder="Mon code postal"
            className="my-postal-code"
          />
          <a href="" className="custom-button_red">
            Faire venir un expert
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroService;
