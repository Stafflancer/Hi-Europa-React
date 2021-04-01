import React from "react";
import exclamationMark from "assets/img/icons/exclamation-mark.svg";
import hieuropaLogo from "assets/img/brand/Hieuropa-logo.svg";


const GetMoreInfo = () => {
  return (
    <div className="get-more-info">
      <div className="chat-with-us flex-col-center">
        <h4 className="title">Besoin de nous parler ?</h4>
        <img src={exclamationMark} alt="exclamation mark icon" />
        <div className="content">
          Hi Europa est un service 100% en ligne. Si vous avez des questions,
          n'hésitez pas à nous contacter directement par chat.
        </div>
        <a href="" className="custom-button_white">
          Contacter-nous
        </a>
      </div>
      <div className="know-more-about-us flex-col-center">
        <h4 className="title">Aider ceux qui viennent de loin</h4>
        <img src={hieuropaLogo} alt="logo" />
        <div className="content">
          Nous pensons que l’attention sincère portée à l’autre permet un monde
          où chacun trouve sa place.
        </div>
        <a href="" className="custom-button_red">
          En savoir plus sur nous
        </a>
      </div>
    </div>
  );
};

export default GetMoreInfo;