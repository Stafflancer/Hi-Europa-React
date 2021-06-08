import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import ApiComment from "../ApiComment";
import ApiError from "../ApiError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import Promise from 'bluebird';
import moment from "moment";

const Last = (props) => {
  const { t } = useTranslation();
  const handleClick = (e) => {
    // --- Prepare for residents save
    var prospectType = props.userInfo.prospectType.toLowerCase().split(' ').join('_').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var formData1  = null;

    if(Array.isArray(props.userInfo.otherResident) && props.userInfo.otherResident.length)
    {
      //var formData1 = JSON.stringify(props.userInfo.otherResident);
      var formData1 = {"cohabitants": [ { "birthday": "12/12/1990", "first_name": "Aaa", "last_name": "Aaa", "title": "madame", "status": "autre" }, { "birthday": "12/12/1990", "first_name": "Aaa", "last_name": "Aaa", "title": "madame", "status": "autre" } ]};

      if (props.userInfo.residentStatus === "0" && ["locataire", "proprietaire"].indexOf(prospectType) )
      {
        formData1.cohabitants.push({"birthday": "12/12/1990", "first_name": "Aaa", "last_name": "Aaa", "title": "madame", "status": "proprietaire" });
      }
    }
    // --- (Prepare for residents save)

    const formData3 = new FormData();
    formData3.append('postal_code', props.userInfo.postCode);
    formData3.append('exact_address', props.userInfo.exactAddress);
    formData3.append('additional_address', props.userInfo.additionalAddress);
    formData3.append('city', props.userInfo.city);

    if (props.userInfo.dependence)
    {
      formData3.append('dependance_postal_code', props.userInfo.dependency_postCode);
      formData3.append('dependance_adresse', props.userInfo.dependency_exactAddress);
      formData3.append('dependance_comp_adresse', props.userInfo.dependency_additionalAddress);
      formData3.append('dependance_city', props.userInfo.dependency_city);
    }

    formData3.append('price_per_month', props.userInfo.monthlyCost);
    formData3.append('contract_start_date', moment( props.userInfo.newInsurStartDate ).format("DD/MM/YYYY") );
    formData3.append('contract_expiration_date', moment( props.userInfo.newInsurExpireDate ).format("DD/MM/YYYY") );
    formData3.append('transfer_date', props.userInfo.transferDate);

    formData3.append('user_id', props.userInfo.userId);
    formData3.append('quotation_id', props.userInfo.quoteId);

    Promise.coroutine(function * () {
      if (props.userInfo.insuranceStatus === "yes")
      {
        const formData2 = new FormData();
        formData2.append('moving_out', (props.userInfo.moveStatus === "move") ? 1 : 0);
        formData2.append('insured_firstname', props.userInfo.prevInsurFirstName);
        formData2.append('insured_surname', props.userInfo.prevInsurLastName);
        formData2.append('subscription_date', moment( props.userInfo.prevInsurExpireDate ).format("DD/MM/YYYY") );
        formData2.append('insurance_company_name', props.userInfo.insurerName);
        formData2.append('previous_contract', props.userInfo.prevInsurContractNum);
        formData2.append('user_id', props.userInfo.userId);

        var res2 = yield axios.post(process.env.REACT_APP_PROD_API_BASE_URL + '/api/web/resiliation', formData2);
        var resiliation = res2.data.data;
        formData3.append('resiliation_id', resiliation.id);
      }

      var res3 = yield axios.post(process.env.REACT_APP_PROD_API_BASE_URL + '/api/web/contract', formData3);
      var contract = res3.data.data;

      if (props.userInfo.insuranceStatus === "yes")
      {
        var formData4 = new URLSearchParams();
        formData4.append('contract_id', contract.id);
        var res4 = yield axios.put(process.env.REACT_APP_PROD_API_BASE_URL + '/api/web/resiliation/' + resiliation.id, formData4);
      }

      // --- Prepare for residents save
      if (formData1)
      {
        for(let i = 0; i < formData1.cohabitants.length; i++)
        {
          formData1.cohabitants[i].contract_id = contract.id;
        }

        formData1 = JSON.stringify(formData1);

        var res1 = yield axios.post(process.env.REACT_APP_PROD_API_BASE_URL + '/api/web/resident', formData1, { headers: {'Content-Type': 'application/json'} });
        console.dir(res1);
      }
      // --- (Prepare for residents save)
      
    })().catch(function(errs) {
      console.log(errs);
    });

    //return;

    props.nextStep();
  };
  return (
    <Container>
      <div className="api-content conditions">
        <Row className="mb-4">
          <Col>
            <h1>Dernière étape avant d’être assuré, la signature de vos documents</h1>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <p>Pour finaliser votre souscription, et vous envoyer vos attestations d’assurance, il ne vous reste plus qu'à lire et signer les documents clefs.</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <p>Lire</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p><span className="mr-3">-</span>Conditions générales</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p><span className="mr-3">-</span>Fiche d'information sur le Produit d'Assurance</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p><span className="mr-3">-</span>Devis</p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <p><span className="mr-3">-</span>Conditions particulières</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <p>Signer Devis</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p><span className="mr-3">-</span>Conditions particulières</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p><span className="mr-3">-</span>Devis</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p><span className="mr-3">-</span>Mandat Sepa</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p><span className="mr-3">-</span>Mandat Résiliation</p>
          </Col>
        </Row>
      </div>
      <div className="api-footer">
        <Row>
          <Col>
            <a className="api-back red" href="#" onClick={() => { props.goToStep(9);props.activeMenu("3"); }}>
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

export default Last;
