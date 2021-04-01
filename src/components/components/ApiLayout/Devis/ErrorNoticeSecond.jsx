import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import blueMascotNormalIcon from "assets/img/icons/blue-mascot_normal.svg";

const ErrorNoticeSecond = (props) => {
  const [state, setState] = useState({ email: ""});
  const handleChange = (e) => {
    setState(state => ({ ...state, email:e.target.value}));
  }
  const handleClick = () => {
    props.update("email", state.email);
  }
  return (
    <Container>
      <div className="api-content error-notice">
        <Row>
          <Col>
            <img
              src={blueMascotNormalIcon}
              alt="À propos d’hi Europa"
              className="exclamation-icon"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Désolé</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Il ne nous est pas possible de vous proposer le produit d’assurance habitation
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2> Laissez-nous votre e-mail et soyez informé de toute évolution de notre assurance habitation.</h2>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Form.Label className="api-label">Email</Form.Label>
          <Form.Control type="text" name="email" value={state.email} onChange={handleChange} className="api-input" placeholder="Email" />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <Button className="api-button" bsPrefix="api" variant="large" onClick={handleClick}>Me tenir informé</Button>
          </Col>
        </Row>
      </div>
      <div className="api-footer error-notice">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
        <div className="m-checkbox">
        <input
          type="checkbox"
          className="m-checkbox__input"
        />
          <label className="m-checkbox__label" >J'accepte de recevoir des offres personnalisées de la part de Hi Europa</label>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <a href="#">
          <span>Retour au site</span>
        </a>
        </Col>
      </Row>
        <Row>
          <Col>
            <a className="api-back red" href="#" onClick={() => { props.goToStep(9)}}>
              <span className="fa-chevron-left icon"></span>
              <span>Précedent</span>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ErrorNoticeSecond;
