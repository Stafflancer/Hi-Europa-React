import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import checkedIcon from "assets/img/icons/checked.svg";
import  xbuttonIcon from "assets/img/icons/x-button.svg";

import blueMascotQuestionIcon from "assets/img/icons/blue-mascot_question.svg";

const InsuranceStatus = (props) => {

  const handleClick = (type) => {
    props.update("insurance_status", type);
    if(type == "yes") {
      props.goToStep(8);
    } else if (type == "no") {
      props.goToStep(9);
    }
  };

  return (
    <Container>
      <ApiTitle content="Avez-vous déjà souscrit une assurance pour le logement que vous souhaitez assurer ?" />
      <div className="api-content">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <ApiObject image={checkedIcon} content="Oui, j'assure déjà ce logement" onClick={() => handleClick("yes")} />
          </Col>
          <Col sm={12} md={6} lg={6}>
          <ApiObject image={xbuttonIcon} content="Non, je n'assure pas encore ce logement" onClick={() => handleClick("no")}/>
          </Col>
        </Row>
      </div>
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

export default InsuranceStatus;
