import React, { useState } from "react";
import plusIcon from "assets/img/icons/plus.svg";
import minusIcon from "assets/img/icons/minus.svg";
import { useTranslation } from "react-i18next";

const ApiInputSpinner = (props) => {
  const { t } = useTranslation();
  if (props.roomType == "total") {
    return (
      <div className="api-spinner">
        <span>{props.value}</span><h2>{t("devis.apartmentRooms.Unit")}</h2> 
      </div>
    );

  } else {
    return (
      <div className="api-spinner">
        <button type="button" onClick={props.onMinus} ><img src={minusIcon} /></button>
        <span>{props.value}</span>
        <button type="button" onClick={props.onPlus} ><img src={plusIcon} /></button>
      </div>
    );
  }
};

export default ApiInputSpinner;
