import React from "react";

const GetYourQuote = () => {
  return (
    <div className="get-your-quote">
      <p className="intro-sentence">
        Personnalisez en ligne votre prise en charge et obtenée immédiatement
        votre devis.
      </p>
      <div className="button-group">
        <input type="text" className="my-postal-code" placeholder="Mon code postal"/>
        <div className="custom-button_red">Faire venir un expert</div>
      </div>
    </div>
  );
};

export default GetYourQuote;
