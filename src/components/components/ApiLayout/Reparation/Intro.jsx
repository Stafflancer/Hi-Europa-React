import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Intro = (props) => {
  return (
    <div className="api-content-wrap intro-step">
      <ApiTitle content="Hi Europa, votre dépanneur rapide et simple " />
      <div className="code-postal-wrap">
        <label>Code postal</label>
        <div className="flex-row-center">
          <input type="text" className="custom-input" />
          <button className="api-custom-button_red" onClick={props.nextStep}>
            Commencer mon diagnostic
          </button>
        </div>
        <p className="description">
          Comment ça marche pour me faire dépanner rapidement avec Hi Europa ?
        </p>
        <div className="process">
          <div className="process__item">
            <div className="process__item-number">1</div>
            <div className="process__item-text">Je décris mon problème </div>
          </div>
          <div className="process__item">
            <div className="process__item-number">2</div>
            <div className="process__item-text">
              Un devis m'est immédiatement proposé
            </div>
          </div>
          <div className="process__item">
            <div className="process__item-number">3</div>
            <div className="process__item-text">
              Je reçois un accusé-réception de ma demande dans les 20 minutes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
