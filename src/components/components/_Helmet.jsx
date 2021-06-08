import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const _Helmet = (props) => {
  const { t } = useTranslation();
  const _Helmet = (
    <Helmet>
      <title>{t(`title.${props.pageName}`)}</title>
      <meta name="description" content={t(`description.${props.pageName}`)} />
    </Helmet>
  );
  return <div className="helmet">{_Helmet}</div>;
};

export default _Helmet;
