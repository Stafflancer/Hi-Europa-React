import React from "react";
import CustomLink from "components/components/CustomLink";

const ServiceTag = (props) => {
  return (
    <CustomLink
      to={props.to}
      className={`service-tag-wrap ${props.className}`}
      onClick={props.onClick}
    >
      <div className="service-tag">
        <img
          src={props.img}
          alt="À propos d’hi Europa"
          className="service-icon"
        />
        <p className="service-name">{props.serviceName}</p>
        <span className="fa-chevron-right icon"></span>
      </div>
    </CustomLink>
  );
};

export default ServiceTag;
