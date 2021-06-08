import React, { useState } from "react";
import { connect } from "react-redux";
import * as popupActions from "redux/actions/popupActions";
import { userInfoActions } from "redux/actions/userInfoActions";
import { bindActionCreators } from "redux";
import { useTranslation } from "react-i18next";
import content from "translations/fr.json";
import { useHistory } from "react-router-dom";
import { IMA } from "APIs/IMA";

const Summary = (props) => {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "zh_CN" ? "cn" : i18n.language;
  const frLang = i18n.getFixedT("fr");
  const [loading, setLoading] = useState(false);
  console.log(props);
  const {
    userInfo: {
      interventionDate,
      interventionTime,
      address,
      otherAddress,
      whoWillBeThere,
      otherFirstName,
      otherLastName,
      otherPhone,
      firstName,
      lastName,
      phoneNumber,
      serviceId,
      servicePrice,
      postCode,
      city,
      selectedDateTime,
      termsPolicyAccepted,
      problem_type,
      precision_one,
      precision_two,
      precision_tree,
      accountId,
      userId,
      modifiedContact,
    },
  } = props;
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const serviceIncludes =
    serviceId && content.translations[`${serviceId}`]["service includes"];
  const handleChange = (event) => {
    const target = event.target;
    const value = target.checked;
    setAcceptedTerms(value);
  };
  // Store temporary interventionDate and interventionTime for confirmed-intervention page just in case the sucessful payment
  const storeTempData = () => {
    sessionStorage.setItem("interventionDate", interventionDate);
    sessionStorage.setItem("interventionTime", interventionTime);
    sessionStorage.setItem("address", address);
    sessionStorage.setItem("city", city);
    sessionStorage.setItem("postCode", postCode);
    sessionStorage.setItem(
      "attendance_person",
      modifiedContact ? 1 : whoWillBeThere
    );
    sessionStorage.setItem("comp_address", otherAddress);
    sessionStorage.setItem("ima_user_id", userId);
    sessionStorage.setItem(
      "other_person_first_name",
      modifiedContact
        ? whoWillBeThere === "0"
          ? firstName
          : otherFirstName
        : whoWillBeThere === "0"
        ? ""
        : otherFirstName
    );
    sessionStorage.setItem(
      "other_person_last_name",
      modifiedContact
        ? whoWillBeThere === "0"
          ? lastName
          : otherLastName
        : whoWillBeThere === "0"
        ? ""
        : otherLastName
    );
    sessionStorage.setItem(
      "other_person_phone",
      modifiedContact
        ? whoWillBeThere === "0"
          ? phoneNumber
          : otherPhone
        : whoWillBeThere === "0"
        ? ""
        : otherPhone
    );
  };
  const goToPayment = async () => {
    setLoading(true);
    storeTempData();
    const frDiagnostic = frLang(`${serviceId}.title`);
    const diagnostic =
      locale === "fr"
        ? t(`${serviceId}.title`)
        : `${frDiagnostic} / ${t(`${serviceId}.title`)}`;
    const demaindData = {
      selectedDateTime,
      serviceId,
      accountId,
      termsPolicyAccepted,
      address: `${address}${otherAddress !== "" ? ", " : ""}${otherAddress}`,
      postCode,
      city,
      lastName: whoWillBeThere === "0" ? lastName : otherLastName,
      firstName: whoWillBeThere === "0" ? firstName : otherFirstName,
      phoneNumber: whoWillBeThere === "0" ? phoneNumber : otherPhone,
    };
    IMA.createQuotation({
      address,
      problem_type,
      precision_one,
      precision_two,
      precision_tree,
      intervention_date: selectedDateTime,
      start_time: selectedDateTime,
      cost: servicePrice,
      ima_user_id: userId,
      diagnostic,
    });
    const demand = await IMA.createDemand(demaindData);
    console.log("demand : ", demand);
    const paymentToken = await IMA.getPaymentToken(demand.id);
    console.log(paymentToken);
    props.updateUserInfo({ paymentToken });
    sessionStorage.setItem("alreadyCreatedIntervention", "false");
    setLoading(false);
    history.push(`/${locale}${t("slug./api/ima-payment-page")}`);
  };
  return (
    <div className="api-content-wrap summary-step">
      <h2 className="title">{t("Récapitulatif de votre intervention")}</h2>
      <section className="summary-date-time">
        <h3 className="heading">{t("Date et heure de l’intervention")}</h3>
        <div className="wrap">
          <p className="summary-content">
            {t("Le")} <span>{interventionDate}</span> {t("à")}{" "}
            <span>{interventionTime}</span>
          </p>
          <div
            className="modifier"
            onClick={() => props.popupActions.openPopup("date-time")}
          >
            {t("Modifier")}
          </div>
        </div>
      </section>
      <section className="summary-address">
        <h3 className="heading">{t("Adresse de l’intervention")}</h3>
        <div className="wrap">
          <p className="summary-content">
            {t("Au")} <span>{address}</span>
          </p>
          <div
            className="modifier"
            onClick={() => props.popupActions.openPopup("address")}
          >
            {t("Modifier")}
          </div>
        </div>
        <p className="other-thing">{otherAddress}</p>
      </section>
      <section className="summary-contact">
        <h3 className="heading">
          {t("Contact sur place lors de l’intervention")}
        </h3>
        <div className="wrap">
          <p className="summary-content">
            {t("Contact name")}
            <span>
              {whoWillBeThere === "0" ? firstName : otherFirstName}{" "}
              {whoWillBeThere === "0" ? lastName : otherLastName}
            </span>
          </p>
          <div
            className="modifier"
            onClick={() => props.popupActions.openPopup("contact")}
          >
            {t("Modifier")}
          </div>
        </div>
        <p className="summary-content">
          {t("Téléphone")}
          <span className="phone-number">
            {whoWillBeThere === "0" ? phoneNumber : otherPhone}
          </span>
        </p>
      </section>
      <section className="diagnostic">
        <h3 className="heading">{t("Diagnostic")}</h3>
        <p className="result">{t(`${serviceId}.title`)}</p>
        <p className="description">{t(`${serviceId}.description`)}</p>
      </section>
      <section className="service">
        <h3 className="heading">{t("Prestation")}</h3>
        <p className="result">{t("IMA Page.service includes")}</p>
        <ul className="service-includes">
          {serviceIncludes &&
            serviceIncludes.map((item, index) => (
              <li key={index}>{t(`${serviceId}.service includes.${index}`)}</li>
            ))}
        </ul>
      </section>
      <section className="service-price">
        <h3 className="heading">{t("Prix de la prestation")}</h3>
        {servicePrice ? (
          <p className="price">
            {servicePrice}&euro; <sup>TTC</sup>
          </p>
        ) : (
          <div className="loader-custom"></div>
        )}
        <p className="note">{t("prepayment note recap")}</p>
      </section>
      <section className="accept-cgv">
        <input
          type="checkbox"
          name="accept-cgv"
          id="accept-cgv"
          className="custom-checkbox"
          onChange={(e) => handleChange(e)}
        />
        <label
          htmlFor="accept-cgv"
          dangerouslySetInnerHTML={{ __html: t("CGV checkbox") }}
        ></label>
      </section>
      <div className="bottom-group-button">
        {loading ? (
          <div className="loader-custom" />
        ) : (
          <React.Fragment>
            <button
              className="api-custom-button_white"
              onClick={props.firstStep}
            >
              {t("Cancel")}
            </button>
            <button
              className={`api-custom-button_red ${
                acceptedTerms ? "" : "disable"
              }`}
              onClick={() => goToPayment()}
            >
              {t("Passer au paiement")}
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfoReducer.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: bindActionCreators(userInfoActions.updateUserInfo, dispatch),
  popupActions: bindActionCreators(popupActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
