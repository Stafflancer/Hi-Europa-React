import React, { useState, useEffect } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Dependency = (props) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    address: props.userInfo.exactAddress,
    additionalAddress: props.userInfo.additionalAddress,
    postCode: props.userInfo.postCode,
    city: props.userInfo.city,
    addressEmpty: false,
    codeEmpty: false,
    cityEmpty: false
  });
  const handleChange = (e) => {
    let value = e.target.value;
    let strValid = /^[a-zàâçéèêëîïôûùüÿñæœ0-9 &*():;,/.\-]+$/i;
    let cityValid = /^[a-zàâçéèêëîïôûùüÿñæœ0-9 '\-]+$/i;
    if (e.target.name == "address" || e.target.name == "additionalAddress") {
      if (value == "" || strValid.test(value)) {
        setState(state => ({ ...state, address: value }));
      }
    }
    else if (e.target.name == "postCode") {
      let value = e.target.value;
      let re = /^[0-9\b]+$/;
      if (value === '' || (re.test(value)) && value.length < 6) {
        setState(state => ({ ...state, postCode: value }));
      }
    } else if (e.target.name == "city") {
      if (value == "" || cityValid.test(value)) {
        setState(state => ({ ...state, city: value }));
      }
    } else {
      setState(state => ({ ...state, [e.target.name]: e.target.value }));
    }

  };
  const handleClick = (e) => {
    if (state.address.trim() == "") {
      setState(state => ({ ...state, addressEmpty: true }));
    }
    if (state.postCode.trim() == "") {
      setState(state => ({ ...state, codeEmpty: true }));
    }
    if (state.city.trim() == "") {
      setState(state => ({ ...state, cityEmpty: true }));
    }

    if (state.address.trim() !== "" && state.postCode.trim() !== "" && state.city.trim() !== "") {
      props.update("dependency_exactAddress", state.address);
      props.update("dependency_additionalAddress", state.additionalAddress);
      props.update("dependency_postCode", state.postCode);
      props.update("dependency_city", state.city);
      props.activeMenu("2");

      props.nextStep();
    }

  };

  useEffect(() => {
    if(state.address.trim() !== "") {
      setState(state=>({...state, addressEmpty: false}));
    }
    if(state.postCode.trim() !== "") {
      setState(state => ({ ...state, codeEmpty: false}));
    }
    if(state.city.trim() !== "") {
      setState(state => ({...state, cityEmpty: false}));
    }
  }, [state.address, state.postCode, state.city])

  return (
    <Container>
      <ApiTitle content={t("souscription.address.Title2")} />
      <div className="api-content">
        <Row>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">{t("souscription.address.exactAddress")}<span className="api-required">*</span></Form.Label>
            <Form.Control type="text" name="address" value={state.address} onChange={handleChange} className={`api-input ${state.addressEmpty ? "api-error" : ""}`} placeholder={t("souscription.address.address")} />
            {state.addressEmpty ?
           <Row>
             <Col>
              <ApiError content={t("souscription.Required")}/>
             </Col>
           </Row>
            : ""
        }
          </Col>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">{t("souscription.address.additionalAddress")}</Form.Label>
            <Form.Control type="text" name="additionalAddress" value={state.additionalAddress} onChange={handleChange} className="api-input" placeholder={t("souscription.address.exactAddress")} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">{t("souscription.address.postCode")}<span className="api-required">*</span></Form.Label>
            <Form.Control type="text" name="postCode" value={state.postCode} onChange={handleChange} className={`api-input ${state.codeEmpty ? "api-error" : ""}`} placeholder={t("souscription.address.postCode")} />
            {state.codeEmpty ?
           <Row>
             <Col>
              <ApiError content={t("souscription.Required")}/>
             </Col>
           </Row>
            : ""
        }
          </Col>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">{t("souscription.address.city")}<span className="api-required">*</span></Form.Label>
            <Form.Control type="text" name="city" value={state.city} onChange={handleChange} className={`api-input ${state.cityEmpty ? "api-error" : ""}`} placeholder={t("souscription.address.city")} />
            {state.cityEmpty ?
           <Row>
             <Col>
              <ApiError content={t("souscription.Required")}/>
             </Col>
           </Row>
            : ""
        }
          </Col>
        </Row>

      </div>
      <ApiComment content={t("souscription.address.Comment")} />
      <div className="api-footer">
      <Row>
        <Col>
          <a className="api-back red" href="#" onClick={() => {props.previousStep();}}>
            <span className="fa-chevron-left icon"></span>
            <span>{t("souscription.previousButton")}</span>
          </a>
        </Col>
      </Row>
        <Row>
          <Col>
            <Button className="api-button pull-right" bsPrefix="api" variant="small" onClick={handleClick} disabled={state.disabled}>{t("souscription.address.button")}</Button>
          </Col>
        </Row>
      </div>

    </Container>
  );
}

export default Dependency;
