import React from "react";

const ApiError = (props) => {
  return (
    <div className="api-error">
      <p>{props.content}</p>
    </div>
  );
};

export default ApiError;
