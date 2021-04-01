import * as React from "react";
import ApiDevisPage from "components/pages/apiLayout/ApiDevisPage/ApiDevisPage";
import ApiReparationPage from "components/pages/apiLayout/ApiReparationPage";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory({
  hashType: "slash",
  basename: ""
});

export const routes = [
  {
    path: "/api/devis",
    component: ApiDevisPage,
    name: "API Assurance Habitation Devis",
  },
  {
    path: "/api/reparation",
    component: ApiReparationPage,
    name: "API Reparation d'urgence",
  },
];
