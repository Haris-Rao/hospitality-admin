"use client";
import { cn, RenderToast } from "@/helper/HelperFunction";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isMobileViewHook } from "../../customHooks/isMobileViewHook";
import DesktopHeader from "./DesktopHeader";
import classes from "./Header.module.css";
import { MobileHeader } from "./MobileHeader";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const DashboardNav = ({ noLinks }) => {
  const type = useSearchParams();
  const { user } = useSelector((state) => state?.authReducer);
  const navigate = useNavigate();
  const paymentStatus = useSearchParams();
  const pathname = useLocation().pathname;
  const splitPath = pathname.split("/");
  const isSecondaryHeader =
    splitPath[1] === "profile-setting" || splitPath?.length > 2;
  const { isLogin } = useSelector((state) => state?.authReducer);
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const links = {
    loggedOut: [
      { label: "Dashboard", value: "/dashboard" },
      { label: "Hotel Management", value: "/hotel-management" },
      { label: "Call Logs", value: "/call-logs" },
      { label: "Chat Management", value: "/chat-management" },
      { label: "Profile Settings", value: "/profile-setting" },
    ],
    loggedIn: [
      { label: "Dashboard", value: "/dashboard" },
      { label: "Hotel Management", value: "/hotel-management" },
      { label: "Call Logs", value: "/call-logs" },
      { label: "Chat Management", value: "/chat-management" },
      { label: "Profile Settings", value: "/profile-setting" },
    ],
    customer: [],
  };

  const HeaderButtons = [
    ...(!isLogin
      ? [
          {
            value: "https://play.google.com/store",
            label: "Get The App",
            variant: "primary",
            target: "_blank",
          },
        ]
      : []),
  ];

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 151) setSticky(true);
      else setSticky(false);
    });
    isMobileViewHook(setIsMobile, 1024);
    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);
  useEffect(() => {
    if (type == "booking") {
      if (paymentStatus == "true") {
        RenderToast({
          type: "success",
          message: "Booking Successful",
        });
      } else if (paymentStatus == "false") {
        RenderToast({
          type: "error",
          message: "Booking Failed",
        });
      }
      if (["true", "false"]?.includes(paymentStatus)) {
        setTimeout(() => {
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
          navigate(window.location.pathname);
        }, 3000);
      }
    }
  }, [type, paymentStatus]);

  return (
    <header
      style={{
        ...(isSticky && {
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          animation: "headerInAnimation 0.2s ease-in forwards",
          backgroundColor: "var(--background)",
        }),

        ...(!isSticky && {
          position: noLinks ? "relative" : "absolute",
          left: 0,
          right: 0,
          top: "0",
          backgroundColor: "transparent",
        }),
        zIndex: 99,
      }}
      className={cn(classes.header, isSticky && classes.stickyClass)}
    >
      {isMobile ? (
        <MobileHeader
          links={noLinks ? [] : links}
          HeaderButtons={HeaderButtons}
          variant={isSecondaryHeader}
          isSticky={isSticky}
        />
      ) : (
        <DesktopHeader
          links={noLinks ? [] : links}
          HeaderButtons={HeaderButtons}
          variant={isSecondaryHeader}
          isSticky={isSticky}
        />
      )}
    </header>
  );
};

export default DashboardNav;

DashboardNav.propTypes = {
  backgroundColor: PropTypes.string,
  containerClass: PropTypes.string,
  className: PropTypes.string,
  logo: PropTypes.object,
  customStyle: PropTypes.object,
};
const commonRoutes = [
  {
    label: "Home",
    value: "/",
  },
  {
    label: "About",
    value: "/about",
  },
  {
    label: "Services",
    value: "/services",
  },
  {
    label: "Airports",
    value: "/our-parking",
  },
  {
    label: "Contact",
    value: "/contact",
  },
];
const customerRoutes = [
  {
    label: "My Bookings",
    value: "/my-bookings",
  },
  {
    label: "Profile Setting",
    value: "/profile-setting",
  },
];
const operatorRoutes = [
  {
    label: "Dashboard",
    value: "/dashboard",
  },
  {
    label: "Profile Setting",
    value: "/profile-setting",
  },
];
const mobileLinks = {
  loggedOut: [...commonRoutes, { label: "Sign Up", value: "/sign-up" }],
  loggedIn: commonRoutes,
};
