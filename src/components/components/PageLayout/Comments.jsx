import React from "react";
import avatar from "assets/img/icons/avatar.svg";
import avatar2 from "assets/img/icons/avatar-2.svg";
import { useTranslation } from "react-i18next";

const Comments = () => {
  const { t } = useTranslation();
  return (
    <div className="comments-wrap">
      <h4 className="title">{t("They are talking - title")}</h4>
      <div className="comments-list">
        <div className="comment-block">
          <img src={avatar} alt="avatar" className="avatar" />
          <p className="content">{t("Testimonial 1")}</p>
          <p className="name">{t("Signature 1")}</p>
        </div>
        <div className="comment-block">
          <img src={avatar2} alt="avatar" className="avatar" />
          <p className="content">{t("Testimonial 2")}</p>
          <p className="name">{t("Signature 2")}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
