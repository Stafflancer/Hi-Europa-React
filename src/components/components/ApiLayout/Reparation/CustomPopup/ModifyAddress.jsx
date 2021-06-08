import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import * as popupActions from "redux/actions/popupActions";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as inputPattern from "utilities/inputPattern";

const { forwardRef, useImperativeHandle } = React;

const ModifyAddress = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    userInfo: { address, otherAddress, postCode, city },
    popupActions,
  } = props;
  useImperativeHandle(ref, () => ({
    _closePopup() {
      doNotSaveInfo();
    },
  }));
  const doNotSaveInfo = () => {
    reset({ address, otherAddress, city });
    popupActions.closePopup();
  };
  const onSubmit = (data) => {
    props.updateUserInfo({
      address: data.address,
      otherAddress: data.otherAddress,
      city: data.city,
    });
    popupActions.closePopup();
  };
  const hasError = Object.keys(errors).length !== 0;
  return (
    <div className="modify-address-popup">
      <h3 className="title">{t("Adresse de l’intervention")}</h3>
      <form className="popup-content" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrap">
          <label>{t("Adresse (numéro et nom de la rue)")}</label>
          <input
            type="text"
            defaultValue={address}
            className="custom-input"
            {...register("address", {
              required: true,
              pattern: inputPattern.address,
            })}
          />
          {errors.address && (
            <p className="error-message">This field is required</p>
          )}
        </div>
        <div className="input-wrap">
          <label>{t("Complément d'adresse (batiment, porte...)")}</label>
          <input
            type="text"
            defaultValue={otherAddress}
            className="custom-input"
            {...register("otherAddress", {
              pattern: inputPattern.address,
            })}
          />
          {errors.otherAddress && (
            <p className="error-message">Only accept Latin alphabet</p>
          )}
        </div>
        <p className="note">{t("address note")}</p>
        <div className="input-wrap">
          <label>{t("postCode")}</label>
          <input
            type="text"
            name="postalCode"
            className="custom-input"
            value={postCode}
            disabled
          />
        </div>
        <div className="input-wrap">
          <label>{t("Ville")}</label>
          <input
            type="text"
            defaultValue={city}
            className="custom-input"
            {...register("city", { pattern: inputPattern.city })}
          />
          {errors.city && (
            <p className="error-message">This field is required</p>
          )}
        </div>
        <div className="bottom-group-button">
          <button
            className="api-custom-button_white"
            onClick={() => doNotSaveInfo()}
          >
            {t("Cancel")}
          </button>
          <button
            className={`api-custom-button_red ${hasError ? "disable" : ""}`}
            // onClick={() => saveInfo()}
          >
            {t("Modifier")}
          </button>
        </div>
      </form>
    </div>
  );
});

const mapStateToProps = (state) => ({
  userInfo: state.userInfoReducer.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: bindActionCreators(userInfoActions.updateUserInfo, dispatch),
  popupActions: bindActionCreators(popupActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(ModifyAddress);
