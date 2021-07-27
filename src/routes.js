// core components
import Dashboard from "views/admin/Dashboard.js";
import Login from "views/auth/Login.js";
import Maps from "views/admin/Maps.js";
import Profile from "views/admin/Profile.js";
import Register from "views/auth/Register.js";
import Account from "views/admin/Account.js";
import Terminal from "views/admin/Terminal.js";
import Kiosk from "views/admin/Kiosk.js";
// @material-ui/icons components
import AccountCircle from "@material-ui/icons/AccountCircle";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import LocationOn from "@material-ui/icons/LocationOn";
import Person from "@material-ui/icons/Person";
import Tv from "@material-ui/icons/Tv";
import VpnKey from "@material-ui/icons/VpnKey";

var routes = [
  {
    path: "/index",
    name: "대시보드",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  }, {
    path: "/maps",
    name: "동선파악",
    icon: LocationOn,
    iconColor: "Warning",
    component: Maps,
    layout: "/admin",
  }, {
    path: "/accounts",
    name: "계정관리",
    icon: FormatListBulleted,
    iconColor: "Error",
    component: Account,
    layout: "/admin",
  }, {
    path: "/tables",
    name: "Kiosk관리",
    icon: FormatListBulleted,
    iconColor: "Error",
    component: Kiosk,
    layout: "/admin",
  }, {
    path: "/terminal",
    name: "사용자관리",
    icon: FormatListBulleted,
    iconColor: "Error",
    component: Terminal,
    layout: "/admin",
  }, {
    path: "/user-profile",
    name: "정보변경",
    icon: Person,
    iconColor: "WarningLight",
    component: Profile,
    layout: "/admin",
  }, {
    path: "/index",
    name: "대시보드",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/user",
  }, {
    path: "/login",
    name: "Login",
    icon: VpnKey,
    iconColor: "Info",
    component: Login,
    layout: "/auth",
  }, {
    path: "/register",
    name: "Register",
    icon: AccountCircle,
    iconColor: "ErrorLight",
    component: Register,
    layout: "/auth",
  }
];
export default routes;
