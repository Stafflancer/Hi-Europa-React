import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import blueMascotNormalIcon from "assets/img/icons/blue-mascot_normal.svg";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import Promise from 'bluebird';

const ErrorNoticeDate = (props) => {
  const { t } = useTranslation();
  const [state, setState] = useState({ email: ""});
  const handleChange = (e) => {
    setState(state => ({ ...state, email:e.target.value}));
  }
  const handleClick = () => {
    props.update("email", state.email);

    var formData = new URLSearchParams();
    formData.append('is_pb_prime', 1);

    if (props.userInfo.email)
    {
      formData.append('email', props.userInfo.email);
    }
    
    Promise.coroutine(function * () {
      var res = yield axios.put(process.env.REACT_APP_PROD_API_BASE_URL + '/api/web/user/' + props.userInfo.userId, formData);
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
            <h1>{t("souscription.errorNotice.Title")}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
            {t("souscription.errorNotice.Text")}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>{t("souscription.errorNotice.subTitle")}</h2>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Form.Label className="api-label">{t("souscription.errorNotice.Email")}</Form.Label>
          <Form.Control type="text" name="email" value={state.email} onChange={handleChange} className="api-input" placeholder={t("souscription.errorNotice.Email")} />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <Button className="api-button" bsPrefix="api" variant="large" onClick={handleClick}>{t("souscription.errorNotice.Button")}</Button>
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
          <label className="m-checkbox__label" >{t("souscription.errorNotice.Optin")}</label>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <a href="#">
          <span>{t("souscription.errorNotice.retour")}</span>
        </a>
        </Col>
      </Row>
        <Row>
          <Col>
            <a className="api-back red" href="#" onClick={props.previousStep}>
              <span className="fa-chevron-left icon"></span>
              <span>{t("souscription.errorNotice.Previous")}</span>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ErrorNoticeDate;
