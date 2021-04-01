import React, { useState } from "react";
import ApiTitle from "../ApiTitle";

const MoreDetails = (props) => {
  return (
    <div className="api-content-wrap more-details-step">
      <ApiTitle content="Bien noté, pouvez-vous préciser ?" />
      <ul className="problems-list">
        <li className="problem-item" onClick={props.nextStep}>
          Chauffe-eau électrique
        </li>
        <li className="problem-item" onClick={props.nextStep}>
          Chauffe-eau à gaz
        </li>
      </ul>
      <div className="get-back-button" onClick={props.previousStep}>
        <span className="fa-chevron-left icon"></span>
        <span className="text">Précedent</span>
      </div>
    </div>
  );
};

export default MoreDetails;
