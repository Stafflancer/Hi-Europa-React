import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiInputSpinner from "../ApiInputSpinner";

const ApartmentRooms = (props) => {
  const [state, setState] = useState({ error: "", max:11, min:0, step:1, studio:0, salon:0, library:0, mezzanine:0});
  const handleClick = () => {
    if ( state.mezzanine + state.library + state.salon + state.studio > state.max ) {
      setState(state => ({ ...state, error:"error"}));
    } else {
      setState(state => ({ ...state, error:""}));
      props.update("number_rooms", state.mezzanine + state.library + state.salon + state.studio);
      props.nextStep();
    }
  };

  const handleChange = (roomType, stepWay) => {
    if( stepWay == "Inc" && state[roomType] < state.max) {
      setState(state=> ({ ...state, [roomType]:state[roomType] + 1}));
    } else if (stepWay == "Dec" && state[roomType] > state.min) {
      setState(state=> ({ ...state, [roomType]:state[roomType] - 1}));
    }
  }
  return (
    <Container>
      <ApiTitle content="Ok ! Et de combien de pièce est-il composé ?" />
      <div className="api-content">
        <Row>
          <Col md="8" sm="12">
             <h2>Chambre / Studio</h2>
          </Col>
          <Col md="4" sm="12">
          <ApiInputSpinner roomType="studio" value={state.studio} onPlus={() => handleChange("studio", "Inc")} onMinus={() => handleChange("studio", "Dec")} />

          </Col>
        </Row>
        <Row>
          <Col md="8" sm="12">
            <h2>Salon/ Salle à manger/ Bureau/ Bibliothèque</h2>
          </Col>
          <Col md="4" sm="12">
            <ApiInputSpinner roomType="salon" value={state.salon} onPlus={() => handleChange("salon", "Inc")} onMinus={() => handleChange("salon", "Dec")} />
          </Col>
        </Row>
        <Row>
          <Col md="8" sm="12">
            <h2>Bibliothèque / salle de jeux / bureaux</h2>
          </Col>
          <Col md="4" sm="12">
            <ApiInputSpinner roomType="library" value={state.library} onPlus={() => handleChange("library", "Inc")} onMinus={() => handleChange("library", "Dec")} />
          </Col>
        </Row>
        <Row>
          <Col md="8" sm="12">
            <h2>Mézanine d'une hauteur supérieure à 1m80</h2>
          </Col>
          <Col md="4" sm="12">
            <ApiInputSpinner roomType="mezzanine" value={state.mezzanine} onPlus={() => handleChange("mezzanine", "Inc")} onMinus={() => handleChange("mezzanine", "Dec")} />
          </Col>
        </Row>
        <Row>
          <Col md="8" sm="12">
            <h2>Votre logement est composé de </h2>
          </Col>
          <Col md="4" sm="12">
            <ApiInputSpinner roomType="total" value={state.mezzanine + state.library + state.salon + state.studio} />
          </Col>
        </Row>

        {state.error ?
           <Row>
             <Col>
              <ApiError content="L'assurance habitation proposée concerne les appartements de moins de 11 pièces."/>
             </Col>
           </Row>
            : ""
        }
      </div>
      <ApiComment content="<p><span class='bold'>En France, les espaces suivants ne sont pas considerés comme des pièces : </span>cuisine, arrière cuisine, entrée, palier, cage d’escalier, dégagement, couloir, buanderie, dressing, salles d’eau, salles de bain, wc, cellier, cave, grenier, véranda, mezzanines d'une hauteur inférieure à 1 m 80.</p>
      <p><span class='bold'>Si vous habitez un studio de moins de 40m², </span>ne comptez qu'une pièce. Au-delà de cette surface, comptez deux pièces.</p>
      <p><span class='bold'>Pour les cuisines ouvertes et intégrées à une pièce de vie </span>(kitchenette, cuisine américaine…), leur surface est à intégrer à celle de la pièce de vie.</p>
      <p><span class='bold'>L'assurance habitation proposée concerne les appartements de moins de 11 pièces.</span></p>" />
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
      <Button className="api-button pull-right" bsPrefix="api" variant="small" onClick={() => handleClick()} >Étape suivante</Button>
      </Col>
      </Row>
      </div>
    </Container>
  );
}

export default ApartmentRooms;
