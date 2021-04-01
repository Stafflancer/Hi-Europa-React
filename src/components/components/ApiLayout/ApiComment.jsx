import React from "react";
import blueMascotQuestionIcon from "assets/img/icons/blue-mascot_question.svg";

const ApiComment = (props) => {
  return (
    <div className="api-comment">
      <img
        src={blueMascotQuestionIcon}
        alt="À propos d’hi Europa"
        className="exclamation-icon"
      />
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </div>
  );
};

export default ApiComment;
