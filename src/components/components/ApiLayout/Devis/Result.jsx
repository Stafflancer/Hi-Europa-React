import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import ApiObject from "../ApiObject";
import checkedIcon from "assets/img/icons/checked.svg";
import xbuttonIcon from "assets/img/icons/x-button.svg";
import checkIcon from "assets/img/icons/check.svg";
import arrowDownIcon from "assets/img/icons/arrow_down.svg";
import blueMascotQuestionIcon from "assets/img/icons/blue-mascot_question.svg";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import handler from "./Slider/handler";
import Marker from "./Slider/marker";

const Result = (props) => {
 //console.log(props);
 const marks = {
 2000: '',
 5000: <Marker value="5000€" />,
 10000: <Marker value="10000€" />,
 15000: <Marker value="15000€" />,
 20000: <Marker value="20000€" />,
 25000: <Marker value="25000€" />,
 30000: <Marker value="30000€" />,
 35000: <Marker value="35000€" />,
 40000: <Marker value="40000€" />,
 43000: ''
 };

const handle = (props) => {
  //return "Value";
  console.log(props);
}
  return (
    <div className="Api-page">
      <Container className="result">
        <div className="api-title">
          <h1 className="bold">
            Votre assurance habitation
          </h1>
        </div>
        <div className="api-content">
          <Row className="section section-info">
            <Col sm={12} md={6} lg={6}>
               <Row>
                 <Col>
                   <div className="api-title">
                     <h1>Vos informations</h1>
                   </div>
                 </Col>
               </Row>
               <Row>
                 <Col xs={6} sm={6}>
                   <label>Code postal</label>
                 </Col>
                 <Col xs={6} sm={6}>
                   <label className="api-label">{props.formData.postcode}</label>
                 </Col>
               </Row>
               <Row>
                 <Col xs={6} sm={6}>
                   <label>Type de logement</label>
                 </Col>
                 <Col xs={6} sm={6}>
                   <label className="api-label">{props.formData.housetype}</label>
                 </Col>
               </Row>
               <Row>
                 <Col xs={6} sm={6}>
                   <label>Statut</label>
                 </Col>
                 <Col xs={6} sm={6}>
                   <label className="api-label">{props.formData.ownership}</label>
                 </Col>
               </Row>
               <Row>
                 <Col xs={6} sm={6}>
                   <label>Résidence</label>
                 </Col>
                 <Col xs={6} sm={6}>
                   <label className="api-label">{props.formData.residenceorder}</label>
                 </Col>
               </Row>
               <Row>
                 <Col xs={6} sm={6}>
                   <label>Étage</label>
                 </Col>
                 <Col xs={6} sm={6}>
                   <label className="api-label">{props.formData.floors}</label>
                 </Col>
               </Row>
               <Row>
                 <Col xs={6} sm={6}>
                   <label>Surface</label>
                 </Col>
                 <Col xs={6} sm={6}>
                   <label className="api-label">{props.formData.area} m2</label>
                 </Col>
               </Row>
               <Row>
                 <Col xs={6} sm={6}>
                   <label>Nombre de pièces</label>
                 </Col>
                 <Col xs={6} sm={6}>
                   <label className="api-label">{props.formData.number_rooms}</label>
                 </Col>
               </Row>
               <Row>
                 <Col xs={6} sm={6}>
                   <label>Nom</label>
                 </Col>
                 <Col xs={6} sm={6}>
                   <label className="api-label">{props.formData.last_name}</label>
                 </Col>
               </Row>
               <Row>
                 <Col xs={6} sm={6}>
                   <label>Prénom</label>
                 </Col>
                 <Col xs={6} sm={6}>
                   <label className="api-label">{props.formData.first_name}</label>
                 </Col>
               </Row>
               <Row>
                 <Col xs={6} sm={6}>
                   <label>Email</label>
                 </Col>
                 <Col xs={6} sm={6}>
                   <label className="api-label">{props.formData.email}</label>
                 </Col>
               </Row>
               <Row>
                 <Col>
                   <Button className="btn-popup" variant="link">Modifier</Button>
                 </Col>
               </Row>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Card className="block-detail">
                <Card.Body>
                  <Row>
                    <Col className="align-center">
                       <label className="api-label price-label">
                         <span>Garanties</span>
                         <span>essentielles</span>
                       </label>
                       <span className="inline-block">
                         <h1 className="price red">14</h1>
                       </span>
                       <span className="inline-block">
                         <label className="api-label red">,95€</label>
                         <label className="api-label">/mois</label>
                       </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="align-center">
                      <label>Vous pouvez être couvert dès demain</label>
                    </Col>
                  </Row>
                  <Row className="justify-content-between">
                  <label className="api-label">
                  <img
                    src={checkIcon}
                    alt=""
                    className="api-icon"
                  />
                    Incendies et risques annexes
                  </label>
                  <a className="btn-popup" variant="link">Detail</a>
                  </Row>
                  <Row className="justify-content-between">
                  <label className="api-label">
                  <img
                    src={checkIcon}
                    alt=""
                    className="api-icon"
                  />
                    Dégâts des eaux
                  </label>
                  <a className="btn-popup" variant="link">Detail</a>
                  </Row>
                  <Row className="justify-content-between">
                  <label className="api-label">
                  <img
                    src={checkIcon}
                    alt=""
                    className="api-icon"
                  />
                    Responsabilité civile
                  </label>
                  <a className="btn-popup" variant="link">Detail</a>
                  </Row>
                  <Row className="justify-content-between">
                  <label className="api-label">
                  <img
                    src={checkIcon}
                    alt=""
                    className="api-icon"
                  />
                    Catastrophes naturelles
                  </label>
                  <a className="btn-popup" variant="link">Detail</a>
                  </Row>
                  <Row className="justify-content-between">
                  <label className="api-label">
                  <img
                    src={checkIcon}
                    alt=""
                    className="api-icon"
                  />
                    Evènements climatiques
                  </label>
                  <a className="btn-popup" variant="link">Detail</a>
                  </Row>
                  <Row className="justify-content-between">
                  <label className="api-label">
                  <img
                    src={checkIcon}
                    alt=""
                    className="api-icon"
                  />
                    Catastrophes technologiques
                  </label>
                  <a className="btn-popup" variant="link">Detail</a>
                  </Row>
                  <Row className="justify-content-between">
                  <label className="api-label">
                  <img
                    src={checkIcon}
                    alt=""
                    className="api-icon"
                  />
                    Attentas et actes de terrorisme
                  </label>
                  <a className="btn-popup" variant="link">Detail</a>
                  </Row>
                  <Row className="justify-content-between">
                  <label className="api-label">
                  <img
                    src={checkIcon}
                    alt=""
                    className="api-icon"
                  />
                    Défense pénale et recours
                  </label>
                  <a className="btn-popup" variant="link">Detail</a>
                  </Row>
                  <Row>
                    <Col className="align-center">
                      <label>Pour une franchise de 300€ et un capital moblier de 6 000€</label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button className="api-button" bsPrefix="api" variant="large">Personnaliser ma couverture</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="section section-arrow">
            <Col className="align-center">
            <img
              src={arrowDownIcon}
              alt=""
              className="api-icon"
            />
            </Col>
          </Row>
          <Row className="section section-detail">
            <Col sm={12} md={8} lg={9}>
            <Row>
              <Col>
                <div className="api-title">
                  <h1>Personnalisez votre couverture</h1>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className="detail-title">
                  1. Choisissez votre franchise
                </h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>C'est la somme qui restera à votre charge en cas de sinistre. Concrètement, pour un dommage couvert d'une valeur de 1 000 € avec une franchise de 75 €, l'assurance vous remboursera 925 €.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control as="select" className={`api-input`}>
                  <option value="300">300€</option>
                  <option value="600">600€</option>
                </Form.Control>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className="detail-title">
                  2. Quelle est la valeur de vos biens à assurer ?
                </h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Pour définir la valeur de vos biens (meubles, électroménager, vêtements, etc), recensez tous ceux qui sont situés à l'intérieur de votre appartement, sauf les objets de valeur qui sont couverts par une garantie spécifique. Ce montant définit le maximum de remboursement de vos biens en cas d'incendie, de dégats des eaux, de catastrophes naturelles et technologiques etc.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                  <Slider className="api-slider" min={2000} max={43000} marks={marks} defaultValue={20000} step={5000} railStyle={{
            height: 6,
          }}
          handle={handler}
          handleStyle={{
            height: 24,
            width: 24,
            backgroundColor: "white",
            textColor: "#C62D54",
            border: "2px solid #C62D54",
            marginTop: -40,
          }}
          trackStyle={{
            background: "#C62D54",
            height: 6
          }}
          dotStyle={{
            display:"none"
          }}
           />
              </Col>
            </Row>
            <Row>
              <Col className="option-box">
                <Row className="option-title">
                   <Col xs= {12} md={7}>
                     <h2>Option : Valeur à neuf des objets de moins de 2 ans</h2>
                   </Col>
                   <Col xs={12} md={5}>
                     <span className="option-price red">
                     +2,40€/mois
                     </span>
                     <BootstrapSwitchButton checked={false} onlabel='Admin User' offlabel='Regular User' style="borderRadius: 50%"/>

                   </Col>
                </Row>
              </Col>
            </Row>
            </Col>
            <Col md={4} lg={3} className="api-insurance">
              <Row>
                 <Col>
                   <h2 className="api-title">
                      Votre assurance habitation
                   </h2>
                 </Col>
              </Row>
              <Row>
                 <Col>
                   <Card className="insurrance-box">
                      <Card.Body>
                        <Row>
                          <Col>
                             <label className="api-label">
                               Total
                             </label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                             <span className="inline-block">
                               <h1 className="price red">14</h1>
                             </span>
                             <span className="inline-block">
                               <label className="api-label red">,95€</label>
                               <label className="api-label">/mois</label>
                             </span>
                          </Col>
                        </Row>
                        <Row className="justify-content-between">
                          <label className="api-label">
                            L’essentiel
                          </label>
                          <label className="api-label">
                            14,95€
                          </label>
                        </Row>
                        <Row className="justify-content-between">
                          <label className="api-label">
                            Options
                          </label>
                          <label className="api-label">
                            00,00€
                          </label>
                        </Row>
                        <Row>
                          <Col>
                            <Button className="api-button" bsPrefix="api" variant="large">Souscrire</Button>
                          </Col>
                        </Row>
                      </Card.Body>
                   </Card>
                 </Col>
              </Row>
            </Col>
          </Row>

        </div>
        <div className="api-footer">
        <Row>
          <Col>
            <a className="api-back red" href="#" >
              <span className="fa-chevron-left icon"></span>
              <span>Précedent</span>
            </a>
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  );
}

export default Result;
