import React from "react";
import blueMascotNormalIcon from "assets/img/icons/blue-mascot_normal.svg";

const ApiTitle = (props) => {
  return (
    <div className="api-title">
      <img
        src={blueMascotNormalIcon}
        alt="À propos d’hi Europa"
        className="exclamation-icon"
      />
      <h2>{props.content}</h2>
    </div>
  );
};

export default ApiTitle;
