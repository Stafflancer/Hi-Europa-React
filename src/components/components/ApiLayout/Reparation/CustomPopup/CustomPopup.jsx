import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import ModifyDate from "./ModifyDate";
import ModifyAddress from "./ModifyAddress";
import ModifyContact from "./ModifyContact";

const CustomPopup = (props) => {
  return (
    <div className="popup-layout open">
      <div className="popup-wrap">
        <div className="popup-close-button fa-times icon"></div>
        {/* <ModifyDate /> */}
        {/* <ModifyAddress /> */}
        <ModifyContact />
      </div>
    </div>
  );
};

export default CustomPopup;
