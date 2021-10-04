// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Register from "@material-ui/icons/GroupAdd";
import Login from "@material-ui/icons/LockOpen";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/EditUserProfile.jsx";
import ClientProfile from "views/UserProfile/ClientProfile.jsx";
import WorkerProfile from "views/UserProfile/WorkerProfile.jsx";
import ServiceProviders from "views/Lists/ServiceProviders.jsx";
import Clients from "views/Lists/Clients.jsx";
import Jobs from "views/Lists/Jobs";
import JobDetails from "./views/Lists/JobDetails";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
// core components/views for Auth layout
import LoginPage from "views/Pages/LoginPage.jsx";
import RegisterPage from "views/Pages/RegisterPage.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/client/:id",
    name: "Client Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: ClientProfile,
    layout: "/admin"
  },
  {
    path: "/service-provider/:id",
    name: "Service Provider Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: WorkerProfile,
    layout: "/admin"
  },
  {
    path: "/job-details/:id",
    name: "Job Description",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: JobDetails,
    layout: "/admin"
  },
  {
    path: "/clients",
    name: "Clients",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Clients,
    layout: "/admin"
  },
  {
    path: "/service-providers",
    name: "Service Providers",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ServiceProviders,
    layout: "/admin"
  },
  {
    path: "/jobs",
    name: "Jobs",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Jobs,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/login-page",
    name: "Login Page",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Login,
    component: LoginPage,
    layout: "/auth"
  },
  {
    path: "/register-page",
    name: "Register Page",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Register,
    component: RegisterPage,
    layout: "/auth"
  }
 
];

export default dashboardRoutes;
