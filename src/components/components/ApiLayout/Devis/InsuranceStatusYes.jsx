import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import checkedIcon from "assets/img/icons/checked.svg";
import  xbuttonIcon from "assets/img/icons/x-button.svg";
import { useTranslation } from "react-i18next";

const InsuranceStatusYes = (props) => {
  const { t } = useTranslation();
  const handleClick = (type) => {
    props.update("insuranceDuration", type);
    if(type == "yes") {
      props.goToStep(10);
    } else {
      props.goToStep(11);
    }

  };

  return (
    <Container>
      <ApiTitle content={t("devis.insuranceStatusYes.Title")} />
      <div className="api-content">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <ApiObject image={checkedIcon} content={t("devis.insuranceStatusYes.Yes")} onClick={() => handleClick("yes")} />
          </Col>
          <Col sm={12} md={6} lg={6}>
          <ApiObject image={xbuttonIcon} content={t("devis.insuranceStatusYes.No")} onClick={() => handleClick("no")}/>
          </Col>
        </Row>
      </div>
      <ApiComment content={t("devis.insuranceStatusYes.Comment")} />
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

export default InsuranceStatusYes;
