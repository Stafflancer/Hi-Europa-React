import React from "react";

const handler = (props) => {
    let style = {
       position: "absolute",
       left: props.offset ? `${props.offset}%` : "0",
       marginTop: props.style.marginTop ? `${props.style.marginTop}px` : "",
       transform: "translateX(-50%)"
    };
    let label = {
      color: props.style.textColor ? `${props.style.textColor}` : "#000000",
      fontSize:"1.25rem",
      marginBottom:"0px"
    }
    let tracker = {
      width: props.style.width ? `${props.style.width}px` : "0px",
      height: props.style.height ? `${props.style.height}px` : "0px",
      margin: "auto",
      cursor: "pointer",
      borderRadius: "50%",
      border: props.style.border ? `${props.style.border}`: "solid 2px #000",
      backgroundColor: props.style.backgroundColor ? `${props.style.backgroundColor}`: "#fff"
    }
    return (
      <div style={style}>
        <label style={label}>{props.value}€</label>
        <div style={tracker}></div>
      </div>
    );
};

export default handler;
