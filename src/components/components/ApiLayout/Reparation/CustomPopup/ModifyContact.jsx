import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import * as popupActions from "redux/actions/popupActions";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as inputPattern from "utilities/inputPattern";

const { forwardRef, useImperativeHandle } = React;

const ModifyContact = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    userInfo: {
      gender,
      firstName,
      lastName,
      phoneNumber,
      otherGender,
      otherFirstName,
      otherLastName,
      otherPhone,
      whoWillBeThere,
    },
    popupActions,
  } = props;
  let _gender = gender,
    _firstName = firstName,
    _lastName = lastName,
    _phoneNumber = phoneNumber;
  if (whoWillBeThere === "1") {
    _gender = otherGender;
    _firstName = otherFirstName;
    _lastName = otherLastName;
    _phoneNumber = otherPhone;
  }
  useImperativeHandle(ref, () => ({
    _closePopup() {
      doNotSaveInfo();
    },
  }));
  const doNotSaveInfo = () => {
    reset({
      gender: _gender,
      firstName: _firstName,
      lastName: _lastName,
      phoneNumber: _phoneNumber,
    });
    popupActions.closePopup();
  };
  const onSubmit = (data) => {
    if (whoWillBeThere === "0") {
      props.updateUserInfo({
        gender: data.gender,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        modifiedContact: true,
      });
    } else {
      props.updateUserInfo({
        otherGender: data.gender,
        otherFirstName: data.firstName,
        otherLastName: data.lastName,
        otherPhone: data.phoneNumber,
        modifiedContact: true,
      });
    }
    popupActions.closePopup();
  };
  const hasError = Object.keys(errors).length !== 0;
  return (
    <div className="modify-contact-popup">
      <h3 className="title">{t("Contact sur place lors de l’intervention")}</h3>
      <form className="popup-content" onSubmit={handleSubmit(onSubmit)}>
        <div className="row gender">
          <div className="col-6 d-flex">
            <input
              type="radio"
              value="Mme"
              name="gender"
              id="female-m"
              defaultChecked={_gender === "Mme" ? true : false}
              className="custom-radio"
              {...register("gender")}
            />
            <label htmlFor="female-m">{t("Madame")}</label>
          </div>
          <div className="col-6 d-flex">
            <input
              type="radio"
              value="Mr"
              name="gender"
              id="male-m"
              defaultChecked={_gender === "Mr" ? true : false}
              className="custom-radio"
              {...register("gender")}
            />
            <label htmlFor="male-m">{t("Monsieur")}</label>
          </div>
        </div>
        <div className="input-wrap">
          <label>{t("Prénom")}</label>
          <input
            type="text"
            name="firstName"
            className="custom-input"
            defaultValue={_firstName}
            {...register("firstName", {
              required: true,
              pattern: inputPattern.name,
            })}
          />
          {errors.firstName && (
            <p className="error-message">This field is required</p>
          )}
        </div>
        <div className="input-wrap">
          <label>{t("Nom")}</label>
          <input
            type="text"
            name="lastName"
            className="custom-input"
            defaultValue={_lastName}
            {...register("lastName", {
              required: true,
              pattern: inputPattern.name,
            })}
          />
          {errors.lastName && (
            <p className="error-message">This field is required</p>
          )}
        </div>
        <div className="input-wrap">
          <label>{t("Numéro de téléphone")}</label>
          <input
            type="tel"
            name="phoneNumber"
            className="custom-input"
            defaultValue={_phoneNumber}
            {...register("phoneNumber", {
              required: true,
              pattern: inputPattern.phone,
            })}
          ></input>
          {errors.phoneNumber && (
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
})(ModifyContact);
