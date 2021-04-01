import React, { useState } from "react";
import ApiTitle from "../ApiTitle";

const WhatProblem = (props) => {
  return (
    <div className="api-content-wrap what-problem-step">
      <ApiTitle content="Très bien ! Quel est le problème ? " />
      <ul className="problems-list">
        <li className="problem-item" onClick={props.nextStep}>
          Je n’ai plus d’eau chaude
        </li>
        <li className="problem-item" onClick={props.nextStep}>
          J’ai une fuite d’eau
        </li>
        <li className="problem-item" onClick={props.nextStep}>
          J’ai une canalisation qui est bouchée
        </li>
        <li className="problem-item" onClick={props.nextStep}>
          J’ai un robinet ou élément de plomberie qui est cassé
        </li>
      </ul>
      <div className="get-back-button" onClick={props.previousStep}>
        <span className="fa-chevron-left icon"></span>
        <span className="text">Précedent</span>
      </div>
    </div>
  );
};

export default WhatProblem;
