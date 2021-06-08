import * as React from "react";
import Dashboard from "../components/pages/admin/Dashboard";
import Users from "../components/pages/admin/User";
import UsersDetails from "../components/pages/admin/User/UsersDetails";
import MyProfile from "../components/pages/admin/MyProfile";
import Quotation from "../components/pages/admin/Quotation";
import Resident from "../components/pages/admin/Resident";
import ResidentDetails from "../components/pages/admin/Resident/ResidentDetails";

import QuotationDetails from "../components/pages/admin/Quotation/QuotationDetails";

import ImaQuotation from "../components/pages/admin/ImaQuotation";
import ImaQuotationDetails from "../components/pages/admin/ImaQuotation/ImaQuotationDetails";

import ImaUser from "../components/pages/admin/ImaUser";
import ImaUsersDetails from "../components/pages/admin/ImaUser/ImaUsersDetails";

import Contract from "../components/pages/admin/Contract";
import ContractDetails from "../components/pages/admin/Contract/ContractDetails";
import Resiliation from "../components/pages/admin/Resiliation";
import ResiliationDetails from "../components/pages/admin/Resiliation/ResiliationDetails.js";
import WakamService from "../components/pages/admin/WakamService";
import ImaService from "../components/pages/admin/ImaService";
import Intervention from "../components/pages/admin/Intervention";
import InterventionDetails from "../components/pages/admin/Intervention/InterventionDetails";
import ProspectDetails from "../components/pages/admin/Prospect/ProspectDetails";
import Prospect from "../components/pages/admin/Prospect";
import { createBrowserHistory } from "history";
import Admin from "../components/pages/admin/Admin";
import AdminDetails from "../components/pages/admin/Admin/AdminDetails";

export const history = createBrowserHistory({
  hashType: "slash",
  basename: "",
});

export const routes = [
  {
    path: "/admin/dashboard",
    component: Dashboard,
    name: "dashboard",
  },
  {
    path: "/admin/user",
    component: Users,
    name: "User",
  },
  {
    path: "/admin/user/:id",
    component: UsersDetails,
    name: "UsersDetails",
  },
  {
    path: "/admin/my-profile",
    component: MyProfile,
    name: "MyProfile",
  },
  {
    path: "/admin/admin",
    component: Admin,
    name: "Admin",
  },
  {
    path: "/admin/admin/:id",
    component: AdminDetails,
    name: "AdminDetails",
  },
  {
    path: "/admin/quotation",
    component: Quotation,
    name: "Quotation",
  },
  {
    path: "/admin/quotation/:id",
    component: QuotationDetails,
    name: "QuotationDetails",
  },
  {
    path: "/admin/contract/:id",
    component: ContractDetails,
    name: "ContractDetails",
  },
  {
    path: "/admin/contract",
    component: Contract,
    name: "Contract",
  },
  {
    path: "/admin/resiliation",
    component: Resiliation,
    name: "Resiliation",
  },
  {
    path: "/admin/resiliation/:id",
    component: ResiliationDetails,
    name: "ResiliationDetails",
  },
  {
    path: "/admin/wakam",
    component: WakamService,
    name: "WakamService",
  },
  {
    path: "/admin/prospect",
    component: Prospect,
    name: "Prospect",
  },
  {
    path: "/admin/prospect/:id",
    component: ProspectDetails,
    name: "ProspectDetails",
  },
  {
    path: "/admin/resident",
    component: Resident,
    name: "Resident",
  },
  {
    path: "/admin/resident/:id",
    component: ResidentDetails,
    name: "ResidentDetails",
  },
  {
    path: "/admin/ima",
    component: ImaService,
    name: "ImaService",
  },
  // ima
  {
    path: "/admin/ima-user",
    component: ImaUser,
    name: "ImaUser",
  },
  {
    path: "/admin/ima-user/:id",
    component: ImaUsersDetails,
    name: "ImaUsersDetails",
  },
  {
    path: "/admin/ima-quotation",
    component: ImaQuotation,
    name: "ImaQuotation",
  },
  {
    path: "/admin/ima-quotation/:id",
    component: ImaQuotationDetails,
    name: "ImaQuotationDetails",
  },

  {
    path: "/admin/intervention",
    component: Intervention,
    name: "Intervention",
  },
  {
    path: "/admin/intervention/:id",
    component: InterventionDetails,
    name: "InterventionDetails",
  },
];
