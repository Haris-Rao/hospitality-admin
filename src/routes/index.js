import { lazy } from "react";
import { FaHotel } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";

const Login = lazy(() => import("../pages/Login"));
// const Notifications = lazy(() => import("../pages/Notifications"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const HotelManagement = lazy(() => import("../pages/HotelManagement"));
const HotelDetails = lazy(() =>
  import("../pages/HotelManagement/HotalDetails")
);
const ProfileSettings = lazy(() => import("../pages/ProfileSettings"));

const CreateHotel = lazy(() => import("../pages/HotelManagement/CreateHotel"));

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
  {
    path: "/hotel-management/:id",
    exact: true,
    protected: true,
    showInSidebar: false,
    title: "Hotel Details",
    element: <HotelDetails />,
  },
  {
    path: "/hotel-management/create",
    exact: true,
    protected: true,
    showInSidebar: false,
    title: "Create Hotel",
    element: <CreateHotel />,
  },
  {
    path: "/profile-setting",
    exact: true,
    protected: true,
    showInSidebar: false,
    title: "Profile Settings",
    element: <ProfileSettings />,
  },
];
