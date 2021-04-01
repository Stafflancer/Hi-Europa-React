import * as React from "react";
import Dashboard from "../components/pages/admin/Dashboard";
import Users from "../components/pages/admin/User";
import UsersAdd from "../components/pages/admin/User/UsersAdd";
import MyProfile from "../components/pages/admin/MyProfile";
import Quotation from "../components/pages/admin/Quotation";
import Contract from "../components/pages/admin/Contract";
import Resiliation from "../components/pages/admin/Resiliation";
import WakamService from "../components/pages/admin/WakamService";
import ImaService from "../components/pages/admin/ImaService";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory({
  hashType: "slash",
  basename: ""
});

export const routes = [
  {
    path: "/admin/dashboard",
    component: Dashboard,
    name: "dashboard"
  },
  {
    path: "/admin/user",
    component: Users,
    name: "User"
  },
  {
    path: "/admin/user/:id",
    component: UsersAdd,
    name: "UsersAdd"
  },
  {
    path: "/admin/my-profile",
    component: MyProfile,
    name: "MyProfile"
  },
  {
    path: "/admin/quotation",
    component: Quotation,
    name: "Quotation"
  },
  {
    path: "/admin/contract",
    component: Contract,
    name: "Contract"
  },
  {
    path: "/admin/resiliation",
    component: Resiliation,
    name: "Resiliation"
  },
  {
    path: "/admin/wakam",
    component: WakamService,
    name: "WakamService"
  },
  {
    path: "/admin/ima",
    component: ImaService,
    name: "ImaService"
  },
];
