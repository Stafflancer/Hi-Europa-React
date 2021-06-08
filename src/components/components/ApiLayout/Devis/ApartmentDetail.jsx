import React, { useState, useEffect } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ApartmentDetail = (props) => {
  const [state, setState] = useState({
    error: false,
    floors: "",
    area: "",
    floorsEmpty: false,
    areaEmpty: false
  });

  const { t } = useTranslation();
  const comment = () => {
    return state.floors == "" ? t("devis.apartmentDetail.Comment1") : t("devis.apartmentDetail.Comment2")
  }
  const handleClick = (e) => {
    if(state.area =="") {
      setState(state => ({ ...state, areaEmpty:true}));
    }
    if(state.floors == "") {
      setState(state => ({ ...state, floorsEmpty:true}));
    }
    if(state.area !=="" && state.floors !=="") {
      if (state.area > 250 ) {
        setState(state => ({ ...state, error:true}));
        
      } else {
        setState(state => ({ ...state, error:false}));
        props.update("floors", state.floors);
        props.update("area", state.area);
        props.nextStep();
      }
    } else {
      setState(state => ({ ...state, error:false}));
    }
    
  };

  const handleChange = (e) => {
    if(e.target.name == "floors") {
      setState(state => ({ ...state, floors:e.target.value}));

    } else if (e.target.name == "area") {
      const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
          setState(state => ({ ...state, area:e.target.value}));
        }
    }
  }

  useEffect(() => {
    let area = state.area;
    let floors = state.floors;
    if(area.trim() !== "") {
      setState(state => ({ ...state, areaEmpty: false }));
    }
    if(floors !== "") {
      setState(state => ({ ...state, floorsEmpty: false }));
    } 
  }, [state.area, state.floors])
  return (
    <Container>
      <ApiTitle content={t("devis.apartmentDetail.Title")} />
      <div className="api-content">
        <Row>
          <Col xs={12} sm={6}>
          <Form.Label className="api-label">{t("devis.apartmentDetail.floorLabel")}<span className="api-required">*</span></Form.Label>
          <Form.Control as="select" className={`api-input ${state.floorsEmpty ? "api-error" : ""} ${state.floors ? "" : "placeholder"}`} name="floors" value={state.floors} onChange={handleChange}>
            <option value="" disabled>{t("devis.apartmentDetail.floorPlaceholder")}</option>
            <option value="Rez de Chaussée">{t("devis.apartmentDetail.firstFloor")}</option>
            <option value="Intermédiaire">{t("devis.apartmentDetail.interFloor")}</option>
            <option value="Dernier Etage">{t("devis.apartmentDetail.lastFloor")}</option>
          </Form.Control>
          {state.floorsEmpty ?
           <Row>
             <Col>
              <ApiError content={t("devis.Required")}/>
             </Col>
           </Row>
            : ""
        }
          </Col>
          <Col xs={12} sm={6}>
          <Form.Label className="api-label">{t("devis.apartmentDetail.areaLabel")}<span className="api-required">*</span></Form.Label>
          <Form.Control type="text" name="area" value={state.area} onChange={handleChange} className={`api-input ${state.error || state.areaEmpty ? "api-error" : ""}`} placeholder={t("devis.apartmentDetail.areaPlaceholder")} />
          {state.areaEmpty ?
           <Row>
             <Col>
              <ApiError content={t("devis.Required")}/>
             </Col>
           </Row>
            : ""
        }
        {state.error ?
           <Row>
             <Col>
              <ApiError content={t("devis.apartmentDetail.Error")}/>
             </Col>
           </Row>
            : ""
        }
          </Col>
        </Row>
        

      </div>

      <ApiComment content= {comment()} />
      <div className="api-footer">
      <Row>
        <Col>
          <a className="api-back red" href="#" onClick={props.previousStep}>
            <span className="fa-chevron-left icon"></span>
            <span>{t("devis.previous-button")}</span>
          </a>
        </Col>
      </Row>
      <Row>
      <Col>
      <Button className="api-button pull-right" bsPrefix="api" variant="small" onClick={handleClick}>{t("devis.next-button")}</Button>
      </Col>
      </Row>
      </div>
    </Container>
  );
}

export default ApartmentDetail;
