import React from "react";

const ApiObject = (props) => {

  return (
    <div className="api-object" onClick={props.onClick}>
      <img
        src={props.image}
        alt="À propos d’hi Europa"
        className="api-image"
      />
      <h2>{props.content}</h2>
    </div>
  );
};

export default ApiObject;
