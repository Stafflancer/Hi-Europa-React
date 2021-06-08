import PropTypes from "prop-types";
import React, { Component,useState } from "react";
import blackPlusIcon from "assets/img/pngs/black-plus.png";
import redCheckIcon from "assets/img/pngs/red-check.png";
import { useTranslation  } from "react-i18next";

const ToggleButton = (props) => {
  const { t } = useTranslation();
    return (
      <div className={`toggle-container ${props.selected ? "selected" : ""}`} onClick={props.onClick}>
        <div className="dialog-button">
        <img
          src={props.selected ? redCheckIcon : blackPlusIcon}
          alt=""
          className="api-icon"
        />
        </div>
        <span>
        {props.selected ? t("devis.result.button_added") : t("devis.result.button_add")}
        </span>
      </div>
    );
}
ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
};

export default ToggleButton;