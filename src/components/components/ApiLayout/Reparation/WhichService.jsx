import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import HeaterIcon from "assets/img/icons/heater.svg";
import LightingIcon from "assets/img/icons/lighting.svg";
import PlumbingIcon from "assets/img/icons/plumbing.svg";
import WindowsIcon from "assets/img/icons/windows.svg";
import KeyIcon from "assets/img/icons/key2.svg";

const WhichService = (props) => {
  return (
    <div className="api-content-wrap which-service-step">
      <ApiTitle content="Comment pouvons-nous vous aider ?" />
      <ul className="services-list">
        <li className="service-item" onClick={props.nextStep}>
          <img
            src={HeaterIcon}
            alt="service-icon"
            className="service-item__icon"
          />
          <p className="service-item__name">Chauffage</p>
        </li>
        <li className="service-item" onClick={props.nextStep}>
          <img
            src={LightingIcon}
            alt="service-icon"
            className="service-item__icon"
          />
          <p className="service-item__name">Éléctricité</p>
        </li>
        <li className="service-item" onClick={props.nextStep}>
          <img
            src={PlumbingIcon}
            alt="service-icon"
            className="service-item__icon"
          />
          <p className="service-item__name">Plomberie</p>
        </li>
        <li className="service-item" onClick={props.nextStep}>
          <img
            src={WindowsIcon}
            alt="service-icon"
            className="service-item__icon"
          />
          <p className="service-item__name">Portes ou fenêtres</p>
        </li>
        <li className="service-item" onClick={props.nextStep}>
          <img
            src={KeyIcon}
            alt="service-icon"
            className="service-item__icon"
          />
          <p className="service-item__name">Serrurerie</p>
        </li>
      </ul>
    </div>
  );
};

export default WhichService;
