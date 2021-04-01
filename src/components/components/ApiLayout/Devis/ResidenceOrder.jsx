import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import apartmentIcon from "assets/img/icons/apartment.svg";
import sunbedIcon from "assets/img/icons/sunbed.svg";
import blueMascotQuestionIcon from "assets/img/icons/blue-mascot_question.svg";

const ResidenceOrder = (props) => {

  const handleClick = (type) => {
    props.update("residenceorder", type);
    props.nextStep();
  };

  return (
    <Container>
      <ApiTitle content="Très bien, est-ce votre logement principal ou secondaire ?" />
      <div className="api-content">
        <Row>
        <Col xs={12} sm={6}>
          <ApiObject image={apartmentIcon} content="Résidence principale" onClick={() => handleClick("Résidence principale")} />
        </Col>
        <Col xs={12} sm={6}>
        <ApiObject image={sunbedIcon} content="Résidence secondaire" onClick={() => handleClick("Résidence secondaire")}/>
        </Col>
        </Row>
      </div>
      <ApiComment content="<p><span class='bold'>Résidence principale : </span>c’est le logement que vous habitez la majeure partie de l'année. Vous ne pouvez avoir qu'une seule résidence principale.</p>
      <p><span class='bold'>Résidence secondaire : </span>c'est un logement que vous habitez occasionnellement (week-end, vacances).</p>" />
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

export default ResidenceOrder;
