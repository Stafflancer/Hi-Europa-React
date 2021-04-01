import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import checkedIcon from "assets/img/icons/checked.svg";
import  xbuttonIcon from "assets/img/icons/x-button.svg";

import blueMascotQuestionIcon from "assets/img/icons/blue-mascot_question.svg";

const InsuranceStatusYes = (props) => {

  const handleClick = (type) => {
    props.update("insurance_duration", type);
    if(type == "yes") {
      props.goToStep(10);
    } else {
      props.goToStep(11);
    }

  };

  return (
    <Container>
      <ApiTitle content="Est-ce que cette assurance a PLUS de 8 mois ?" />
      <div className="api-content">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <ApiObject image={checkedIcon} content="Oui, elle a PLUS de 8 mois" onClick={() => handleClick("yes")} />
          </Col>
          <Col sm={12} md={6} lg={6}>
          <ApiObject image={xbuttonIcon} content="Non, elle a MOINS de 8 mois" onClick={() => handleClick("no")}/>
          </Col>
        </Row>
      </div>
      <ApiComment content="<p>Le changement d'assurance ne pourra intervenir qu'après la première année d'assurance,
      sauf dans certains cas (déménagement, mariage etc), Si votre contrat a moins d'1 an, la résiliation devra intervenir au plus tard 2 mois avant la date anniversaire. Après 1 an d'assurance, vous pourrez résilier à tout moment.
      Nous vous proposons de nous occuper gratuitement de ces démarches de résiliation et nous vous expliquons tout cela en détail après votre souscription.</p>" />
      <div className="api-footer">
      <Row>
        <Col>
          <a className="api-back red" href="#" onClick={props.previousStep}>
            <span className="fa-chevron-left icon"></span>
            <span>Précedent</span>
          </a>
        </Col>
      </Row>
      </div>
    </Container>
  );
}

export default InsuranceStatusYes;
