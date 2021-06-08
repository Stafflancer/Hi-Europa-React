import React, { useState } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import * as popupActions from "redux/actions/popupActions";
import { IMA } from "APIs/IMA";
import { useTranslation } from "react-i18next";

const { forwardRef, useImperativeHandle } = React;

const ModifyDate = forwardRef((props, ref) => {
  const { t } = useTranslation();
  useImperativeHandle(ref, () => ({
    _closePopup() {
      popupActions.closePopup();
      setDate(interventionDate);
      setTime(interventionTime);
    },
  }));
  const {
    userInfo: {
      interventionDate,
      interventionTime,
      minDateTime,
      serviceId,
      postCode,
    },
    popupActions,
  } = props;
  const dateFormat = "DD/MM/YYYY";
  const dateTimeFormat = "DD/MM/YYYY hh:mm";
  const [date, setDate] = useState(interventionDate); // 12/05/2021
  const [time, setTime] = useState(interventionTime); // 20h30
  const [validDate, setValidDate] = useState(true);
  const [validTime, setValidTime] = useState(true);
  const selectedDateTime = moment(`${date} ${time}`, dateTimeFormat).format();
  const maxDate = moment(minDateTime).add(5, "d").format(dateFormat);
  const validDateTime =
    validDate &&
    validTime &&
    selectedDateTime >= minDateTime &&
    date <= maxDate;
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "intervention-date") {
      setDate(value);
      const isValid = moment(`${value}`, dateFormat).isValid();
      setValidDate(isValid);
    }
    if (name === "intervention-time") {
      setTime(value);
      const isValid = moment(`${value}`, "hh:mm").isValid();
      setValidTime(isValid);
    }
  };
  const saveInfo = () => {
    props.updateUserInfo({ interventionDate: date, interventionTime: time });
    props.updateUserInfo({ selectedDateTime });
    getPrice();
    popupActions.closePopup();
  };
  const doNotSaveInfo = () => {
    popupActions.closePopup();
    setDate(interventionDate);
    setTime(interventionTime);
  };
  const getPrice = async () => {
    props.updateUserInfo({ servicePrice: null });
    if (validDateTime) {
      const price = await IMA.getPrice({
        serviceId,
        selectedDateTime,
        postCode,
      });
      props.updateUserInfo({ servicePrice: price });
    }
  };
  return (
    <div className="modify-date-popup">
      <h3 className="title">{t("Date et heure de l’intervention")}</h3>
      {!validDateTime && (
        <p
          className="error-message"
          dangerouslySetInnerHTML={{ __html: t("IMA Page.invalid date time") }}
        ></p>
      )}
      <div className="popup-content">
        <div className="input-wrap">
          <label>{t("IMA Page.intervention date")}</label>
          <input
            type="text"
            name="intervention-date"
            value={date}
            className="custom-input"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-wrap">
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
        <div className="bottom-group-button">
          <button
            className="api-custom-button_white"
            onClick={() => doNotSaveInfo()}
          >
            {t("Cancel")}
          </button>
          <button
            className={`api-custom-button_red ${
              validDateTime ? "" : "disable"
            }`}
            onClick={() => saveInfo()}
          >
            {t("Modifier")}
          </button>
        </div>
      </div>
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
})(ModifyDate);
