import * as React from "react";
// import Dashboard from "../components/pages/admin/Dashboard";
// import Users from "../components/pages/admin/User";
// import UsersAdd from "../components/pages/admin/User/UsersAdd";
// import MyProfile from "../components/pages/admin/MyProfile";
// import WakamService from "../components/pages/admin/WakamService";
// import ImaService from "../components/pages/admin/ImaService";
import HomePage from "components/pages/pageLayout/HomePage";
import EmergencyTroubleshootingPage from "components/pages/pageLayout/EmergencyTroubleshootingPage";
import HomeInsurancePage from "components/pages/pageLayout/HomeInsurancePage";
import ContactPage from "components/pages/pageLayout/ContactPage";
import FAQPage from "components/pages/pageLayout/FAQPage";
import AboutUsPage from "components/pages/pageLayout/AboutUsPage";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory({
  hashType: "slash",
  basename: ""
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
];
