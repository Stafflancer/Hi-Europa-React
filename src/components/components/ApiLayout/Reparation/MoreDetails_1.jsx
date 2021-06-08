import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import { bindActionCreators } from "redux";

const MoreDetails_1 = (props) => {
  const { t } = useTranslation();
  const {
    childProblem: { problems, index },
    selectedServiceType,
  } = props;
  const handleClick = (p) => {
    console.log("moredetail 1 : ", p);
    props.updateUserInfo({ precision_two: p.problem.name });
    if (p.problem["child-step"]) {
      props.setChildProblem2(p);
      props.nextStep();
    } else {
      props.setServiceId(p.problem.ID);
      props.goToStep(6);
    }
  };
  const problemsList =
    problems &&
    problems.map((problem, _index) => {
      return (
        <li
          key={_index}
          className="problem-item"
          onClick={() => handleClick({ problem, index: _index })}
        >
          {t(
            `IMA Page.${selectedServiceType}.p${
              index + 1
            }.child-step.${_index}.name`
          )}
        </li>
      );
    });
  return (
    <div className="api-content-wrap more-details-step">
      <ApiTitle content={t("IMA Page.What problem 2")} />
      <ul className="problems-list">{problemsList}</ul>
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

export default connect(null, mapDispatchToProps)(MoreDetails_1);
