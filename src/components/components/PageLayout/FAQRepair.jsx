import React from "react";
import { useTranslation } from "react-i18next";
import content from "translations/fr.json";

const FAQRepair = props => {
  const _FAQLeft = content.translations["Dépannage Urgence Page"]["FAQ-left"];
  const FAQLeft = Object.values(_FAQLeft);
  const _FAQRight = content.translations["Dépannage Urgence Page"]["FAQ-right"];
  const FAQRight = Object.values(_FAQRight);
  const { t } = useTranslation();
  return (
    <div className="FAQ-wrap">
      <h4 className="title">{t("FAQ")}</h4>
      <div className="questions-group">
        <div className="left-column">
          <div className="topic-wrap">
            <ul className="questions-list">
              {FAQLeft.map((item, index) => (
                <li className="question" key={index}>
                  <a
                    data-toggle="collapse"
                    href={`#QA-left-${index}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls={`QA-left-${index}`}
                  >
                    {t(`Dépannage Urgence Page.FAQ-left.QA${index + 1}.Q`)}
                  </a>
                  <div className="collapse" id={`QA-left-${index}`}>
                    <div className="answer">
                      {t(`Dépannage Urgence Page.FAQ-left.QA${index + 1}.A`)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right-column">
          <div className="topic-wrap">
            <ul className="questions-list">
              {FAQRight.map((item, index) => (
                <li className="question" key={index}>
                  <a
                    data-toggle="collapse"
                    href={`#QA-right-${index}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls={`QA-right-${index}`}
                  >
                    {t(`Dépannage Urgence Page.FAQ-right.QA${index + 1}.Q`)}
                  </a>
                  <div className="collapse" id={`QA-right-${index}`}>
                    <div className="answer">
                      {t(`Dépannage Urgence Page.FAQ-right.QA${index + 1}.A`)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQRepair;
