import React, { useState, useEffect } from "react";
import blueMascotNormalIcon from "assets/img/icons/blue-mascot_normal.svg";
import { useTranslation } from "react-i18next";
import CustomLink from "components/components/CustomLink";
import { IMA } from "APIs/IMA";

const Done = (props) => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const data = {
    interventionDate: sessionStorage.getItem("interventionDate"),
    interventionTime: sessionStorage.getItem("interventionTime"),
    address: sessionStorage.getItem("address"),
    city: sessionStorage.getItem("city"),
    postCode: sessionStorage.getItem("postCode"),
    comp_address: sessionStorage.getItem("comp_address"),
    attendance_person: sessionStorage.getItem("attendance_person"),
    other_person_first_name: sessionStorage.getItem("other_person_first_name"),
    other_person_last_name: sessionStorage.getItem("other_person_last_name"),
    other_person_phone: sessionStorage.getItem("other_person_phone"),
    ima_user_id: sessionStorage.getItem("ima_user_id"),
  };
  useEffect(async () => {
    if (sessionStorage.getItem("alreadyCreatedIntervention") === "false") {
      console.log("intervention API called");
      const intervention = await IMA.createIntervention({
        address: data.address,
        city: data.city,
        comp_address: data.comp_address,
        attendance_person: data.attendance_person,
        other_person_first_name: data.other_person_first_name,
        other_person_last_name: data.other_person_last_name,
        other_person_phone: data.other_person_phone,
        ima_user_id: data.ima_user_id,
        language: i18n.language,
      });
      intervention === "error" && setHasError(true);
    }
    sessionStorage.setItem("alreadyCreatedIntervention", "true");
    setLoading(false);
  }, []);
  return (
    <div className="api-content-wrap done-step">
      {loading ? (
        <div className="loader-custom" />
      ) : hasError ? (
        <div>
          <h2>
            Error ! You intervention was not created ! Please try again or
            contact IMA team !
          </h2>
          <CustomLink to="/" className="back-to-home-page">
            {t("confirmation payment.go to homepage")}
          </CustomLink>
        </div>
      ) : (
        <div>
          <img
            src={blueMascotNormalIcon}
            alt="mascot-icon"
            className="mascot-icon"
          />
          <h3 className="title">{t("confirmation payment.title")}</h3>
          <p className="date-time">
            {t("Le")} <span>{data.interventionDate}</span> {t("à")}{" "}
            <span>{data.interventionTime}</span>
          </p>
          <p className="address">
            {t("Au")}{" "}
            <span>
              {data.address}
              {data.comp_address !== "" ? `, ${data.comp_address}` : ""},{" "}
              {data.city}, {data.postCode}, FR
            </span>
          </p>
          <p className="desc desc-1">
            {t("confirmation payment.text 1")}
            <br></br>
            {t("confirmation payment.text 2")}
          </p>
          <p
            className="desc desc-2"
            dangerouslySetInnerHTML={{
              __html: t("confirmation payment.text 3"),
            }}
          ></p>
          <p className="thank-you">{t("confirmation payment.thanks")}</p>
          <CustomLink to="/" className="back-to-home-page">
            {t("confirmation payment.go to homepage")}
          </CustomLink>
        </div>
      )}
    </div>
  );
};

export default Done;
