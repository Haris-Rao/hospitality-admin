import { lazy } from "react";
import { FaHotel } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";

const Login = lazy(() => import("../pages/Login"));
// const Notifications = lazy(() => import("../pages/Notifications"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const HotelManagement = lazy(() => import("../pages/HotelManagement"));
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
  {
    path: "/hotel-management",
    exact: true,
    protected: true,
    showInSidebar: true,
    title: "Hotel Management",
    icon: <FaHotel />,
    element: <HotelManagement />,
  },
];
