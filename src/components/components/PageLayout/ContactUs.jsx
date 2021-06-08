import React from "react";
import chatIcon from "assets/img/icons/chat-icon.svg";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  const showChatBox = () => {
    const chatBox = document.querySelector(
      '[title="Button to launch messaging window"]'
    );
    chatBox &&
      chatBox.contentDocument.getElementsByTagName("button")[0].click();
  };
  return (
    <div className="contact-us">
      <p className="heading">{t("Contact Page.promise-phrase")}</p>
      <div className="chat-call-wrap">
        <div className="chat flex-col-center">
          <h4 className="title">{t("Contact Page.chat block - title")}</h4>
          <img src={chatIcon} alt="chat-icon" className="chat-icon" />
          <p className="description">
            {t("Contact Page.chat block - message")}
          </p>
          <div
            className="custom-button_red chat-us-button"
            onClick={showChatBox}
          >
            {t("Contact Page.chat block - CTA")}
          </div>
        </div>
        <div className="telephone flex-col-center">
          <h4 className="title">{t("Contact Page.telephone block - title")}</h4>
          <div className="telephone-info">
            <p className="phone-number">
              {t("Contact Page.telephone block - phone")}
              <span>{t("Contact Page.telephone block - message1")}</span>
            </p>
            <p className="working-time">
              {t("Contact Page.telephone block - message2")}
            </p>
          </div>
          <a href="tel:+33986011497">
            <div className="custom-button_red call-us-button">
              {t("Contact Page.telephone block - CTA")}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
