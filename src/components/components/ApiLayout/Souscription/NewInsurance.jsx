import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewInsurance = (props) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    startDate: "",
    insurancePeriod: "",
    expiredDate: "",
  });
  const handleClick = (e) => {
    //props.updateForm("city", state.city);

    props.update("newInsurStartDate", state.startDate);
    props.update("newInsurExpireDate", state.expiredDate); //@todo Validate 2 dates, 1 must be after the other.
    props.update("newInsurPeriod", state.insurancePeriod);

    props.nextStep();
  };
  return(
    <Container>
      <ApiTitle content={t("souscription.newInsurance.Title")} />
      <div className="api-content">
        <Row>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">{t("souscription.newInsurance.startDate")}</Form.Label>
            <DatePicker name="startDate" showYearDropdown dateFormat="dd/MM/yyyy" className="api-input" selected={state.startDate} onChange={date => setState(state => ({ ...state, startDate: date }))} />
          </Col>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">{t("souscription.newInsurance.contractPeriod")}</Form.Label>
            <Form.Control as="select" className="api-input" name="insurancePeriod" value={state.insurancePeriod} onChange={(e) => { setState({ ...state, insurancePeriod: e.target.value})}}>
              <option value={t("souscription.newInsurance.Option1")}>{t("souscription.newInsurance.Option1")}</option>
              <option value={t("souscription.newInsurance.Option2")}>{t("souscription.newInsurance.Option2")}</option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">{t("souscription.newInsurance.endDate")}</Form.Label>
            <DatePicker name="expiredDate" showYearDropdown dateFormat="dd/MM/yyyy" className="api-input" selected={state.expiredDate} onChange={date => setState(state => ({ ...state, expiredDate: date }))} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ApiComment content={t("souscription.newInsurance.Comment")} />
          </Col>
        </Row>

      </div>
      <div className="api-footer">
        <Row>
          <Col>
            <a className="api-back red" href="#" onClick={() => { props.goToStep(6);props.activeMenu("3"); }}>
              <span className="fa-chevron-left icon"></span>
              <span>{t("souscription.previousButton")}</span>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="api-button pull-right" bsPrefix="api" variant="small" onClick={handleClick} disabled={ state.startDate == "" || state.insurancePeriod == "" || state.expiredDate == ""}>{t("souscription.newInsurance.Button")}</Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default NewInsurance;
