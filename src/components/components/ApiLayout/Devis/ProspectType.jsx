import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import calendarIcon from "assets/img/icons/calendar.svg";
import keyIcon from "assets/img/icons/key.svg";
import coupleIcon from "assets/img/icons/couple.svg";
import { useTranslation } from "react-i18next";

const ProspectType = (props) => {
  const { t } = useTranslation();
  const handleClick = (type) => {
    props.update("prospectType", type);
    props.nextStep();
  };

  return (
    <Container>
      <ApiTitle content={t("devis.prospectType.Title")} />
      <div className="api-content">
        <Row>
          <Col sm={12} md={6} lg={4}>
            <ApiObject image={calendarIcon} content={t('devis.prospectType.Tenant')} onClick={() => handleClick("Locataire")} />
          </Col>
          <Col sm={12} md={6} lg={4}>
          <ApiObject image={keyIcon} content={t('devis.prospectType.Owner')} onClick={() => handleClick("Propriétaire occupant")}/>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <ApiObject image={coupleIcon} content={t('devis.prospectType.Roommate')} onClick={() => handleClick("Locataire meublé")}/>
          </Col>
        </Row>
      </div>
      <ApiComment content={t("devis.prospectType.Comment")} />
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

export default ProspectType;
