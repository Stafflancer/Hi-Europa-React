import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ApartmentDetail = (props) => {
  const [state, setState] = useState({
    error: "",
    floors: "",
    area: ""
  });
  const comment = () => {
    return state.floors == "" ? "<p>Si vous n'êtes pas sûr de la surface exacte, une estimation suffira.</p><p>Si vous êtes en colocation, vous devez indiquer la surface totale de votre appartement.</p>" : "<p>Si vous êtes en colocation, vous devez indiquer la surface totale de votre appartement. L'assurance habitation proposée concerne les appartements de moins de 250m2.</p>";
  }
  const handleClick = (e) => {
    if (state.area > 250 ) {
      setState(state => ({ ...state, error:"error"}));
    } else {
      setState(state => ({ ...state, error:""}));
      props.update("floors", state.floors);
      props.update("area", state.area);
      props.nextStep();
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
  return (
    <Container>
      <ApiTitle content="Dites-nous en plus sur cet appartement ..." />
      <div className="api-content">
        <Row>
          <Col xs={12} sm={6}>
          <Form.Label className="api-label">Étage où se situe l’appartement</Form.Label>
          <Form.Control as="select" className={`api-input ${state.floors ? "" : "placeholder"}`} name="floors" value={state.floors} onChange={handleChange}>
            <option value="" disabled>Sélectionner l’étage</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="Dernier étage">Dernier étage</option>
          </Form.Control>
          </Col>
          <Col xs={12} sm={6}>
          <Form.Label className="api-label">Surface habitable en m2</Form.Label>
          <Form.Control type="text" name="area" value={state.area} onChange={handleChange} className="api-input" placeholder="Surface habitable en m2" />
          </Col>
        </Row>
        {state.error ?
           <Row>
             <Col>
              <ApiError content="L'assurance habitation proposée concerne les appartements de moins de 250m2."/>
             </Col>
           </Row>
            : ""
        }
      </div>

      <ApiComment content= {comment()} />
      <div className="api-footer">
      <Row>
        <Col>
          <a className="api-back red" href="#" onClick={props.previousStep}>
            <span className="fa-chevron-left icon"></span>
            <span>Précedent</span>
          </a>
        </Col>
      </Row>
      <Row>
      <Col>
      <Button className="api-button pull-right" bsPrefix="api" variant="small" onClick={handleClick} disabled={!state.floors || !state.area}>Étape suivante</Button>
      </Col>
      </Row>
      </div>
    </Container>
  );
}

export default ApartmentDetail;
