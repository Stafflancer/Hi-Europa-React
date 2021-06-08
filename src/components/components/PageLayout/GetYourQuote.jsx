import React, { useState } from "react";
import CustomLink from "components/components/CustomLink";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userInfoActions } from "redux/actions/userInfoActions";

const GetYourQuote = (props) => {
  const { t } = useTranslation();
  const [postalCode, setpostalCode] = useState("");
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    setpostalCode(value);
  };
  const storePostalCode = () => {
    props.updateUserInfo({ postCode: postalCode });
  };
  return (
    <div className="get-your-quote">
      <p className="intro-sentence">{props.message}</p>
      <div className="button-group">
        <input
          type="text"
          className="my-postal-code"
          placeholder={t("my post code")}
          value={postalCode}
          onInput={handleChange}
          maxLength="5"
          disabled={props.disabled}
        />
        <CustomLink
          to={props.to}
          className={`custom-button_red ${props.disabled ? "disabled" : ""}`}
          onClick={storePostalCode}
        >
          {props.CTA}
        </CustomLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfoReducer.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: bindActionCreators(userInfoActions.updateUserInfo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetYourQuote);
