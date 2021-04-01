import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const InsuranceUserDetail = (props) => {
  const [state, setState] = useState({
    email: "",
    first_name: "",
    last_name: "",
    subscribe: false
  });

  const handleClick = (e) => {
    props.update("email", state.email);
    props.update("first_name", state.first_name);
    props.update("last_name", state.last_name);
    props.update("subscribe", state.subscribe);
    props.showResult();
  };



  const handleChange = (e) => {
    setState(state => ({ ...state,  [e.target.name]:e.target.value}));

  }
  const handleCheck = (e) => {
    setState(state => ({ ...state, subscribe: !state.subscribe}));
  }
  const handlePrevious = () => {
    if (props.formData.insurance_status == "yes") {
      props.goToStep(10);
    } else if (props.formData.insurance_status == "no") {
      props.goToStep(9);
    }
  }
  return(
    <Container>
      <ApiTitle content="Super ! Dernière étape avant de connaître le prix de votre assurance habitation personnalisée !" />
      <div className="api-content">
        <Row>
          <Col xs={12} sm={6}>
          <Form.Label className="api-label">Votre Prénom</Form.Label>
          <Form.Control type="text" name="first_name" value={state.first_name} onChange={handleChange} className="api-input" placeholder="Votre Prénom" />
          </Col>
          <Col xs={12} sm={6}>
          <Form.Label className="api-label">Votre Nom</Form.Label>
          <Form.Control type="text" name="last_name" value={state.last_name} onChange={handleChange} className="api-input" placeholder="Votre Nom" />
          </Col>
        </Row>
        <Row>
        <Col xs={12} sm={6}>
        <Form.Label className="api-label">Votre Email</Form.Label>
        <Form.Control type="text" name="email" value={state.email} onChange={handleChange} className="api-input" placeholder="Votre Email" />
        </Col>
        </Row>
      </div>
      <div className="api-footer">
      <Row>
      <Col>
      <label className="m-checkbox__label" >Vous êtes susceptible d'être recontacté par Hi Europa dans le cadre de l'établissement de votre devis</label>
      </Col>
      </Row>
      <Row>
        <Col>
        <div className="m-checkbox">
        <input
          type="checkbox"
          className="m-checkbox__input"
          name="subscribe"
          onChange={handleCheck}
        />
          <label className="m-checkbox__label" >Je souhaite recevoir des informations de Hi Europa, la présentation de ses autres services et de ses offres personnalisées.</label>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <a className="api-back red" href="#" onClick={ handlePrevious }>
            <span className="fa-chevron-left icon"></span>
            <span>Précedent</span>
          </a>
        </Col>
      </Row>
      <Row>
      <Col>
      <Button className="api-button pull-right" bsPrefix="api" variant="small" onClick={handleClick}>Voir le prix</Button>
      </Col>
      </Row>
      </div>
    </Container>
  );
}

export default InsuranceUserDetail;
