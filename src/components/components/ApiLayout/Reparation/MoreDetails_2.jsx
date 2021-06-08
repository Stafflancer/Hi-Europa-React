import React, { useState } from "react";
import ApiTitle from "../ApiTitle";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { userInfoActions } from "redux/actions/userInfoActions";
import { bindActionCreators } from "redux";

const MoreDetails_2 = (props) => {
  const { t } = useTranslation();
  const {
    childProblem_2: { problems, index },
    detailIndex1,
    selectedServiceType,
  } = props;
  const handleClick = (p) => {
    console.log("moredetail 2 : ", p);
    props.updateUserInfo({ precision_tree: p.name });
    props.setServiceId(p.ID);
    props.nextStep();
  };
  const problemsList =
    problems &&
    problems.map((problem, _index) => {
      return (
        <li
          key={_index}
          className="problem-item"
          onClick={() => handleClick(problem)}
        >
          {t(
            `IMA Page.${selectedServiceType}.p${
              detailIndex1 + 1
            }.child-step.${index}.child-step.${_index}.name`
          )}
        </li>
      );
    });
  return (
    <div className="api-content-wrap more-details-step">
      <ApiTitle content={t("IMA Page.What problem 3")} />
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

export default connect(null, mapDispatchToProps)(MoreDetails_2);
