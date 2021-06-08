import React, { useState, useEffect } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ApiError from "../ApiError";
import ReactLoading from "react-loading";
import Api from "./Api";

const PostCode = (props) => {
  const [state, setState] = useState({ postCode: props.userInfo.postCode, empty:false, error: false, bLoading: false });
  const { t } = useTranslation();
  const handleChange = (e) => {
    let value = e.target.value;
    const re = /^[0-9\b]+$/;
    if (value === '' || (re.test(value)) && value.length < 6) {
      setState(state => ({ ...state, postCode: value }));
    }
    
  }
  const handleClick = () => {
    
    let postCode = state.postCode;
    if(postCode.trim() != "") {
      setState(state => ({ ...state, empty : false}));
      if(postCode >= 10000 && postCode < 96000) {
        setState(state => ({ ...state, bLoading : true}));
        Api.getCitybyZipcode(state.postCode)
        .then((response) => {
          let cities = response.data.Cities;
          props.update("postCode", state.postCode);
          props.update("city", cities[0]);
          setState(state => ({ ...state, error : false}));
          setState(state => ({ ...state, bLoading : false}));
          props.nextStep();
        })
        .catch((error) => {
          setState(state => ({ ...state, bLoading : false}));
          setState(state => ({ ...state, error : true}));
        });
      } else {
        setState(state => ({ ...state, error : true}));
      }
    } else {
      setState(state => ({ ...state, empty : true}));
      setState(state => ({ ...state, error : false}));
    }
    
  }
  useEffect(() => {
    let value = state.postCode;
    if(value.trim() !== "") {
      setState(state => ({ ...state, empty: false }));
    } 
  }, [state.postCode])
  return (
    <Container className={state.bLoading ? "api-loading" : ""}>
      <ApiTitle content={t("devis.postCode.Title")} />
      <div className="api-content">
        <Row>
          <Col>
            <Form.Label className="api-label">{t("devis.postCode.postCode")}<span className="api-required">*</span></Form.Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control type="text" className={`api-input ${state.error || state.empty ? "api-error" : ""}`} name="postcode" value={state.postCode} onChange={handleChange} />
            {state.error ?
           <Row>
             <Col>
              <ApiError content={t("devis.postCode.Error")}/>
             </Col>
           </Row>
            : ""
        }
        {state.empty ?
           <Row>
             <Col>
              <ApiError content={t("devis.Required")}/>
             </Col>
           </Row>
            : ""
        }
          </Col>
          <Col>
            <Button className="api-button" bsPrefix="api" variant="large" onClick={handleClick}>{t("devis.postCode.Button")}</Button>
          </Col>
        </Row>
      </div>
      <ApiComment content={t("devis.postCode.Message")} />
      <ReactLoading className="loading-bar" type={"bars"} color="#C62D54" />
    </Container>
  );
}

export default PostCode;
