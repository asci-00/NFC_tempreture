// core components
// @material-ui/icons components
import AccountCircle from "@material-ui/icons/AccountCircle";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import LocationOn from "@material-ui/icons/LocationOn";
import Person from "@material-ui/icons/Person";
import Tv from "@material-ui/icons/Tv";
import VpnKey from "@material-ui/icons/VpnKey";
import Account from "views/admin/Account.js";
import Dashboard from "views/admin/Dashboard.js";
import Kiosk from "views/admin/Kiosk.js";
import Profile from "views/admin/Profile.js";
import UserManage from "views/admin/UserManage.js";
import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";

var routes = [
  {
    path: "/index",
    name: "대시보드",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  }, {
    path: "/user-manage",
    name: "사용자관리",
    icon: LocationOn,
    iconColor: "Warning",
    component: UserManage,
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
    path: "/user-profile",
    name: "정보변경",
    icon: Person,
    iconColor: "WarningLight",
    component: Profile,
    layout: "/admin",
  },

  {
    path: "/index",
    name: "대시보드",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/user",
  }, {
    path: "/tables",
    name: "Kiosk관리",
    icon: FormatListBulleted,
    iconColor: "Error",
    component: Kiosk,
    layout: "/user",
  }, {
    path: "/user-profile",
    name: "정보변경",
    icon: Person,
    iconColor: "WarningLight",
    component: Profile,
    layout: "/user",
  },

  {
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
