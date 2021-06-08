import React, { useState, useEffect } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";

const SubscriberInfo = (props) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    firstName: props.userInfo.firstName,
    lastName: props.userInfo.lastName,
    gender: props.userInfo.gender,
    birthDay: "",
    email: props.userInfo.email,
    mobile: "",
    telephone: "",
    residentStatus: "",
    otherResident: false,
    otherFirstName: "",
    otherLastName: "",
    otherGender: "",
    otherBirthDay: "",
    status: "",
    ageError: false,
    emailError: false,
    genderEmpty: false,
    firstEmpty: false,
    lastEmpty: false,
    emailEmpty: false,
    mobileEmpty: false,
    telephoneEmpty: false,
    birthdayEmpty: false,
  });
  const [otherResident, setOtherResident] = useState([]);
  const addOtherResident = () => {
    setOtherResident([
      ...otherResident,
      { gender: "", firstName: "", lastName: "", dateOfBirth: "", status: "" },
    ]);
  };
  const onChangeOtherResident = (e, index) => {
    const { name, value } = e.target;
    const otherResidentList = [...otherResident];
    if (name.includes("gender")) {
      otherResidentList[index]["gender"] = value;
    } else {
      otherResidentList[index][name] = value;
    }
    setOtherResident(otherResidentList);
  };
  const handleChange = (e) => {
    let value = e.target.value;
    let nameValid = /^[a-zàâçéèêëîïôûùüÿñæœ '-]+$/i;
    let emailValid = /^[a-zàâçéèêëîïôûùüÿñæœ0-9@#._+\-]+$/;
    let phoneValid = /^[0-9\b]+$/;

    if (e.target.name == "firstName" || e.target.name == "lastName") {
      if (value === "" || nameValid.test(value)) {
        setState((state) => ({ ...state, [e.target.name]: value }));
      }
    } else if (e.target.name == "mobile" || e.target.name == "telephone") {
      if (value == "" || (phoneValid.test(value) && value.length < 11)) {
        setState((state) => ({ ...state, [e.target.name]: value }));
      }
    } else if (e.target.name == "email") {
      if (value == "" || emailValid.test(value)) {
        setState((state) => ({ ...state, [e.target.name]: value }));
      }
    } else {
      setState((state) => ({ ...state, [e.target.name]: e.target.value }));
    }
  };
  const handleClick = (e) => {
    if (state.gender == "") {
      setState((state) => ({ ...state, genderEmpty: true }));
    }
    if (state.firstName.trim() == "") {
      setState((state) => ({ ...state, firstEmpty: true }));
    }
    if (state.lastName == "") {
      setState((state) => ({ ...state, lastEmpty: true }));
    }
    if (state.birthDay == "") {
      setState((state) => ({ ...state, birthdayEmpty: true }));
    }
    if (state.email.trim() == "") {
      setState((state) => ({ ...state, emailEmpty: true }));
    }
    if (state.mobile.trim() == "") {
      setState((state) => ({ ...state, mobileEmpty: true }));
    }
    if (state.telephone.trim() == "") {
      setState((state) => ({ ...state, telephoneEmpty: true }));
    }
    if (
      state.email.trim() !== "" &&
      state.gender !== "" &&
      state.firstName.trim() !== "" &&
      state.lastName.trim() !== "" &&
      state.birthDay !== "" &&
      state.mobile.trim() !== "" &&
      state.telephone.trim() !== ""
    ) {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(state.email) === true) {
        setState((state) => ({ ...state, emailError: false }));
        let today = new Date();
        let birthDate = new Date(state.birthDay);
        var age_now = today.getFullYear() - birthDate.getFullYear();
        if (age_now >= 18) {
          setState((state) => ({ ...state, ageError: false }));
          props.update("firstName", state.firstName);
          props.update("lastName", state.lastName);
          props.update("gender", state.gender);
          //props.update("birthDay", state.birthDay); //@todo WTH here? Uncomment this
          props.update("email", state.email);
          props.update("mobile", state.mobile);
          props.update("telephone", state.telephone);
          props.update("otherFirstName", state.otherFirstName);
          props.update("otherLastName", state.otherLastName);
          props.update("otherGender", state.otherGender);
          props.update("otherBirthDay", state.otherBirthDay);
          props.update("otherStatus", state.status);
          props.update("otherResident", state.otherResident);
          props.update("residentStatus", state.residentStatus);

          props.activeMenu("4");

          if (props.userInfo.insuranceCancel == "yes") {
            props.goToStep(6);
          } else {
            props.goToStep(7);
          }
        } else {
          setState((state) => ({ ...state, ageError: true }));
        }
      } else {
        setState((state) => ({ ...state, emailError: true }));
      }
    } else {
      setState((state) => ({ ...state, ageError: false }));
      setState((state) => ({ ...state, emailError: false }));
    }
  };

  useEffect(() => {
    if (state.firstName.trim() !== "") {
      setState((state) => ({ ...state, firstEmpty: false }));
    }
    if (state.lastName.trim() !== "") {
      setState((state) => ({ ...state, lastEmpty: false }));
    }
    if (state.email.trim() !== "") {
      setState((state) => ({ ...state, emailEmpty: false }));
    }
    if (state.gender !== "") {
      setState((state) => ({ ...state, genderEmpty: false }));
    }
    if (state.mobile.trim() !== "") {
      setState((state) => ({ ...state, mobileEmpty: false }));
    }
    if (state.telephone.trim() !== "") {
      setState((state) => ({ ...state, telephoneEmpty: false }));
    }
    if (state.birthDay !== "") {
      setState((state) => ({ ...state, birthdayEmpty: false }));
    }
  }, [
    state.firstName,
    state.lastName,
    state.email,
    state.gender,
    state.birthDay,
    state.mobile,
    state.telephone,
  ]);

  return (
    <Container>
      <ApiTitle content={t("souscription.subscriberInfo.Title1")} />
      <div className="api-content">
        <Row>
          <Col>
            <h2 className="sub-title">
              {t("souscription.subscriberInfo.Subscriber")}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <ApiComment content={t("souscription.subscriberInfo.Comment1")} />
          </Col>
        </Row>
        <Row className="gender">
          <Col sm={6} md={4} lg={3}>
            <div className="m-radio">
              <input
                type="radio"
                value="Madame"
                name="gender"
                className="m-radio__input"
                checked={state.gender == "Madame"}
                onChange={handleChange}
              />
              <Form.Label
                className={`m-radio__label ${
                  state.genderEmpty ? "api-error" : ""
                }`}
              >
                {t("souscription.subscriberInfo.Man")}
                <span className="api-required">*</span>
              </Form.Label>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <div className="m-radio">
              <input
                type="radio"
                value="Monsieur"
                name="gender"
                className="m-radio__input"
                checked={state.gender == "Monsieur"}
                onChange={handleChange}
              />
              <Form.Label
                className={`m-radio__label ${
                  state.genderEmpty ? "api-error" : ""
                }`}
              >
                {t("souscription.subscriberInfo.Woman")}
                <span className="api-required">*</span>
              </Form.Label>
            </div>
          </Col>
        </Row>
        {state.genderEmpty ? (
          <Row>
            <Col>
              <ApiError content={t("souscription.Required")} />
            </Col>
          </Row>
        ) : (
          ""
        )}
        <Row>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">
              {t("souscription.subscriberInfo.firstName")}
              <span className="api-required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
              className={`api-input ${state.firstEmpty ? "api-error" : ""}`}
              placeholder={t("souscription.subscriberInfo.firstName")}
            />
            {state.firstEmpty ? (
              <Row>
                <Col>
                  <ApiError content={t("souscription.Required")} />
                </Col>
              </Row>
            ) : (
              ""
            )}
          </Col>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">
              {t("souscription.subscriberInfo.lastName")}
              <span className="api-required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              className={`api-input ${state.lastEmpty ? "api-error" : ""}`}
              placeholder={t("souscription.subscriberInfo.lastName")}
            />
            {state.lastEmpty ? (
              <Row>
                <Col>
                  <ApiError content={t("souscription.Required")} />
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
              {t("souscription.subscriberInfo.birthDay")}
              <span className="api-required">*</span>
            </Form.Label>
            <DatePicker
              name="birthDay"
              showYearDropdown
              dateFormat="dd/MM/yyyy"
              className={`api-input ${
                state.birthdayEmpty || state.ageError ? "api-error" : ""
              }`}
              placeholder={t("souscription.subscriberInfo.birthDay")}
              selected={state.birthDay}
              onChange={(date) =>
                setState((state) => ({ ...state, birthDay: date }))
              }
            />
            {state.birthdayEmpty ? (
              <Row>
                <Col>
                  <ApiError content={t("souscription.Required")} />
                </Col>
              </Row>
            ) : (
              ""
            )}
            {state.ageError ? (
              <Row>
                <Col>
                  <ApiError
                    content={t("souscription.subscriberInfo.errorAge")}
                  />
                </Col>
              </Row>
            ) : (
              ""
            )}
          </Col>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">
              {t("souscription.subscriberInfo.Email")}
              <span className="api-required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={state.email}
              onChange={handleChange}
              className={`api-input ${
                state.emailEmpty || state.emailError ? "api-error" : ""
              }`}
              placeholder={t("souscription.subscriberInfo.Email")}
            />
            {state.emailEmpty ? (
              <Row>
                <Col>
                  <ApiError content={t("souscription.Required")} />
                </Col>
              </Row>
            ) : (
              ""
            )}
            {state.emailError ? (
              <Row>
                <Col>
                  <ApiError content={t("souscription.formatError")} />
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
              {t("souscription.subscriberInfo.Mobile")}
              <span className="api-required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="mobile"
              value={state.mobile}
              onChange={handleChange}
              className={`api-input ${state.mobileEmpty ? "api-error" : ""}`}
              placeholder="06 12 24 12 24"
            />
            {state.mobileEmpty ? (
              <Row>
                <Col>
                  <ApiError content={t("souscription.Required")} />
                </Col>
              </Row>
            ) : (
              ""
            )}
          </Col>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">
              {t("souscription.subscriberInfo.Telephone")}
              <span className="api-required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="telephone"
              value={state.telephone}
              onChange={handleChange}
              className={`api-input ${state.telephoneEmpty ? "api-error" : ""}`}
              placeholder="01 12 24 12 24"
            />
            {state.telephoneEmpty ? (
              <Row>
                <Col>
                  <ApiError content={t("souscription.Required")} />
                </Col>
              </Row>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{t("souscription.subscriberInfo.errorMobile")}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="m-radio">
              <input
                type="radio"
                value="0"
                name="residentStatus"
                className="m-radio__input"
                onClick={(e) => {
                  setState({ ...state, residentStatus: e.target.value });
                }}
              />
              <Form.Label className="m-radio__label">
                {t("souscription.subscriberInfo.residentYes")}
              </Form.Label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="m-radio">
              <input
                type="radio"
                value="1"
                name="residentStatus"
                className="m-radio__input"
                onClick={(e) => {
                  setState({ ...state, residentStatus: e.target.value });
                }}
              />
              <Form.Label className="m-radio__label">
                {t("souscription.subscriberInfo.residentNo")}
              </Form.Label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="sub-title">
              {t("souscription.subscriberInfo.Title2")}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <ApiComment content={t("souscription.subscriberInfo.Comment2")} />
          </Col>
        </Row>
        {otherResident.length > 0 &&
          otherResident.map((item, index) => (
            <Row className="section-others" key={index}>
              <Col>
                <Row>
                  <Col>
                    <h2>Résident {index + 1}</h2>
                  </Col>
                </Row>
                <Row className="gender">
                  <Col sm={6} md={4} lg={3}>
                    <div className="m-radio">
                      <input
                        type="radio"
                        value="Madame"
                        name={`gender_${index}`}
                        id={`gender_${index}_woman`}
                        className="m-radio__input"
                        onChange={(e) => onChangeOtherResident(e, index)}
                      />
                      <Form.Label
                        className="m-radio__label"
                        htmlFor={`gender_${index}_woman`}
                      >
                        {t("souscription.subscriberInfo.Woman")}
                      </Form.Label>
                    </div>
                  </Col>
                  <Col sm={6} md={4} lg={3}>
                    <div className="m-radio">
                      <input
                        type="radio"
                        value="Monsieur"
                        name={`gender_${index}`}
                        id={`gender_${index}_man`}
                        className="m-radio__input"
                        onChange={(e) => onChangeOtherResident(e, index)}
                      />
                      <Form.Label
                        className="m-radio__label"
                        htmlFor={`gender_${index}_man`}
                      >
                        {t("souscription.subscriberInfo.Man")}
                      </Form.Label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Label className="api-label">
                      {t("souscription.subscriberInfo.firstName")}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={otherResident[index].firstName}
                      onChange={(e) => onChangeOtherResident(e, index)}
                      className="api-input"
                      placeholder={t("souscription.subscriberInfo.firstName")}
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Label className="api-label">
                      {t("souscription.subscriberInfo.lastName")}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={otherResident[index].lastName}
                      onChange={(e) => onChangeOtherResident(e, index)}
                      className="api-input"
                      placeholder={t("souscription.subscriberInfo.lastName")}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Label className="api-label">
                      {t("souscription.subscriberInfo.birthDay")}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="dateOfBirth"
                      value={otherResident[index].dateOfBirth}
                      onChange={(e) => onChangeOtherResident(e, index)}
                      className="api-input"
                      placeholder={t("souscription.subscriberInfo.birthDay")}
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Label className="api-label">
                      {t("souscription.subscriberInfo.Status")}
                    </Form.Label>
                    <Form.Control
                      as="select"
                      className="api-input"
                      name="status"
                      value={otherResident[index].status}
                      onChange={(e) => onChangeOtherResident(e, index)}
                    >
                      <option value={t("souscription.subscriberInfo.Spous")}>
                        {t("souscription.subscriberInfo.Spous")}
                      </option>
                      <option value={t("souscription.subscriberInfo.Child")}>
                        {t("souscription.subscriberInfo.Child")}
                      </option>
                      <option value={t("souscription.subscriberInfo.Roommate")}>
                        {t("souscription.subscriberInfo.Roommate")}
                      </option>
                      <option value={t("souscription.subscriberInfo.Parent")}>
                        {t("souscription.subscriberInfo.Parent")}
                      </option>
                      <option value={t("souscription.subscriberInfo.Other")}>
                        {t("souscription.subscriberInfo.Other")}
                      </option>
                    </Form.Control>
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
      </div>
      <div className="api-footer">
        <Row>
          <Col>
            <Button
              className="api-button outline pull-left"
              bsPrefix="api"
              variant="small"
              onClick={addOtherResident}
            >
              {t("souscription.subscriberInfo.addButton")}
            </Button>
            <Button
              className="api-button pull-right"
              bsPrefix="api"
              variant="small"
              onClick={handleClick}
            >
              {t("souscription.nextButton")}
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SubscriberInfo;
