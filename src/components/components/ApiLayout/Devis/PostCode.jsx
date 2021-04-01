import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PostCode = (props) => {
  const [state, setState] = useState({ postcode:"" });
  const handleChange = (e) => {

    setState(state => ({ ...state, postcode:e.target.value}));
  }
  const handleClick = () => {
    props.update("postcode", state.postcode);
    props.nextStep();
  }
  return (
    <Container>
      <ApiTitle content="Personnalisons votre couverture, quel est votre code postal ?" />
      <div className="api-content">
        <Row>
          <Col>
            <Form.Label className="api-label">Code Postal</Form.Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control type="text" className="api-input" name="postcode" onChange={handleChange}/>
          </Col>
          <Col>
          <Button className="api-button" bsPrefix="api" variant="large" onClick={handleClick}>C’est parti ! </Button>
          </Col>
        </Row>
      </div>
      <ApiComment content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam." />
    </Container>
  );
}

export default PostCode;
