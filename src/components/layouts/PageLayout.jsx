import React, { useState, useEffect } from "react";
import Header from "components/components/PageLayout/Header/Header";
import Footer from "components/components/PageLayout/Footer/Footer";
import {
  Route as RouteDom,
  Switch,
  useParams,
  useLocation,
  Redirect,
} from "react-router-dom";
import { routes } from "../../modules/pageLayout/routes";
import NotFound from "../pages/admin/NotFound";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import CustomPopup from "components/components/ApiLayout/Reparation/CustomPopup/CustomPopup";

const ZENDESK_URL = "https://static.zdassets.com/ekr/snippet.js?key=";
const ZENDESK_KEY_FR = "057571d2-2510-49cd-86fa-4ccf93433182";
const ZENDESK_KEY_CN = "a25f67d7-c967-4bbb-9f18-9d0c6f90263f";

const PageLayout = () => {
  const _locale = useParams().locale;
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [locale, setLocale] = useState("fr");
  if (_locale !== locale) {
    setLocale(_locale);
    const lang = _locale === "cn" ? "zh_CN" : _locale;
    i18n.changeLanguage(lang);
  }
  const loadScript = () => {
    let tag = document.createElement("script");
    tag.async = true;
    tag.type = "text/javascript";
    tag.id = "ze-snippet";
    if (currentLang === "fr") {
      tag.src = ZENDESK_URL + ZENDESK_KEY_FR;
    } else {
      tag.src = ZENDESK_URL + ZENDESK_KEY_CN;
    }
    document.body.appendChild(tag);
  };
  const loadNoScript = () => {
    let noScript = document.createElement("noscript");
    let iframe = document.createElement("iframe");
    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-T37NJ44";
    iframe.height = "0";
    iframe.width = "0";
    iframe.style = "display:none;visibility:hidden";
    noScript.appendChild(iframe);
    document.body.appendChild(noScript);
  };
  useEffect(() => {
    loadScript();
    loadNoScript();
  }, []);
  return (
    <div className="page-wrap">
      <Helmet>
        <script>
          {`window.axeptioSettings = {
              clientId: "60a3ae7817a83d5ed5c97fed",
            };
 
            (function(d, s) {
              var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
              e.async = true; e.src = "//static.axept.io/sdk.js";
              t.parentNode.insertBefore(e, t);
            })(document, "script");
          `}
        </script>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-191591776-1"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-191591776-1');`}
        </script>
        {/* Google Tag Manager */}
        <script>
          {`
            (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-T37NJ44");
          `}
        </script>
        {/* End Google Tag Manager */}
        <body className={currentLang}></body>
      </Helmet>
      <Header />
      <div className="page-container">
        <div className="page-content">
          <Switch>
            <RouteDom
              exact
              path="/"
              render={() => <Redirect to={`/fr${t(`slug./`)}`} />}
            />
            <RouteDom
              exact
              path={`/${locale}`}
              render={() => <Redirect to={`/${locale}${t(`slug./`)}`} />}
            />
            {routes.map((r) => {
              return (
                <RouteDom
                  path={`/${locale}${t(`slug.${r.path}`)}`}
                  key={r.path}
                  exact={true}
                  component={r.component}
                />
              );
            })}
            <RouteDom component={NotFound} />
          </Switch>
        </div>
        <CustomPopup />
      </div>
      {pathname !== `/${locale}${t("slug./api/devis")}` &&
        pathname !== `/${locale}${t("slug./api/souscription")}` &&
        pathname !== `/${locale}${t("slug./api/reparation")}` &&
        pathname !== `/${locale}${t("slug./api/ima-payment-page")}` &&
        pathname !== `/${locale}${t("slug./declaration-de-sinistre-page")}` &&
        pathname !==
          `/${locale}${t("slug./declaration-de-sinistre-summary-page")}` &&
        pathname !==
          `/${locale}${t("slug./declaration-de-sinistre-result-page")}` &&
        pathname !== `/${locale}${t("slug./api/confirmed-intervention")}` && (
          <Footer />
        )}
    </div>
  );
};

export default PageLayout;
