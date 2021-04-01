import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import checkedIcon from "assets/img/icons/checked.svg";
import  xbuttonIcon from "assets/img/icons/x-button.svg";

import blueMascotQuestionIcon from "assets/img/icons/blue-mascot_question.svg";

const InsuranceStatusNo = (props) => {

  const handleClick = (type) => {
    props.update("living_duration", type);
    if(type == "yes") {
      props.goToStep(13);
    } else {
      props.goToStep(12);
    }
  };

  return (
    <Container>
      <ApiTitle content="Habitez-vous depuis MOINS d’1 mois dans le logement que vous souhaitez assurer ? " />
      <div className="api-content">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <ApiObject image={checkedIcon} content="Oui,  j’y habite depuis MOINS d’1 mois" onClick={() => handleClick("yes")} />
          </Col>
          <Col sm={12} md={6} lg={6}>
          <ApiObject image={xbuttonIcon} content="Non,  j’y habite depuis PLUS d’1 mois" onClick={() => handleClick("no")}/>
          </Col>
        </Row>
      </div>
      <ApiComment content="<p>Lorem ipsum</p>" />
      <div className="api-footer">
      <Row>
        <Col>
          <a className="api-back red" href="#" onClick={() => { props.goToStep(7) } }>
            <span className="fa-chevron-left icon"></span>
            <span>Précedent</span>
          </a>
        </Col>
      </Row>
      </div>
    </Container>
  );
}

export default InsuranceStatusNo;
