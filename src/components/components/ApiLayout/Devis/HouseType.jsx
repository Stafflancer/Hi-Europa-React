import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiObject from "../ApiObject";
import apartmentIcon from "assets/img/icons/apartment.svg";
import houseIcon from "assets/img/icons/house.svg";

const HouseType = (props) => {
  const handleClick = (type) => {
    props.update("housetype", type);
    if( type == "Appartement") {
      props.nextStep();
    } else {
      props.goToStep(1);
    }
  };

  return (
    <Container>
      <ApiTitle content="C’est pour une maison ou un appartement ?" />
      <div className="api-content">
        <Row>
          <Col xs={12} sm={6}>
            <ApiObject image={apartmentIcon} content="Appartement" onClick={() => handleClick("Appartement")} />
          </Col>
          <Col xs={12} sm={6}>
          <ApiObject image={houseIcon} content="Maison" onClick={() => handleClick("Maison")}/>
          </Col>
        </Row>
      </div>
      <div className="api-footer">
      <Row>
        <Col>
          <a className="api-back red" href="#" onClick={props.previousStep}>
            <span className="fa-chevron-left icon"></span>
            <span>Précedent</span>
          </a>
        </Col>
      </Row>
      </div>
    </Container>
  );
}

export default HouseType;
