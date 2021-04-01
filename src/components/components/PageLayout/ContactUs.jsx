import React from "react";
import chatIcon from "assets/img/icons/chat-icon.svg";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <p className="heading">
        Vous souhaitez en savoir plus ou vous avez des questions au sujet de
        l’un de nos services, notre équipe franco-chinoise est prête à vous
        répondre !
      </p>
      <div className="flex-wrap">
        <div className="chat flex-col-center">
          <h4 className="title">Par chat</h4>
          <img src={chatIcon} alt="chat-icon" className="chat-icon" />
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
          <div className="custom-button_red chat-us-button">Contactez-nous</div>
        </div>
        <div className="telephone flex-col-center">
          <h4 className="title">Par téléphone</h4>
          <div className="telephone-info">
            <p className="phone-number">0800 909 909</p>
            <p className="working-time">
              Du lundi au samedi,
              <br /> de 9h30 à 17h00
            </p>
          </div>
          <div className="custom-button_red call-us-button">Nous téléphonner</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
