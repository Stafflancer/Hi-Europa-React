import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import OtherResident from "./OtherResident";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import checkIcon from "assets/img/icons/check.svg";

const Summary = (props) => {
  const { t } = useTranslation();
  const handleClick = (e) => {
    props.nextStep();
  };
  return(
    <Container>
      <div className="api-content summary">
        <Row>
          <Col>
            <h1>Récapitulatif</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="section-title">Bien à assurer</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Type</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.type}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Statut</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.status}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Résidence</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.ownerShip}</label>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6}>
            <label>Étage</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.floors}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Surface</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.area}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Pièces</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.rooms}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Adresse</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.address}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Complément</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.additionalAddress}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Code postal</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.postCode}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Ville</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.city}</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="section-title">Bénéficiaires</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="sub-title">Souscripteur</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Titre</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.gender}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Prénom</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.firstName}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Nom</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.lastName}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Date de naissance</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.birthDay}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Email</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.email}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Téléphone mobile</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.mobile}</label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <label>Téléphone fixe</label>
          </Col>
          <Col xs={12} sm={6}>
            <label className="api-label">{props.formData.telephone}</label>
          </Col>
        </Row>
        <OtherResident formData={props.formData}/>
        <Row>
          <Col>
            <h2 className="section-title">Couverture</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="sub-title">Couvertures obligatoires</h2>
          </Col>
        </Row>
        <Row className="justify-content-between m-0">
          <label className="api-label">
          <img
            src={checkIcon}
            alt=""
            className="api-icon"
            />
            Incendies et risques annexes
          </label>
          <a className="btn-popup" variant="link" >Detail</a>
        </Row>
        <Row className="justify-content-between m-0">
          <label className="api-label">
          <img
            src={checkIcon}
            alt=""
            className="api-icon"
            />
            Dégâts des eaux
          </label>
          <a className="btn-popup" variant="link" >Detail</a>
        </Row>
        <Row className="justify-content-between m-0">
          <label className="api-label">
          <img
            src={checkIcon}
            alt=""
            className="api-icon"
            />
            Responsabilité civile
          </label>
          <a className="btn-popup" variant="link" >Detail</a>
        </Row>
        <Row className="justify-content-between m-0">
          <label className="api-label">
          <img
            src={checkIcon}
            alt=""
            className="api-icon"
            />
            Catastrophes naturelles
          </label>
          <a className="btn-popup" variant="link" >Detail</a>
        </Row>
        <Row className="justify-content-between m-0">
          <label className="api-label">
          <img
            src={checkIcon}
            alt=""
            className="api-icon"
            />
            Evènements climatiques
          </label>
          <a className="btn-popup" variant="link" >Detail</a>
        </Row>
        <Row className="justify-content-between m-0">
          <label className="api-label">
          <img
            src={checkIcon}
            alt=""
            className="api-icon"
            />
            Catastrophes technologiques
          </label>
          <a className="btn-popup" variant="link" >Detail</a>
        </Row>
        <Row className="justify-content-between m-0">
          <label className="api-label">
          <img
            src={checkIcon}
            alt=""
            className="api-icon"
            />
            Attentas et actes de terrorisme
          </label>
          <a className="btn-popup" variant="link" >Detail</a>
        </Row>
        <Row className="justify-content-between m-0">
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
          <Col>
            <h2 className="sub-title">Franchise</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>{props.formData.franchise}€</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="sub-title">Valeur de vos biens à assurer</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>{props.formData.opPrice}€</h2>
          </Col>
        </Row>
        <Row className="justify-content-between m-0">
          <label className="api-label">
          <img
            src={checkIcon}
            alt=""
            className="api-icon"
            />
            Option valeur à neuf
          </label>
          <a className="btn-popup" variant="link" >Detail</a>
        </Row>
        <Row>
          <Col>
            <h2 className="sub-title">Valeur de vos objets de valeur à assurer</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>{props.formData.valuablePrice}€</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="sub-title">Protections Supplémentaires</h2>
          </Col>
        </Row>
        <Row className="justify-content-between m-0">
          <label className="api-label">
          <img
            src={checkIcon}
            alt=""
            className="api-icon"
            />
            Pack Bris de glace, sanitaires et dommages electriques
          </label>
          <a className="btn-popup" variant="link" >Detail</a>
        </Row>
        <Row className="justify-content-between m-0">
          <label className="api-label">
          <img
            src={checkIcon}
            alt=""
            className="api-icon"
            />
            Dégâts des Dommages electriques
          </label>
          <a className="btn-popup" variant="link" >Detail</a>
        </Row>
        <Row className="justify-content-between m-0 mb-4">
          <label className="api-label">
          <img
            src={checkIcon}
            alt=""
            className="api-icon"
            />
            Appareils connectés nomades
          </label>
          <a className="btn-popup" variant="link" >Detail</a>
        </Row>
        <Row>
          <Col>
            <a className="btn-popup" variant="link" >Votre devis</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="btn-popup" variant="link" >Conditions Générales</a>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <a className="btn-popup" variant="link" >Informations produit d’assurance</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="api-button" bsPrefix="api" variant="large" onClick={handleClick}>Passer au paiement 23,51€/mois</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="api-back red" href="#" onClick={() => { props.goToStep(7);props.activeMenu("3"); }}>
              <span className="fa-chevron-left icon"></span>
              <span>{t("souscription.previousButton")}</span>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Summary;
