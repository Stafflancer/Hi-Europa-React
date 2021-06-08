import React, { useState, useEffect } from "react";
import ApiTitle from "../ApiTitle";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import Promise from 'bluebird';
import Api from "./Api";
import ReactLoading from "react-loading";

const InsuranceUserDetail = (props) => {
  const [state, setState] = useState({
    email: props.userInfo.email,
    firstName: props.userInfo.firstName,
    lastName: props.userInfo.lastName,
    subscribe: props.userInfo.subscribe,
    formatError: false,
    bLoading: false,
    firstEmpty: false,
    lastEmpty: false,
    emailEmpty: false,
  });
  const { t } = useTranslation();

  const handleClick = (e) => {
    if (state.firstName.trim() == "") {
      setState((state) => ({ ...state, firstEmpty: true }));
    }
    if (state.lastName.trim() == "") {
      setState((state) => ({ ...state, lastEmpty: true }));
    }
    if (state.email.trim() == "") {
      setState((state) => ({ ...state, emailEmpty: true }));
    }

    if (
      state.firstName.trim() !== "" &&
      state.lastName.trim() !== "" &&
      state.email.trim() !== ""
    ) {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(state.email) === true) {
        setState((state) => ({ ...state, formatError: false }));
        // setState((state) => ({ ...state, bLoading: true }));

        //Get inital price
        // let initData = props.userInfo;
        // let opReplaceData = { ...initData, opReplace: "Oui" };
        // let opElectricData = { ...initData, opElectric: "Oui" };
        // let opVolData = { ...initData, opVol: "Oui" };
        // let opAffairesData = { ...initData, opAffaires: "Individuel" };
        // let opJuridicalData = { ...initData, opJuridique: "Oui" };
        // let opSchoolData = { ...initData, opSchool: "Oui" };
        // let opDependenceData = { ...initData, opDependence: "Oui" };

        // let price = {};
        // axios
        //   .all([
        //     Api.getPrice(initData),
        //     Api.getPrice(opReplaceData),
        //     Api.getPrice(opElectricData),
        //     Api.getPrice(opVolData),
        //     Api.getPrice(opAffairesData),
        //     Api.getPrice(opJuridicalData),
        //     Api.getPrice(opSchoolData),
        //     Api.getPrice(opDependenceData),
        //   ])
        //   .then(
        //     axios.spread(function (
        //       initRes,
        //       opReplaceRes,
        //       opEleRes,
        //       opVolRes,
        //       opAffRes,
        //       opJurRes,
        //       opSchoolRes,
        //       opDepRes
        //     ) {
        //       let initPrice = Number(
        //         (initRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
        //       );
        //       let opReplacePrice = Number(
        //         (opReplaceRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
        //       );
        //       let opElePrice = Number(
        //         (opEleRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
        //       );
        //       let opVolPrice = Number(
        //         (opVolRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
        //       );
        //       let opAffPrice = Number(
        //         (opAffRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
        //       );
        //       let opJurPrice = Number(
        //         (opJurRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
        //       );
        //       let opSchPrice = Number(
        //         (opSchoolRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
        //       );
        //       let opDepPrice = Number(
        //         (opDepRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
        //       );

        //       price.price = initPrice;
        //       price.opProtectionValueables = 0;
        //       price.opReplaceValue = Number(
        //         (opReplacePrice - initPrice).toFixed(2)
        //       );
        //       price.opElectricalDamage = Number(
        //         (opElePrice - initPrice).toFixed(2)
        //       );
        //       price.opVol = Number((opVolPrice - initPrice).toFixed(2));
        //       price.opAffaires = Number((opAffPrice - initPrice).toFixed(2));
        //       price.opProtectionJuridical = Number(
        //         (opJurPrice - initPrice).toFixed(2)
        //       );
        //       price.opInsuranceSchool = Number(
        //         (opSchPrice - initPrice).toFixed(2)
        //       );
        //       price.opDependence = Number((opDepPrice - initPrice).toFixed(2));

        //     })
        //   )
        //   .catch((error) => {
        //     setState((state) => ({ ...state, bLoading: false }));
        //     console.log(error);
        //   });

        props.update("email", state.email);
        props.update("firstName", state.firstName);
        props.update("lastName", state.lastName);
        props.update("subscribe", state.subscribe);

        // setState((state) => ({ ...state, bLoading: false }));

        const formData1 = new FormData();
        formData1.append('first_name', props.userInfo.firstName);
        formData1.append('last_name', props.userInfo.lastName);
        formData1.append('postal_code', props.userInfo.postCode);
        formData1.append('email', props.userInfo.email);

        const formData2 = new FormData();
        formData2.append('first_name', props.userInfo.firstName);
        formData2.append('last_name', props.userInfo.lastName);
        formData2.append('postal_code', props.userInfo.postCode);
        formData2.append('email', props.userInfo.email);
        formData2.append('type_residence', props.userInfo.residenceType.toLowerCase().split(' ').join('_').normalize("NFD").replace(/[\u0300-\u036f]/g, "") );
        formData2.append('type_accommodation', props.userInfo.accomodationType.toLowerCase().split(' ').join('_').normalize("NFD").replace(/[\u0300-\u036f]/g, "") );
        formData2.append('prospect_type', props.userInfo.prospectType.toLowerCase().split(' ').join('_').normalize("NFD").replace(/[\u0300-\u036f]/g, "") );
        formData2.append('apartment_floor', props.userInfo.floors.toLowerCase().split(' ').join('_').normalize("NFD").replace(/[\u0300-\u036f]/g, "") );
        formData2.append('room', props.userInfo.rooms);
        formData2.append('apartment_surface', props.userInfo.area);
        formData2.append('insured', (props.userInfo.insuranceStatus === "yes") ? 1 : 0);
        formData2.append('termination', (props.userInfo.insuranceCancel === "yes") ? 1 : 0);

        Promise.coroutine(function * () {
          var res1 = yield axios.post(process.env.REACT_APP_PROD_API_BASE_URL + '/api/web/user', formData1);
          var user = res1.data.data;

          formData2.append('user_id', user.id);
          var res2 = yield axios.post(process.env.REACT_APP_PROD_API_BASE_URL + '/api/web/quotation', formData2);
          var quote = res2.data.data;

          props.update("userId", user.id);
          props.update("quoteId", quote.id);
        })().catch(function(errs) {
          console.log(errs);
        });

        props.showResult();
      } else {
        setState((state) => ({ ...state, formatError: true }));
      }
    } else {
      setState((state) => ({ ...state, formatError: false }));
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let nameValid = /^[a-zàâçéèêëîïôûùüÿñæœ '-]+$/i;
    let emailValid = /^[a-zàâçéèêëîïôûùüÿñæœ0-9@#._+\-]+$/;
    if (e.target.name == "firstName" || e.target.name == "lastName") {
      if (value == "" || nameValid.test(value)) {
        setState((state) => ({ ...state, [e.target.name]: value }));
      }
    } else if (e.target.name == "email") {
      if (value == "" || emailValid.test(value)) {
        setState((state) => ({ ...state, [e.target.name]: value }));
      }
    } else {
      setState((state) => ({ ...state, [e.target.name]: value }));
    }
  };
  const handleCheck = (e) => {
    setState((state) => ({ ...state, subscribe: !state.subscribe }));
  };
  const handlePrevious = () => {
    if (props.userInfo.insuranceStatus == "yes") {
      props.goToStep(10);
    } else if (props.userInfo.insuranceStatus == "no") {
      props.goToStep(9);
    }
  };

  useEffect(() => {
    let firstName = state.firstName;
    let lastName = state.lastName;
    let userEmail = state.email;
    if (firstName.trim() !== "") {
      setState((state) => ({ ...state, firstEmpty: false }));
    }
    if (lastName.trim() !== "") {
      setState((state) => ({ ...state, lastEmpty: false }));
    }
    if (userEmail.trim() !== "") {
      setState((state) => ({ ...state, emailEmpty: false }));
    }
  }, [state.firstName, state.lastName, state.email]);

  return (
    <Container className={state.bLoading ? "api-loading" : ""}>
      <ApiTitle content={t("devis.insuranceUserDetail.Title")} />
      <div className="api-content">
        <Row>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">
              {t("devis.insuranceUserDetail.firstName")}
              <span className="api-required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
              className={`api-input ${state.firstEmpty ? "api-error" : ""}`}
              placeholder={t("devis.insuranceUserDetail.firstName")}
            />

            {state.firstEmpty ? (
              <Row>
                <Col>
                  <ApiError content={t("devis.Required")} />
                </Col>
              </Row>
            ) : (
              ""
            )}
          </Col>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">
              {t("devis.insuranceUserDetail.lastName")}
              <span className="api-required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              className={`api-input ${state.lastEmpty ? "api-error" : ""}`}
              placeholder={t("devis.insuranceUserDetail.lastName")}
            />
            {state.lastEmpty ? (
              <Row>
                <Col>
                  <ApiError content={t("devis.Required")} />
                </Col>
              </Row>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">
              {t("devis.insuranceUserDetail.Email")}
              <span className="api-required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={state.email}
              onChange={handleChange}
              className={`api-input ${
                state.formatError || state.emailEmpty ? "api-error" : ""
              }`}
              placeholder={t("devis.insuranceUserDetail.Email")}
            />
            {state.emailEmpty ? (
              <Row>
                <Col>
                  <ApiError content={t("devis.Required")} />
                </Col>
              </Row>
            ) : (
              ""
            )}
            {state.formatError ? (
              <Row>
                <Col>
                  <ApiError content={t("devis.formatError")} />
                </Col>
              </Row>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </div>
      <div className="api-footer">
        <Row>
          <Col>
            <label className="m-checkbox__label">
              {t("devis.insuranceUserDetail.Comment")}
            </label>
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
                defaultChecked={state.subscribe}
              />
              <label className="m-checkbox__label">
                {t("devis.insuranceUserDetail.Check")}
              </label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="api-back red" href="#" onClick={handlePrevious}>
              <span className="fa-chevron-left icon"></span>
              <span>{t("devis.previous-button")}</span>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className="api-button pull-right"
              bsPrefix="api"
              variant="small"
              onClick={handleClick}
            >
              {t("devis.insuranceUserDetail.Button")}
            </Button>
          </Col>
        </Row>
      </div>
      <ReactLoading className="loading-bar" type={"bars"} color="#C62D54" />
    </Container>
  );
};

export default InsuranceUserDetail;
