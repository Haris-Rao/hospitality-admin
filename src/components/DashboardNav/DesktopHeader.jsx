"use-client";
import { Button } from "@/components/Core/Button";
import { isMobileViewHook } from "@/customHooks/isMobileViewHook";
import { cn } from "@/helper/HelperFunction";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import Separator from "../Core/Separator";
import UserPopover from "../Core/UserPopover";
import Logo from "../Logo";
import ThemeSwitcher from "../ThemeSwitcher";
import Style from "./DesktopHeader.module.css";

const DesktopHeader = ({
  logo = "/images/Logo_Black.png",
  links,
  HeaderButtons,
  variant,
  isSticky,
}) => {
  const params = useParams();
  const { user } = useSelector((state) => state?.authReducer);
  const { isLogin } = useSelector((state) => state?.authReducer);
  const router = useRouter();
  const pathname = usePathname();
  const splitPath = pathname.split("/");
  const activeItem = splitPath[1];

  const { unreadNotification } = useSelector((state) => state?.commonReducer);
  const [isMobile, setIsMobile] = useState(false);
  console.log(pathname);

  useEffect(() => {
    isMobileViewHook(setIsMobile, 992);
  }, []);
  useEffect(() => {
    if (isMobile) {
    }
  }, [isMobile]);

  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="lg" className={cn(Style.header)}>
        <div className={Style.headerLeft}>
          <div onClick={() => router.push("/")}>
            <Logo type={"header"} />
          </div>{" "}
          <div>
            {links[isLogin ? "loggedIn" : "loggedOut"]?.map((item, index) =>
              item?.submenu ? (
                <div className={Style.menuWithDropdown} key={index}>
                  <span
                    className={`${Style.nabarLinks} ${
                      variant && Style.secondaryNavbarLinks
                    }`}
                  >
                    {item?.label}
                    <FaChevronDown size={12} className={Style.chevDown} />
                  </span>
                  <div className={Style.dropdownMenu}>
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.value}
                        className={Style.dropdownItem}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  href={`${item?.value}`}
                  className={`${Style.nabarLinks} ${
                    variant && Style.secondaryNavbarLinks
                  } ${!isSticky && Style.stickyLinks} ${
                    `/${activeItem}` === item?.value && Style.activeItem
                  }`}
                >
                  {item?.label}
                </Link>
              )
            )}
          </div>
        </div>
        <Nav gap={5} className={Style.nav}></Nav>
        {/* <ThemeSwitcher /> */}
        <div className={Style.dflex}>
          <>
            <div className={Style.notificationContainer}>
              <ThemeSwitcher />
              <span
                className={cn(Style.actionsIcon, Style.notificationIcon)}
                onClick={() => {
                  router.push("/notifications");
                }}
              >
                {unreadNotification > 0 && (
                  <span className={Style.unreadNotification}>
                    {unreadNotification > 9 ? "9+" : unreadNotification}
                  </span>
                )}
                <IoMdNotificationsOutline
                  color={"var(--primary-color)"}
                  size={22}
                  onClick={() => router.push("/notifications")}
                />
              </span>
              <span className={Style.notificationText}>Notification</span>
            </div>
            <div className={Style.userPopoverContainer}>
              <UserPopover user={user} />
            </div>
          </>
        </div>
      </Navbar>
    </Container>
  );
};

export default DesktopHeader;
