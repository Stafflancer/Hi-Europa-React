import * as React from "react";
import HomePage from "components/pages/pageLayout/HomePage";
import EmergencyTroubleshootingPage from "components/pages/pageLayout/EmergencyTroubleshootingPage";
import HomeInsurancePage from "components/pages/pageLayout/HomeInsurancePage";
import ContactPage from "components/pages/pageLayout/ContactPage";
import FAQPage from "components/pages/pageLayout/FAQPage";
import FAQHabitationPage from "components/pages/pageLayout/FAQHabitationPage";
import FAQHieuropaPage from "components/pages/pageLayout/FAQHieuropa";
import FAQEmergencyResponsePage from "components/pages/pageLayout/FAQEmergencyResponsePage";
import AboutUsPage from "components/pages/pageLayout/AboutUsPage";
import LegalNoticePage from "components/pages/pageLayout/LegalNoticePage";
import CGUPage from "components/pages/pageLayout/CGUPage";
import CookiePage from "components/pages/pageLayout/CookiePage";
import PrivacyPolicyPage from "components/pages/pageLayout/PrivacyPolicyPage";
import ApiDevisPage from "components/pages/apiLayout/ApiDevisPage";
import ApiSouscriptionPage from "components/pages/apiLayout/ApiSouscriptionPage";
import ApiReparationPage from "components/pages/apiLayout/ApiReparationPage";
import PaymentIMAPage from "components/pages/apiLayout/PaymentIMAPage";
import ConfirmedInterventionPage from "components/pages/apiLayout/ConfirmedInterventionPage";
import DeclarationDeSinistrePage from "components/pages/pageLayout/DeclarationDeSinistrePage";
import SummaryPage from "components/pages/pageLayout/DeclarationDeSinistrePage/summary";
import ResultPage from "components/pages/pageLayout/DeclarationDeSinistrePage/result";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory({
  hashType: "slash",
  basename: "",
});

export const routes = [
  {
    path: "/",
    component: HomePage,
    name: "Home Page",
  },
  {
    path: "/home-insurance-page",
    component: HomeInsurancePage,
    name: "Home Insurance Page",
  },
  {
    path: "/emergency-troubleshooting-page",
    component: EmergencyTroubleshootingPage,
    name: "Emergency Troubleshooting Page",
  },
  {
    path: "/contactpage",
    component: ContactPage,
    name: "Contact Page",
  },
  {
    path: "/faqpage",
    component: FAQPage,
    name: "FAQ Page",
  },
  {
    path: "/aboutuspage",
    component: AboutUsPage,
    name: "About Us Page",
  },
  {
    path: "/faq-hieuropa",
    component: FAQHieuropaPage,
    name: "FAQ About Hieuropa Page",
  },
  {
    path: "/faq-assurance-habitation",
    component: FAQHabitationPage,
    name: "FAQ Assurance Habitation Page",
  },
  {
    path: "/faq-emergency-response",
    component: FAQEmergencyResponsePage,
    name: "FAQ Emergency Response Page",
  },
  {
    path: "/legal-notice",
    component: LegalNoticePage,
    name: "Legal Notice Page",
  },
  {
    path: "/cookies-page",
    component: CookiePage,
    name: "Cookies Page",
  },
  {
    path: "/privacy-policy-page",
    component: PrivacyPolicyPage,
    name: "Privacy Policy Page",
  },
  {
    path: "/CGU",
    component: CGUPage,
    name: "CGU Page",
  },
  {
    path: "/api/devis",
    component: ApiDevisPage,
    name: "API Assurance Habitation Devis",
  },
  {
    path: "/api/souscription",
    component: ApiSouscriptionPage,
    name: "API Assurance Habitation souscription",
  },
  {
    path: "/api/reparation",
    component: ApiReparationPage,
    name: "API Reparation d'urgence",
  },
  {
    path: "/api/ima-payment-page",
    component: PaymentIMAPage,
    name: "IMA payment page",
  },
  {
    path: "/api/confirmed-intervention",
    component: ConfirmedInterventionPage,
    name: "Confirmed Intervention Page",
  },
  {
    path: "/declaration-de-sinistre-page",
    component: DeclarationDeSinistrePage,
    name: "Pre-declaration De Sinistre Page",
  },
  {
    path: "/declaration-de-sinistre-summary-page",
    component: SummaryPage,
    name: "Pre-declaration De Sinistre Summary Page",
  },
  {
    path: "/declaration-de-sinistre-result-page",
    component: ResultPage,
    name: "Pre-declaration De Sinistre Result Page",
  },
];
