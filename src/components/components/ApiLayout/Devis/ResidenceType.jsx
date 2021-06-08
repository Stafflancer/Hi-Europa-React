import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import apartmentIcon from "assets/img/icons/apartment.svg";
import sunbedIcon from "assets/img/icons/sunbed.svg";
import blueMascotQuestionIcon from "assets/img/icons/blue-mascot_question.svg";
import { useTranslation } from "react-i18next";

const ResidenceType = (props) => {
  const { t } = useTranslation();
  const handleClick = (type, next) => {
    props.update("residenceType", type);

    if(next == true)
    {
      props.nextStep();
    } 
    else 
    {
      props.goToStep(15);
    }
  };

  return (
    <Container>
      <ApiTitle content={t("devis.residenceType.Title")} />
      <div className="api-content">
        <Row>
        <Col xs={12} sm={6}>
          <ApiObject image={apartmentIcon} content={t("devis.residenceType.Principal")} onClick={() => handleClick("Principale", true)} />
        </Col>
        <Col xs={12} sm={6}>
        <ApiObject image={sunbedIcon} content={t("devis.residenceType.Second")} onClick={() => handleClick("Secondaire", false)}/>
        </Col>
        </Row>
      </div>
      <ApiComment content={t("devis.residenceType.Comment")} />
      <div className="api-footer">
      <Row>
        <Col>
          <a className="api-back red" href="#" onClick={props.previousStep}>
            <span className="fa-chevron-left icon"></span>
            <span>{t("devis.previous-button")}</span>
          </a>
        </Col>
      </Row>
      </div>
    </Container>
  );
}

export default ResidenceType;
