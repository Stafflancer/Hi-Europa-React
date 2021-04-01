import React from "react";
import avatar from "assets/img/icons/avatar.svg";
const Comments = () => {
  return (
    <div className="comments-wrap">
      <h4 className="title">Ils en parlent</h4>
      <div className="comments-list">
        <div className="comment-block">
          <img src={avatar} alt="avatar" className="avatar" />
          <p className="content">
            “Membres de la communauté chinoise, nous nous reconnaissons dans nos
            valeurs”
          </p>
          <p className="name">Lian</p>
        </div>
        <div className="comment-block">
          <img src={avatar} alt="avatar" className="avatar" />
          <p className="content">
            “Membres de la communauté chinoise, nous nous reconnaissons dans nos
            valeurs”
          </p>
          <p className="name">Lian</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
