import React from "react";
import hieuropaLogo from "assets/img/brand/Hieuropa-logo.svg";
import ServiceTag from "components/components/PageLayout/ServiceTag";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <a href="" className="logo">
          <img src={hieuropaLogo} alt="Logo" />
        </a>
        <div className="nav-wrap">
          <ul className="nav-bar">
            <li>
              <a href="">Assurance habitation</a>
            </li>
            <li>
              <a href="">Réparation d’urgence</a>
            </li>
            <li>
              <a href="">Qui sommes-nous</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
          <ServiceTag></ServiceTag>
          <div className="break-line"></div>
          <ul className="terms-of-service">
            <li>
              <a href="">Mentions légales</a>
            </li>
            <li>
              <a href="">Politique de confidentialité</a>
            </li>
            <li>
              <a href="">Politique relative aux cookies</a>
            </li>
          </ul>
        </div>
        <div className="break-line"></div>
        <p className="description">
          HiEuropa est une Société par Actions Simplifiée (SAS), au capital de
          500 000€ et est inscrite au registre du commerce et des sociétés de
          Paris sous le numéro 837 821 149. Opérant sous la marque HiEuropa, la
          société est régie par le Code des Assurances et est immatriculée au
          Registre ORIAS, sous le numéro 18002431.
        </p>
      </footer>
    );
  }
}

export default Footer;
