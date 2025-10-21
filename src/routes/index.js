import { lazy } from "react";
import { RxDashboard } from "react-icons/rx";

const Login = lazy(() => import("../pages/Login"));
// const Notifications = lazy(() => import("../pages/Notifications"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
export const routes = [
  {
    path: "/login",
    exact: true,
    protected: false,
    showInSidebar: false,
    title: "Login",
    element: <Login />,
  },
  {
    path: "/",
    exact: true,
    protected: true,
    showInSidebar: true,
    title: "Dashboard",
    icon: <RxDashboard />,
    element: <Dashboard />,
  },
];
