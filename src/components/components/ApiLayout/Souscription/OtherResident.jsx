import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const OtherResident = (props) => {
  if(props.formData.otherResident) {
    return(
      <Row>
        <Col>
        <Row>
          <Col>
            <h2 className="sub-title">Résidents 2</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Titre</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.otherGender}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Prénom</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.otherFirstName}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Nom</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.otherLastName}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Date de naissance</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.otherBirthDay}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Statut</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.otherStatus}</label>
          </Col>
        </Row>
        </Col>
      </Row>
    )
  } else {
    return "";
  }
}

export default OtherResident;
