import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import blueMascotNormalIcon from "assets/img/icons/blue-mascot_normal.svg";


const Done = (props) => {
  return (
    <div className="api-content-wrap done-step">
        <img src={blueMascotNormalIcon} alt="mascot-icon" className="mascot-icon" />
        <h3 className="title">Votre intervention est programmée </h3>
        <p className="date-time">
            Le <span>12/05/2021</span> à <span>11h30</span>
        </p>
        <p className="address">
            Au <span>19 rue du général de gaulle, Mennecy, 91540, FR.</span>
        </p>
        <p className="desc desc-1">Vous allez recevoir un email de confirmation.
Vous allez être appellé dans les 20 prochaines minutes pour confirmer avec vous les derniers détails.</p>
        <p className="desc desc-2">Nous restons à votre disposition pour toute question 
par chat et téléphone.</p>
        <p className="thank-you">Merci pour votre confiance</p>
        <a href="" className="back-to-home-page">Retour au site</a>
    </div>
  );
};

export default Done;
