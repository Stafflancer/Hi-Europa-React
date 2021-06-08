import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import checkedIcon from "assets/img/icons/checked.svg";
import  xbuttonIcon from "assets/img/icons/x-button.svg";
import { useTranslation } from "react-i18next";

const InsuranceStatusNo = (props) => {
  const { t } = useTranslation();
  const handleClick = (type) => {
    props.update("livingDuration", type);
    if(type == "yes") {
      props.goToStep(13);
    } else {
      props.goToStep(12);
    }
  };

  return (
    <Container>
      <ApiTitle content={t("devis.insuranceStatusNo.Title")} />
      <div className="api-content">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <ApiObject image={checkedIcon} content={t("devis.insuranceStatusNo.Yes")} onClick={() => handleClick("yes")} />
          </Col>
          <Col sm={12} md={6} lg={6}>
          <ApiObject image={xbuttonIcon} content={t("devis.insuranceStatusNo.No")} onClick={() => handleClick("no")}/>
          </Col>
        </Row>
      </div>
      <ApiComment content={t("devis.insuranceStatusNo.Comment")} />
      <div className="api-footer">
      <Row>
        <Col>
          <a className="api-back red" href="#" onClick={() => { props.goToStep(7) } }>
            <span className="fa-chevron-left icon"></span>
            <span>{t("devis.previous-button")}</span>
          </a>
        </Col>
      </Row>
      </div>
    </Container>
  );
}

export default InsuranceStatusNo;
