import React from "react";
import weChatIcon from "assets/img/icons/wechat-icon.svg";
import weiBoIcon from "assets/img/icons/weibo-icon.svg";
import wechatQRCode from "assets/img/icons/WeChat-QR-code.jpeg";
import weiboQRCode from "assets/img/icons/Weibo-QR-code.png";
import { useTranslation } from "react-i18next";

const JoinUs = () => {
  const { t } = useTranslation();
  return (
    <div className="join-us">
      <h4 className="title">{t("Join us - title")}</h4>
      <p className="description">{t("Join us - message")}</p>
      <div className="social-network d-flex">
        <div className="wechat">
          <div className="logo-wrap">
            <img src={weChatIcon} alt="Wechat" />
            <span>{t("wechat")}</span>
          </div>
          <img src={wechatQRCode} alt="wechat-qr-code" className="qr-code" />
          <p className="account-name">{t("hieuropa")}</p>
        </div>
        <div className="weibo">
          <div className="logo-wrap">
            <img src={weiBoIcon} alt="Weibo" />
            <span>{t("weibo")}</span>
          </div>
          <img src={weiboQRCode} alt="weibo-qr-code" className="qr-code" />
          <p className="account-name">{t("hieuropa")}</p>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
