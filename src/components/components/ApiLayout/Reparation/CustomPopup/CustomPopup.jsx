import React, { useState } from "react";
import ModifyDate from "./ModifyDate";
import ModifyAddress from "./ModifyAddress";
import ModifyContact from "./ModifyContact";
import ConfirmingCancellationPopup from "./ConfirmingCancellationPopup";
import { connect } from "react-redux";

const CustomPopup = (props) => {
  const childRef = React.useRef();
  const { showPopup, selectedComponent } = props.popup;
  const renderContent = (content) => {
    switch (content) {
      case "date-time":
        return <ModifyDate ref={childRef} />;
      case "address":
        return <ModifyAddress ref={childRef} />;
      case "contact":
        return <ModifyContact ref={childRef} />;
      case "confirming-cancellation":
        return <ConfirmingCancellationPopup />;
      default:
        return null;
    }
  };
  const closePopup = () => {
    if (childRef.current) {
      childRef.current._closePopup();
    }
    props.dispatch({ type: "CLOSE_POPUP" });
  };
  return (
    <div className={`popup-layout ${showPopup ? "open" : ""}`}>
      <div
        className={`popup-wrap ${
          selectedComponent === "confirming-cancellation" ? "new-padding" : ""
        }`}
      >
        <div
          className="popup-close-button fa-times icon"
          onClick={() => closePopup()}
        ></div>
        {renderContent(selectedComponent)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  popup: state.popupReducer,
});

export default connect(mapStateToProps)(CustomPopup);
