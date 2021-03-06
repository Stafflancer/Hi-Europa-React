import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import { useTranslation } from "react-i18next";
import checkedIcon from "assets/img/icons/checked.svg";
import  xbuttonIcon from "assets/img/icons/x-button.svg";


const InsuranceCanceled = (props) => {
  const { t } = useTranslation();
  const handleClick = (type) => {
    if(type == "no") {
       //props.goToStep(13);
       props.update("insuranceCanceled","no");
       props.activeMenu("3");
       props.goToStep(5);
    } else {
       props.update("insuranceCanceled","yes");
       props.nextStep();
    }
  };
  return (
    <Container>
      <ApiTitle content={t("souscription.insuranceCanceled.Title")} />
      <div className="api-content">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <ApiObject image={checkedIcon} content={t("souscription.insuranceCanceled.Yes")} onClick={() => handleClick("yes")} />
          </Col>
          <Col sm={12} md={6} lg={6}>
          <ApiObject image={xbuttonIcon} content={t("souscription.insuranceCanceled.No")} onClick={() => handleClick("no")}/>
          </Col>
        </Row>
      </div>
      <ApiComment content={t("souscription.insuranceCanceled.Comment")} />
      <div className="api-footer">
      <Row>
        <Col>
          <a className="api-back red" href="#" onClick={() => {props.previousStep(); props.activeMenu("1");}}>
            <span className="fa-chevron-left icon"></span>
            <span>{t("souscription.previousButton")}</span>
          </a>
        </Col>
      </Row>
      </div>
      
    </Container>
  );
}

export default InsuranceCanceled;
