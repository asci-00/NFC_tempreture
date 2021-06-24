// core components
import Dashboard from "views/admin/Dashboard.js";
import Login from "views/auth/Login.js";
import Maps from "views/admin/Maps.js";
import Profile from "views/admin/Profile.js";
import Register from "views/auth/Register.js";
import Tables from "views/admin/Tables.js";
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
    path: "/tables",
    name: "계정관리",
    icon: FormatListBulleted,
    iconColor: "Error",
    component: Tables,
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
