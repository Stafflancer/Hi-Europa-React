import React from "react";
import homeInsuranceIcon from "assets/img/icons/home-insurance-icon.svg";

const ServiceTag = () => {
  return (
    <div className="service-tag">
      <img
        src={homeInsuranceIcon}
        alt="À propos d’hi Europa"
        className="service-icon"
      />
      <p className="service-name">Assurance habitation</p>
      <span className="fa-chevron-right icon"></span>
    </div>
  );
};

export default ServiceTag;
