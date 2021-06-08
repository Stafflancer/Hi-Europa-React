import React from "react";

const Marker = (props) => {
    let style = {
      width: "4px",
      height: "16px",
      background: "#C62D54",
      borderRadius: "20px",
      margin:"auto"
    };
    let label = {
      fontSize: "1rem",
      fontWeight: "600",
      color:"black"
    }
    return (
      <div>
        <div style={style}></div>
        { props.showLabel == "show" ? (
          <label style={label}>{props.value}</label>
        ) : ( 
          ""
        )}
      </div>
    );
};

export default Marker;
