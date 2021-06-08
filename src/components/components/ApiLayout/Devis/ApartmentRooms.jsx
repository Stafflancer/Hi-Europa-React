import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ApiInputSpinner from "../ApiInputSpinner";
import { useTranslation } from "react-i18next";

const ApartmentRooms = (props) => {
  const [state, setState] = useState({ error: "", max:10, min:0, step:1, studio:0, salon:0, library:0, mezzanine:0});
  const { t } = useTranslation();
  const handleClick = () => {
    if ( state.mezzanine + state.library + state.salon + state.studio > state.max ) {
      setState(state => ({ ...state, error:"error"}));
    } else {
      setState(state => ({ ...state, error:""}));
      let rooms = state.mezzanine + state.library + state.salon + state.studio;
      props.update("rooms", rooms);
      switch (rooms) {
        case 1:
          props.update("capital", 12000);
          break;
        case 2:
          props.update("capital", 18000);
          break;
        case 3:
          props.update("capital", 30000);
          break;
        case 4:
          props.update("capital", 41000);
          break;
        case 5:
          props.update("capital", 51000);
          break;
        case 6:
          props.update("capital", 61000);
          break;
        case 7:
          props.update("capital", 68000);
          break;
        case 8:
          props.update("capital", 75000);
          break;
        case 9:
          props.update("capital", 85000);
          break;
        case 10:
          props.update("capital", 96000);
          break;
      }
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
      <ApiTitle content={t("devis.apartmentRooms.Title")} />
      <div className="api-content">
        <Row>
          <Col md="8" sm="12">
             <h2>{t("devis.apartmentRooms.Text2")}</h2>
          </Col>
          <Col md="4" sm="12">
          <ApiInputSpinner roomType="studio" value={state.studio} onPlus={() => handleChange("studio", "Inc")} onMinus={() => handleChange("studio", "Dec")} />

          </Col>
        </Row>
        <Row>
          <Col md="8" sm="12">
            <h2>{t("devis.apartmentRooms.Text3")}</h2>
          </Col>
          <Col md="4" sm="12">
            <ApiInputSpinner roomType="salon" value={state.salon} onPlus={() => handleChange("salon", "Inc")} onMinus={() => handleChange("salon", "Dec")} />
          </Col>
        </Row>
        <Row>
          <Col md="8" sm="12">
            <h2>{t("devis.apartmentRooms.Text4")}</h2>
          </Col>
          <Col md="4" sm="12">
            <ApiInputSpinner roomType="library" value={state.library} onPlus={() => handleChange("library", "Inc")} onMinus={() => handleChange("library", "Dec")} />
          </Col>
        </Row>
        <Row>
          <Col md="8" sm="12">
            <h2>{t("devis.apartmentRooms.Text5")}</h2>
          </Col>
          <Col md="4" sm="12">
            <ApiInputSpinner roomType="mezzanine" value={state.mezzanine} onPlus={() => handleChange("mezzanine", "Inc")} onMinus={() => handleChange("mezzanine", "Dec")} />
          </Col>
        </Row>
        <Row>
          <Col md="8" sm="12">
            <h2>{t("devis.apartmentRooms.Result")}</h2>
          </Col>
          <Col md="4" sm="12">
            <ApiInputSpinner roomType="total" value={state.mezzanine + state.library + state.salon + state.studio} />
          </Col>
        </Row>

        {state.error ?
           <Row>
             <Col>
              <ApiError content={t("devis.apartmentRooms.Error")}/>
             </Col>
           </Row>
            : ""
        }
      </div>
      <ApiComment content={t("devis.apartmentRooms.Comment")} />
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
      <Button className="api-button pull-right" bsPrefix="api" variant="small" onClick={() => handleClick()} disabled={state.mezzanine + state.library + state.salon + state.studio == 0} >{t("devis.next-button")}</Button>
      </Col>
      </Row>
      </div>
    </Container>
  );
}

export default ApartmentRooms;
