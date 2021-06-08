import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import { useForm } from "react-hook-form";
import { IMA } from "APIs/IMA";
import { useTranslation } from "react-i18next";
import * as inputPattern from "utilities/inputPattern";

const YourInfo = (props) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [whoWillBeThere, setWhoWillBeThere] = useState("0");
  const onSubmit = async (data) => {
    console.log("dataForm : ", data);
    setLoading(true);
    const accountData = {
      lastname: data.lastName,
      firstname: data.firstName,
      phone: data.phone,
      email: data.email,
      salutation: data.gender,
      address1: data.address,
      address2: data.otherAddress,
      zipCode: props.userInfo.postCode,
      city: data.city,
      countryCode: "FRA",
      ownership: data.ownership,
    };
    const account = await IMA.createAccount(accountData);
    console.log("account Info : ", account);
    props.updateUserInfo({
      address: data.address,
      city: data.city,
      email: data.email,
      firstName: data.firstName,
      gender: data.gender,
      lastName: data.lastName,
      otherAddress: data.otherAddress,
      otherFirstName: data.otherFirstName,
      otherGender: data.otherGender,
      otherLastName: data.otherLastName,
      otherPhone: data.otherPhone,
      ownership: data.ownership,
      phoneNumber: data.phone,
      termsPolicyAccepted: data.termsPolicyAccepted,
      accountId: account.account_id,
      userId: account.id,
      whoWillBeThere,
    });
    setLoading(false);
    props.nextStep();
  };
  const onChangeValue = (event) => {
    const target = event.target;
    const value = target.value;
    setWhoWillBeThere(value);
  };
  return (
    <div className="api-content-wrap your-info-step">
      <h2 className="title">{t("Vos informations")}</h2>
      <form className="information-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row gender">
          <div className="col-6 d-flex">
            <input
              type="radio"
              value="Mme"
              name="gender"
              id="female"
              defaultChecked
              className="custom-radio"
              {...register("gender")}
            />
            <label htmlFor="female">{t("Madame")}</label>
          </div>
          <div className="col-6 d-flex">
            <input
              type="radio"
              value="Mr"
              name="gender"
              id="male"
              className="custom-radio"
              {...register("gender")}
            />
            <label htmlFor="male">{t("Monsieur")}</label>
          </div>
        </div>
        <div className="row owner-or-tenant">
          <div className="col-6 d-flex">
            <input
              type="radio"
              value="owner"
              name="ownership"
              id="owner"
              defaultChecked
              className="custom-radio"
              {...register("ownership")}
            />
            <label htmlFor="owner">{t("Propriétaire")}</label>
          </div>
          <div className="col-6 d-flex">
            <input
              type="radio"
              value="tenant"
              name="ownership"
              id="tenant"
              className="custom-radio"
              {...register("ownership")}
            />
            <label htmlFor="tenant">{t("Locataire")}</label>
          </div>
        </div>
        <div className="input-wrap">
          <label>{t("Prénom")}</label>
          <input
            type="text"
            name="firstName"
            className="custom-input"
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
          <label>{t("Adresse (numéro et nom de la rue)")}</label>
          <input
            type="text"
            name="address"
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
            name="otherAddress"
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
            value={props.userInfo.postCode}
            disabled
          />
        </div>
        <div className="input-wrap">
          <label>{t("Ville")}</label>
          <input
            type="text"
            name="city"
            className="custom-input"
            {...register("city", {
              required: true,
              pattern: inputPattern.city,
            })}
          />
          {errors.city && (
            <p className="error-message">This field is required</p>
          )}
        </div>
        <div className="input-wrap">
          <label>{t("Email")}</label>
          <input
            name="email"
            className="custom-input"
            {...register("email", {
              required: true,
              pattern: inputPattern.email,
            })}
          />
          {errors.email && (
            <p className="error-message">This field is required</p>
          )}
        </div>
        <div className="input-wrap">
          <label>{t("Numéro de téléphone")}</label>
          <input
            type="tel"
            name="phone"
            className="custom-input"
            {...register("phone", {
              required: true,
              pattern: inputPattern.phone,
            })}
          ></input>
          {errors.phone && (
            <p className="error-message">This field is required</p>
          )}
        </div>
        <p className="note">{t("phone note")}</p>
        <div className="who-come" onChange={onChangeValue}>
          <div className="i-there d-flex">
            <input
              type="radio"
              value={0}
              name="whoWillBeThere"
              id="me"
              className="custom-radio"
              defaultChecked
              {...register("whoWillBeThere")}
            />
            <label htmlFor="me">
              {t("C'est moi qui serais sur place pour l'intervention")}
            </label>
          </div>
          <div className="other-there d-flex">
            <input
              type="radio"
              value={1}
              name="whoWillBeThere"
              id="other"
              className="custom-radio"
              {...register("whoWillBeThere")}
            />
            <label htmlFor="other">
              {t("Un autre personne sera sur place pour l'intervention")}
            </label>
          </div>
        </div>
        <Collapse in={whoWillBeThere == "1" ? true : false}>
          <div className="other-info">
            <div className="row gender">
              <div className="col-6 d-flex">
                <input
                  type="radio"
                  value="Mme"
                  name="otherGender"
                  id="other-female"
                  defaultChecked
                  className="custom-radio"
                  {...register("otherGender")}
                />
                <label htmlFor="other-female">{t("Madame")}</label>
              </div>
              <div className="col-6 d-flex">
                <input
                  type="radio"
                  value="Mr"
                  name="otherGender"
                  id="other-male"
                  className="custom-radio"
                  {...register("otherGender")}
                />
                <label htmlFor="other-male">{t("Monsieur")}</label>
              </div>
            </div>
            <div className="input-wrap">
              <label>{t("Prénom")}</label>
              <input
                type="text"
                name="otherFirstName"
                className="custom-input"
                {...register("otherFirstName", {
                  required: whoWillBeThere === "1" ? true : false,
                  pattern: inputPattern.name,
                })}
              />
              {errors.otherFirstName && (
                <p className="error-message">This field is required</p>
              )}
            </div>
            <div className="input-wrap">
              <label>{t("Nom")}</label>
              <input
                type="text"
                name="otherLastName"
                className="custom-input"
                {...register("otherLastName", {
                  required: whoWillBeThere === "1" ? true : false,
                  pattern: inputPattern.name,
                })}
              />
              {errors.otherLastName && (
                <p className="error-message">This field is required</p>
              )}
            </div>
            <div className="input-wrap">
              <label>{t("Numéro de téléphone")}</label>
              <input
                type="tel"
                name="otherPhone"
                className="custom-input"
                {...register("otherPhone", {
                  required: whoWillBeThere === "1" ? true : false,
                  pattern: inputPattern.phone,
                })}
              ></input>
              {errors.otherPhone && (
                <p className="error-message">This field is required</p>
              )}
            </div>
          </div>
        </Collapse>
        <div className="accept-temrs-policy">
          <input
            type="checkbox"
            name="termsPolicyAccepted"
            id="accept-terms-policy"
            className="custom-checkbox"
            {...register("termsPolicyAccepted")}
          />
          <label
            htmlFor="accept-terms-policy"
            dangerouslySetInnerHTML={{ __html: t("information form checkbox") }}
          ></label>
        </div>
        {errors.termsPolicyAccepted && (
          <p className="error-message terms-policy">This field is required</p>
        )}
        {loading ? (
          <div className="loader-custom" />
        ) : (
          <input
            className="api-custom-button_red submit"
            type="submit"
            value={t("validate information")}
          ></input>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfoReducer.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: bindActionCreators(userInfoActions.updateUserInfo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(YourInfo);
