import * as React from "react";
import ApiDevisPage from "components/pages/apiLayout/ApiDevisPage";
import ApiSouscriptionPage from "components/pages/apiLayout/ApiSouscriptionPage";
import ApiReparationPage from "components/pages/apiLayout/ApiReparationPage";
import PaymentIMAPage from "components/pages/apiLayout/PaymentIMAPage";
import ConfirmedInterventionPage from "components/pages/apiLayout/ConfirmedInterventionPage";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory({
  hashType: "slash",
  basename: "",
});

export const routes = [
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
];
