import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import blueMascotNormalIcon from "assets/img/icons/blue-mascot_normal.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Confirm = (props) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "zh_CN" ? "cn" : i18n.language;
  const [state, setState] = useState({ email: ""});
  const handleChange = (e) => {
    setState(state => ({ ...state, email:e.target.value}));
  }
  const handleClick = () => {
    props.update("email", state.email);
  }
  return (
    <Container>
      <div className="api-content error-notice">
        <Row>
          <Col>
            <img
              src={blueMascotNormalIcon}
              alt="À propos d’hi Europa"
              className="exclamation-icon"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Hi Europa a bien enregistré votre commande. Merci pour votre confiance ! </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="mb-5">Votre nouvelle couverture débutera le <span className="red">21/10/2021</span></h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Nous vous adressons un email avec une copie de tous les documents contractuels de votre assurance (Devis, Conditions générales, Conditions particulières, Fiche d'information sur le Produit d'Assurance, Attestations d'assurance)</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Nous restons à votre disposition pour toute question par chat et téléphone.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>En cas d'augmentation de la valeur de votre mobilier, de modification du nombre de personnes vivant à votre foyer, etc, n'oubliez pas de nous le signaler ! Votre assurance s'adaptera ainsi à l'évolution de votre vie.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="mb-4">Merci pour votre confiance</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link
              to={`/${locale}${t("slug./")}`}
            >
              Retour au site
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Confirm;
