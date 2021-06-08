import React from "react";

const Banner = ({ homepage, title, description, img }) => {
  return (
    <div className={`banner ${homepage ? "home-page" : ""}`}>
      <div className="content-wrap">
        {img && <img src={img} alt="banner-icon" />}
        <div className="content">
          <h4
            className="title"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></h4>
          {!!description && <p className="description">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default Banner;
