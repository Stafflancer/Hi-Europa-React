import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import apartmentIcon from "assets/img/icons/apartment.svg";
import houseIcon from "assets/img/icons/house.svg";
import { useTranslation } from "react-i18next";

const AccomodationType = (props) => {
  const { t } = useTranslation();
  const handleClick = (type, next) => {
    props.update("accomodationType", type);
    if( next == true) {
      props.nextStep();
    } else {
      props.goToStep(14);
    }
  };

  return (
    <Container>
      <ApiTitle content={t("devis.accomodationType.Title")} />
      <div className="api-content">
        <Row>
          <Col xs={12} sm={6}>
            <ApiObject image={apartmentIcon} content={t("devis.accomodationType.appartment")} onClick={() => handleClick("Appartement", true)} />
          </Col>
          <Col xs={12} sm={6}>
          <ApiObject image={houseIcon} content={t("devis.accomodationType.maison")} onClick={() => handleClick("Maison", false)}/>
          </Col>
        </Row>
      </div>
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

export default AccomodationType;
