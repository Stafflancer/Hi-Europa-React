// import React, { useState } from "react";
import Banner from "components/components/PageLayout/Banner";
import GetMoreInfo from "components/components/PageLayout/GetMoreInfo";
import JoinUs from "components/components/PageLayout/JoinUs";
import faqIcon from "assets/img/icons/FAQ-icon.svg";
import { useTranslation } from "react-i18next";
import content from "translations/fr.json";
import _Helmet from "components/components/_Helmet";
import CustomLink from "components/components/CustomLink";

const FAQReparationPage = (props) => {
  const { t } = useTranslation();
  const sectionsLeft =
    content.translations["Reparation FAQ"]["left"]["section"];
  const sectionsRight =
    content.translations["Reparation FAQ"]["right"]["section"];
  return (
    <div className="FAQ-page">
      <_Helmet pageName="FAQ - emergency troubleshooting"></_Helmet>
      <Banner title={t("FAQ")} img={faqIcon}></Banner>
      <div className="all-faq-wrap">
        <CustomLink to="/faqpage">
          <p className="all-faq">{t("All FAQ")}</p>
        </CustomLink>
      </div>
      <div className="FAQ-wrap bg-white">
        <h4 className="title">{t("FAQ Page.category 3")}</h4>
        <div className="questions-group">
          <div className="left-column">
            <div className="topic-wrap">
              {sectionsLeft.map((item, index) => (
                <div key={index}>
                  <h5 className="topic-name">
                    {t(`Reparation FAQ.left.section.${index}.title`)}
                  </h5>
                  <ul className="questions-list">
                    {Object.values(item.QA).map((i, _index) => (
                      <li className="question" key={_index}>
                        <a
                          data-toggle="collapse"
                          href={`#question${index}${_index}`}
                          role="button"
                          aria-expanded="false"
                          aria-controls={`question$${index}${_index}`}
                        >
                          {t(
                            `Reparation FAQ.left.section.${index}.QA.QA${
                              _index + 1
                            }.Q`
                          )}
                        </a>
                        <div
                          className="collapse"
                          id={`question${index}${_index}`}
                        >
                          <div
                            className="answer"
                            dangerouslySetInnerHTML={{
                              __html: t(
                                `Reparation FAQ.left.section.${index}.QA.QA${
                                  _index + 1
                                }.A`
                              ),
                            }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="right-column">
            <div className="topic-wrap">
              {sectionsRight.map((item, index) => (
                <div key={index}>
                  <h5 className="topic-name">
                    {t(`Reparation FAQ.right.section.${index}.title`)}
                  </h5>
                  <ul className="questions-list">
                    {Object.values(item.QA).map((i, _index) => (
                      <li className="question" key={_index}>
                        <a
                          data-toggle="collapse"
                          href={`#question-r-${index}${_index}`}
                          role="button"
                          aria-expanded="false"
                          aria-controls={`question-r-${index}${_index}`}
                        >
                          {t(
                            `Reparation FAQ.right.section.${index}.QA.QA${
                              _index + 1
                            }.Q`
                          )}
                        </a>
                        <div
                          className="collapse"
                          id={`question-r-${index}${_index}`}
                        >
                          <div
                            className="answer"
                            dangerouslySetInnerHTML={{
                              __html: t(
                                `Reparation FAQ.right.section.${index}.QA.QA${
                                  _index + 1
                                }.A`
                              ),
                            }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <GetMoreInfo></GetMoreInfo>
      <JoinUs></JoinUs>
    </div>
  );
};

export default FAQReparationPage;
