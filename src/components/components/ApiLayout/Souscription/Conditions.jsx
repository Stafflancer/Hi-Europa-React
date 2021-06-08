import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Conditions = (props) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    bankNumber: "",
    expirationDate: "",
    secretKey: "",
    monthlyDebit: "",
    iban: "",
    bic: "",
    holder: "",
    bankName: "",
  });

  const handleClick = (e) => {

    props.update("bankNumber", state.bankNumber);
    props.update("creditCardExpire", state.expirationDate);
    props.update("secretKey", state.secretKey);

    props.update("transferDate", state.monthlyDebit);
    
    props.update("iban", state.iban);
    props.update("bic", state.bic);
    props.update("backAccHolder", state.holder);
    props.update("bankName", state.bankName);

    props.nextStep();
  };
  return (
    <Container>
      <div className="api-content conditions">
        <Row>
          <Col>
            <h1>Conditions de paiement</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
            Le paiement de l’assurance habitation que vous venez de souscrire s’effectue mensuellement.
Il est initié <span className="bold">par un paiement en Carte Bleue pour les deux premiers mois</span> qui sont débités ensemble.</p>

<p>Après ce premier paiement, <span className="bold">à partir du 3ème mois, la prime mensuelle sera effectuée par prélèvement automatique.</span></p>

<p>Vos coordonnées bancaires vont vous être demandés et une autorisation de prélèvement (appelée Mandat Sepa) vous sera proposé à signature pour autoriser ce paiement.</p>

<p>La garantie prendra effet une fois que la transaction Carte Bleue aura été traitée et que l’autorisation de prélèvement sera signée.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="section-title">1. Vos informations de carte bleue pour les deux premiers paiement</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
            Vos 2 premiers mois de cotisation sont prélevés par CB pour un total de 2 cotisations mensuelle. Soit <span className="red bold">47,02€ TTC.</span> Ils seront prélèvés immédiatement
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <Form.Label className="api-label">Numéro de votre carte bancaire</Form.Label>
            <Form.Control type="text" name="bankNumber" value={state.bankNumber} onChange={(e) => { setState({ ...state, bankNumber: e.target.value})}} className="api-input" placeholder="Numéro de carte" />
          </Col>
          <Col sm={12} md={3}>
            <Form.Label className="api-label">Date d'expiration</Form.Label>
            <Form.Control type="text" name="expirationDate" value={state.expirationDate} onChange={(e) => { setState({ ...state, expirationDate: e.target.value})}} className="api-input" placeholder="MM/AA" />
          </Col>
          <Col sm={12} md={3}>
            <Form.Label className="api-label">Clef de sécurité</Form.Label>
            <Form.Control type="text" name="secretKey" value={state.secretKey} onChange={(e) => { setState({ ...state, secretKey: e.target.value})}} className="api-input" placeholder="123" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="section-title">2. Vos informations bancaires pour votre prélèvement mensuel à partir du troisième mois</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
            Hi Europa vous propose de choisir la date de prélèvement de votre choix pour votre paiement mensuelle de votre assurance habitation de <span className="red bold">23,51€/mois.</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Vous préférez un prélèvement automatique mensuel le :</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4}>
            <div className={`api-input selectable ${state.monthlyDebit == 5 ? "selected" : ""}`} onClick={() => { setState({ ...state, monthlyDebit:5})}}>
              5 du mois
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <div className={`api-input selectable ${state.monthlyDebit == 10 ? "selected" : ""}`} onClick={() => { setState({ ...state, monthlyDebit:10})}}>
              10 du mois
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <div className={`api-input selectable ${state.monthlyDebit == 15 ? "selected" : ""}`} onClick={() => { setState({ ...state, monthlyDebit:15})}}>
              15 du mois
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Vos informations bancaires :</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">IBAN</Form.Label>
            <Form.Control type="text" name="iban" value={state.iban} onChange={(e) => { setState({ ...state, iban: e.target.value})}} className="api-input" placeholder="Numéro IBAN" />
          </Col>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">BIC</Form.Label>
            <Form.Control type="text" name="bic" value={state.bic} onChange={(e) => { setState({ ...state, bic: e.target.value})}} className="api-input" placeholder="Numéro BIC" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">Titulaire</Form.Label>
            <Form.Control type="text" name="holder" value={state.holder} onChange={(e) => { setState({ ...state, holder: e.target.value})}} className="api-input" placeholder="Nom et prénom du titulaire" />
          </Col>
          <Col xs={12} sm={6}>
            <Form.Label className="api-label">Nom de la banque</Form.Label>
            <Form.Control type="text" name="bankName" value={state.bankName} onChange={(e) => { setState({ ...state, bankName: e.target.value})}} className="api-input" placeholder="Nom de la banque" />
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="m-checkbox">
            <input
              type="checkbox"
              className="m-checkbox__input"
            />
            <label className="m-checkbox__label" >En réglant par carte bancaire et en autorisant le prélèvement automatique, j'accepte que WAKAM, mon assureur, traite mes données bancaires à des fins de gestion de mon contrat, tel que défini dans la Politique de confidentialité et j'accepte les CGU de Stripe, son prestataire de paiement</label>
          </div>
          </Col>
        </Row>
      </div>
      <div className="api-footer">
        <Row>
          <Col>
            <a className="api-back red" href="#" onClick={() => { props.goToStep(8);props.activeMenu("3"); }}>
              <span className="fa-chevron-left icon"></span>
              <span>{t("souscription.previousButton")}</span>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="api-button pull-right" bsPrefix="api" variant="small" onClick={handleClick}>Valider</Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Conditions;
