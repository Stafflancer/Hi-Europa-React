import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import { useTranslation } from "react-i18next";
import content from "translations/fr.json";
import { connect } from "react-redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import { bindActionCreators } from "redux";

const WhatProblem = (props) => {
  const { t } = useTranslation();
  const { selectedServiceType } = props;
  const problems = content.translations["IMA Page"][`${selectedServiceType}`];
  const handleClick = (p) => {
    // console.log("what problem : ", p);
    props.updateUserInfo({ precision_one: p.problem.name });
    if (p.problem["child-step"]) {
      props.setChildProblem(p);
      props.nextStep();
    } else {
      props.setServiceId(p.problem.ID);
      props.goToStep(6);
    }
  };
  const propblemsList =
    problems &&
    Object.values(problems).map((problem, index) => {
      return (
        <li
          key={index}
          className="problem-item"
          onClick={() => handleClick({ problem, index })}
        >
          {t(`IMA Page.${selectedServiceType}.p${index + 1}.name`)}
        </li>
      );
    });
  return (
    <div className="api-content-wrap what-problem-step">
      <ApiTitle content={t("IMA Page.What problem")} />
      <ul className="problems-list">{propblemsList}</ul>
      <div className="get-back-button" onClick={props.previousStep}>
        <span className="fa-chevron-left icon"></span>
        <span className="text">{t("Previous")}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: bindActionCreators(userInfoActions.updateUserInfo, dispatch),
});

export default connect(null, mapDispatchToProps)(WhatProblem);
