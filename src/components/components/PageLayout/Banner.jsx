import React from "react";
import teamWorkIcon from "assets/img/icons/teamwork.svg";
import homeInsuranceIcon from "assets/img/icons/home-insurance-icon.svg";

const Banner = ({homepage, title, description}) => {
  return (
    <div className={`banner ${homepage ? "home-page" : ""}`}>
      <div className="content-wrap">
        <img src={teamWorkIcon} alt="banner-icon" />
        <div className="content">
          <h4 className="title">{title}</h4>
          {!!description &&
            <p className="description">{description}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Banner;
