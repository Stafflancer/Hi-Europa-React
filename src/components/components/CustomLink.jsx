import React from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const CustomLink = (props) => {
  const { to, children, onClick, activeClassName, className, name } = props;
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "zh_CN" ? "cn" : i18n.language;
  const handleClick = () => {
    onClick && onClick();
  };
  return activeClassName ? (
    <NavLink
      to={`/${locale}${t(`slug.${to}`)}`}
      onClick={handleClick}
      activeClassName={activeClassName}
      className={className}
      name={name}
      dangerouslySetInnerHTML={{ __html: children }}
    ></NavLink>
  ) : (
    <Link
      to={`/${locale}${t(`slug.${to}`)}`}
      onClick={handleClick}
      className={className}
      name={name}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
