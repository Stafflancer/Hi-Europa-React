import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import blueMascotNormalIcon from "assets/img/icons/blue-mascot_normal.svg";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import Promise from 'bluebird';

const ErrorNoticeOne = (props) => {
  const [state, setState] = useState({ email: "" });
  const { t } = useTranslation();
  const handleChange = (e) => {
    setState(state => ({ ...state, email: e.target.value }));
  }
  const handleClick = () => {
    props.update("email", state.email);

    const formData = new FormData();
    formData.append('residence_type', props.userInfo.residenceType.toLowerCase().split(' ').join('_').normalize("NFD").replace(/[\u0300-\u036f]/g, "") );
    formData.append('residency_type', props.userInfo.accomodationType.toLowerCase().split(' ').join('_').normalize("NFD").replace(/[\u0300-\u036f]/g, "") );
    formData.append('prospect_type', props.userInfo.prospectType.toLowerCase().split(' ').join('_').normalize("NFD").replace(/[\u0300-\u036f]/g, "") );
    formData.append('postal_code', props.userInfo.postCode);
    formData.append('email', props.userInfo.email);
    formData.append('floor', props.userInfo.floors.toLowerCase().split(' ').join('_').normalize("NFD").replace(/[\u0300-\u036f]/g, "") );
    formData.append('number_rooms', props.userInfo.rooms);
    formData.append('surface', props.userInfo.area);
    formData.append('got_insurance', (props.userInfo.insuranceStatus === "yes") ? 1 : 0);

    if (props.userInfo.insuranceDuration === "no")
    {
      formData.append('insured_time', 'moins_8_mois');
    }

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
            <h1>{t("devis.errorFirst.Title")}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              {t("devis.errorFirst.Text")}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>{t("devis.errorFirst.SubTitle")}</h2>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <Form.Label className="api-label">{t("devis.errorFirst.Email")}</Form.Label>
            <Form.Control type="text" name="email" value={state.email} onChange={handleChange} className="api-input" placeholder={t("devis.errorFirst.Email")} />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className="m-checkbox">
              <input
                type="checkbox"
                className="m-checkbox__input"
              />
              <label className="m-checkbox__label" >{t("devis.errorFirst.Check")}</label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <Button className="api-button" bsPrefix="api" variant="large" onClick={handleClick}>{t("devis.errorFirst.Button")}</Button>
          </Col>
        </Row>
      </div>
      <div className="api-footer error-notice">
        <Row>
          <Col>
            <a href="#">
              <span>{t("devis.errorFirst.Return")}</span>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="api-back red" href="#" onClick={() => { props.goToStep(8) }}>
              <span className="fa-chevron-left icon"></span>
              <span>{t("devis.previous-button")}</span>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ErrorNoticeOne;
