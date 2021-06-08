import React, { useState, useEffect } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import content from "translations/fr.json";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import { IMA } from "APIs/IMA";

const Scheduled = (props) => {
  const { t } = useTranslation();
  const {
    serviceId,
    userInfo: { postCode },
  } = props;
  const serviceIncludes =
    serviceId && content.translations[`${serviceId}`]["service includes"];
  const dateFormat = "DD/MM/YYYY";
  const dateTimeFormat = "DD/MM/YYYY hh:mm";
  let today = moment().format(dateFormat); // 12/05/2021
  let hour = moment().hour();
  let minute = moment().minute();
  // Caculating the default Date-time
  if (minute <= 30) {
    minute = 30;
    hour = hour + 1;
  } else {
    minute = 30;
    hour = hour + 2;
  }
  if (hour >= 24) {
    hour = hour - 24;
    today = moment().add(1, "d").format(dateFormat);
  }
  const [date, setDate] = useState(today); // 12/05/2021
  const [time, setTime] = useState(`${hour}h${minute}`); // 20h30
  const [validDate, setValidDate] = useState(true);
  const [validTime, setValidTime] = useState(true);
  const [price, setPrice] = useState(null);
  const minDateTime = moment(
    `${today} ${hour}h${minute}`,
    dateTimeFormat
  ).format(); // 2021-05-12T20:30:00+07:00
  const maxDate = moment(`${today}`, dateFormat).add(5, "d").format();
  const selectedDateTime = moment(`${date} ${time}`, dateTimeFormat).format();
  const selectedDate = moment(`${date}`, dateFormat).format();
  const validDateTime =
    validDate &&
    validTime &&
    selectedDateTime >= minDateTime &&
    selectedDate <= maxDate;
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "intervention-date") {
      setDate(value);
      const isValid = moment(`${value}`, dateFormat).isValid();
      setValidDate(isValid);
      isValid && props.updateUserInfo({ interventionDate: value });
    }
    if (name === "intervention-time") {
      setTime(value);
      const isValid = moment(`${value}`, "hh:mm").isValid();
      setValidTime(isValid);
      isValid && props.updateUserInfo({ interventionTime: value });
    }
  };

  const getPrice = async () => {
    setPrice(null);
    if (validDateTime) {
      const price = await IMA.getPrice({
        serviceId,
        selectedDateTime,
        postCode,
      });
      setPrice(price);
      props.updateUserInfo({ servicePrice: price });
    }
  };

  const confirm = () => {
    props.updateUserInfo({ selectedDateTime });
    props.nextStep();
  };

  useEffect(() => {
    props.updateUserInfo({ interventionDate: date });
    props.updateUserInfo({ interventionTime: time });
    props.updateUserInfo({ minDateTime });
    serviceId && props.updateUserInfo({ serviceId });
  }, []);

  useEffect(() => {
    if (serviceId) {
      getPrice();
    }
  }, [date, time]);

  return (
    <div className="api-content-wrap scheduled-step">
      <h2 className="title">{t("IMA Page.Programmer votre intervention")}</h2>
      <section className="diagnostic">
        <h3 className="heading">{t("Diagnostic")}</h3>
        <p className="result">{t(`${serviceId}.title`)}</p>
        <p className="description">{t(`${serviceId}.description`)}</p>
      </section>
      <section className="schedule-your-intervention">
        <h3 className="heading">
          {t("IMA Page.Programmer votre intervention")}
        </h3>
        <p className="description">{t("IMA Page.intervention description")}</p>
        <div className="date-time row">
          <div className="col-sm-12 col-md-6 date">
            <label>{t("IMA Page.intervention date")}</label>
            <input
              type="text"
              name="intervention-date"
              value={date}
              className="custom-input"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-sm-12 col-md-6 time">
            <label>{t("IMA Page.intervention time")}</label>
            <div className="select-wrap">
              <input
                className="custom-input"
                name="intervention-time"
                value={time}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </div>
        {!validDateTime && (
          <p className="error-message">{t("IMA Page.invalid date time")}</p>
        )}
      </section>
      <section className="quote">
        <h3 className="heading">{t("IMA Page.Devis")}</h3>
        {price ? (
          <p className="price">
            {price}&euro; <sup>TTC</sup>
          </p>
        ) : (
          <div className="loader-custom"></div>
        )}
        <p className="note">{t("prepayment note")}</p>
        <p className="result">{t("IMA Page.service includes")}</p>
        <ul className="service-includes">
          {serviceIncludes &&
            serviceIncludes.map((item, index) => (
              <li key={index}>{t(`${serviceId}.service includes.${index}`)}</li>
            ))}
        </ul>
        <p className="detail">{t("IMA Page.note")}</p>
      </section>
      <div className="bottom-group-button">
        <button className="api-custom-button_white" onClick={props.firstStep}>
          {t("Cancel")}
        </button>
        <button
          className={`api-custom-button_red ${price ? "" : "disable"}`}
          onClick={() => confirm()}
        >
          {t("IMA Page.confirm intervention")}
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Scheduled);
