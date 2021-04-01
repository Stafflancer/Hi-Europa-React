import React from "react";
import weChatIcon from "assets/img/icons/wechat-icon.svg";
import weiBoIcon from "assets/img/icons/weibo-icon.svg";
import qrCode from "assets/img/icons/qr-code.png";

const JoinUs = () => {
  return (
    <div className="join-us">
      <h4 className="title">Rejoignez-nous !</h4>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <div className="social-network d-flex">
        <div className="wechat">
          <div className="logo-wrap">
            <img src={weChatIcon} alt="Wechat" />
            <span>WeChat</span>
          </div>
          <img src={qrCode} alt="qr-code" className="qr-code"/>
          <p className="account-name">Nom du compte</p>
        </div>
        <div className="weibo">
          <div className="logo-wrap">
            <img src={weiBoIcon} alt="Weibo" />
            <span>Weibo</span>
          </div>
          <img src={qrCode} alt="qr-code" className="qr-code"/>
          <p className="account-name">Nom du compte</p>
        </div>
      </div>
    </div>
  );
}; 

export default JoinUs;
