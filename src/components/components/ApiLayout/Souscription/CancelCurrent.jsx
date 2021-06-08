import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CancelCurrent = (props) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    moveStatus: "",
    insurerName: "",
    expiredDate: "",
    firstName: "",
    lastName: "",
    contractNumber: ""
  });
  const handleClick = (e) => {
    //props.updateForm("city", state.city);
    props.update("moveStatus", state.moveStatus);
    props.update("insurerName", state.insurerName);
    props.update("prevInsurExpireDate", state.expiredDate);
    props.update("prevInsurFirstName", state.firstName);
    props.update("prevInsurLastName", state.lastName);
    props.update("prevInsurContractNum", state.contractNumber);

    props.activeMenu("5");
    props.nextStep();
  };
  return(
    <Container>
      <ApiTitle content={t("souscription.cancelSubscription.Title")} />
      <div className="api-content">
        <Row>
          <Col xs={12} sm={6}>
            <div className={`api-input selectable ${state.moveStatus == "move" ? "selected" : ""}`} onClick={() => { setState({ ...state, moveStatus:"move"})}}>
            {t("souscription.cancelSubscription.Confirm1")}
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className={`api-input selectable ${state.moveStatus == "stay" ? "selected" : ""}`} onClick={() => { setState({ ...state, moveStatus:"stay"})}}>
            {t("souscription.cancelSubscription.Confirm2")}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
          <Form.Label className="api-label">{t("souscription.cancelSubscription.insurerName")}</Form.Label>
          <Form.Control as="select" className="api-input" name="insurerName" value={state.insurerName} onChange={(e) => { setState({ ...state, insurerName: e.target.value})}}>
            <option value="1">Lorem ipsum</option>
            <option value="2">Lorem ipsum</option>
          </Form.Control>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">{t("souscription.cancelSubscription.insuranceDate")}</Form.Label>
            <DatePicker name="expiredDate" showYearDropdown dateFormat="dd/MM/yyyy" className="api-input" selected={state.expiredDate} onChange={date => setState(state => ({ ...state, expiredDate: date }))} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">{t("souscription.cancelSubscription.firstName")}</Form.Label>
            <Form.Control type="text" name="firstName" value={state.firstName} onChange={(e) => { setState({ ...state, firstName: e.target.value})}} className="api-input" placeholder={t("souscription.cancelSubscription.firstName")} />
          </Col>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">{t("souscription.cancelSubscription.lastName")}</Form.Label>
            <Form.Control type="text" name="lastName" value={state.lastName} onChange={(e) => { setState({ ...state, lastName: e.target.value})}} className="api-input" placeholder={t("souscription.cancelSubscription.lastName")} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">{t("souscription.cancelSubscription.insuranceNumber")}</Form.Label>
            <Form.Control type="text" name="contractNumber" value={state.contractNumber} onChange={(e) => { setState({ ...state, contractNumber: e.target.value})}} className="api-input" placeholder={t("souscription.cancelSubscription.insuranceNumber")} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ApiComment content={t("souscription.cancelSubscription.Comment")} />
          </Col>
        </Row>

      </div>
      <div className="api-footer">
        <Row>
          <Col>
            <a className="api-back red" href="#" onClick={() => { props.goToStep(5);props.activeMenu("3"); }}>
              <span className="fa-chevron-left icon"></span>
              <span>{t("souscription.previousButton")}</span>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="api-button pull-right" bsPrefix="api" variant="small" onClick={handleClick} disabled={ state.moveStatus == "" || state.insurerName == ""}>{t("souscription.cancelSubscription.Button")}</Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default CancelCurrent;
