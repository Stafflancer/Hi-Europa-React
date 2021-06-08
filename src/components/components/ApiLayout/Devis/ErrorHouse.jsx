import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import blueMascotNormalIcon from "assets/img/icons/blue-mascot_normal.svg";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import Promise from 'bluebird';

const ErrorHouse = (props) => {
  const [state, setState] = useState({ email: "" });
  const { t } = useTranslation();
  const handleChange = (e) => {
    setState(state => ({ ...state, email: e.target.value }));
  }
  const handleClick = () => {
    props.update("email", state.email);

    const formData = new FormData();
    formData.append('residency_type', props.userInfo.accomodationType.toLowerCase().split(' ').join('_').normalize("NFD").replace(/[\u0300-\u036f]/g, "") );
    formData.append('email', props.userInfo.email);
    formData.append('postal_code', props.userInfo.postCode);

    Promise.coroutine(function * () {
      var res = yield axios.post(process.env.REACT_APP_PROD_API_BASE_URL + '/api/web/prospect', formData);
      console.dir(res);
    })().catch(function(errs) {
      console.log(errs);
    });
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
            <h1>{t("devis.errorHouse.Title")}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              {t("devis.errorHouse.Text")}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2> {t("devis.errorHouse.SubTitle")}</h2>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <Form.Label className="api-label">{t("devis.errorHouse.Email")}</Form.Label>
            <Form.Control type="text" name="email" value={state.email} onChange={handleChange} className="api-input" placeholder="Email" />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className="m-checkbox">
              <input
                type="checkbox"
                className="m-checkbox__input"
              />
              <label className="m-checkbox__label" >{t("devis.errorHouse.Check")}</label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <Button className="api-button" bsPrefix="api" variant="large" onClick={handleClick}>{t("devis.errorHouse.Button")}</Button>
          </Col>
        </Row>
      </div>
      <div className="api-footer error-notice">
        <Row>
          <Col>
            <a href="#">
              <span>{t("devis.errorHouse.Return")}</span>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="api-back red" href="#" onClick={() => { props.goToStep(2) }}>
              <span className="fa-chevron-left icon"></span>
              <span>{t("devis.previous-button")}</span>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ErrorHouse;
