import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import checkedIcon from "assets/img/icons/checked.svg";
import  xbuttonIcon from "assets/img/icons/x-button.svg";
import { useTranslation } from "react-i18next";

const InsuranceStatus = (props) => {
  const { t } = useTranslation();
  const handleClick = (type) => {
    props.update("insuranceStatus", type);
    if(type == "yes") {
      props.goToStep(8);
    } else if (type == "no") {
      props.goToStep(9);
    }
  };

  return (
    <Container>
      <ApiTitle content={t("devis.insuranceStatus.Title")} />
      <div className="api-content">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <ApiObject image={checkedIcon} content={t("devis.insuranceStatus.Yes")} onClick={() => handleClick("yes")} />
          </Col>
          <Col sm={12} md={6} lg={6}>
          <ApiObject image={xbuttonIcon} content={t("devis.insuranceStatus.No")} onClick={() => handleClick("no")}/>
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

export default InsuranceStatus;
