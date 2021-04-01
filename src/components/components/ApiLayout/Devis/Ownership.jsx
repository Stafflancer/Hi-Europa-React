import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import calendarIcon from "assets/img/icons/calendar.svg";
import keyIcon from "assets/img/icons/key.svg";
import coupleIcon from "assets/img/icons/couple.svg";
import blueMascotQuestionIcon from "assets/img/icons/blue-mascot_question.svg";

const Ownership = (props) => {

  const handleClick = (type) => {
    props.update("ownership", type);
    props.nextStep();
  };

  return (
    <Container>
      <ApiTitle content="Ok ! Vous êtes propriétaire ou locataire de l’appartement ?" />
      <div className="api-content">
        <Row>
          <Col sm={12} md={6} lg={4}>
            <ApiObject image={calendarIcon} content="Locataire" onClick={() => handleClick("Locataire")} />
          </Col>
          <Col sm={12} md={6} lg={4}>
          <ApiObject image={keyIcon} content="Propriétaire" onClick={() => handleClick("Propriétaire")}/>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <ApiObject image={coupleIcon} content="Colocataire" onClick={() => handleClick("Colocataire")}/>
          </Col>
        </Row>
      </div>
      <ApiComment content="<p><span class='bold'>Propriétaire : </span>cet appartement vous appartient.</p>
      <p><span class='bold'>Locataire : </span>vous louez cet appartement seul, en couple ou en famille.</p>
      <p><span class='bold'>Colocataire : </span>vous louez cet appartement à plusieurs.</p>" />
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

export default Ownership;
