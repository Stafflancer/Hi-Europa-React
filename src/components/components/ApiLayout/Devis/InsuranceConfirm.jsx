import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import checkedIcon from "assets/img/icons/checked.svg";
import  xbuttonIcon from "assets/img/icons/x-button.svg";

import blueMascotQuestionIcon from "assets/img/icons/blue-mascot_question.svg";

const InsuranceConfirm = (props) => {

  const handleClick = (type) => {
    props.update("insurance_cancel", type);
    if(type == "yes") {
       props.goToStep(13);
    } else {
       props.goToStep(13);
    }
  };

  return (
    <Container>
      <ApiTitle content="Souhaitez-vous la résiliation gratuite de votre assurance actuelle ?" />
      <div className="api-content">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <ApiObject image={checkedIcon} content="Oui, je souhaite que Hi Europa s'en occupe " onClick={() => handleClick("yes")} />
          </Col>
          <Col sm={12} md={6} lg={6}>
          <ApiObject image={xbuttonIcon} content="Non merci, je m'occupe moi-même de la résiliation" onClick={() => handleClick("no")}/>
          </Col>
        </Row>
      </div>
      <ApiComment content="<p><span class='bold'>Service Gratuit : </span>Hi Europa vous propose de vous éviter toutes les démarches concernant la résiliation de votre assurance habitation actuelle en s'en occupant pour vous. Si vous êtes intéressé, on en reparle plus tard, au moment de la souscription.</p>
      <p class='small'>Important : en dehors des cas de déménagement, quand on change d'assurance habitation,  sa nouvelle assurance doit démarrer le lendemain de la fin de sa précédente. Comme cela, pas de jours sans assurance entre les deux contrats ! Consultez les Conditions générales de votre assurance actuelle pour connaître les modalités de résiliations.</p>" />
      <div className="api-footer">
      <Row>
        <Col>
          <a className="api-back red" href="#" onClick={() => { props.goToStep(8)}}>
            <span className="fa-chevron-left icon"></span>
            <span>Précedent</span>
          </a>
        </Col>
      </Row>
      </div>
    </Container>
  );
}

export default InsuranceConfirm;
