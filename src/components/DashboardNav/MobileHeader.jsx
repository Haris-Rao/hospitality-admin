import { cn, handleSignOut } from "@/helper/HelperFunction";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import classes from "./MobileHeader.module.css";
import Logo from "../Logo";
import ThemeSelector from "../ThemeSelector";
import { useLocation, useNavigate } from "react-router-dom";
import { signOutRequest } from "@/store/auth/authSlice";

export const MobileHeader = ({
  logo = "/images/Logo_Black.png",
  links,
  HeaderButtons,
  variant,
  isSticky,
}) => {
  const { user, isLogin } = useSelector((state) => state?.authReducer);
  const { unreadNotification } = useSelector((state) => state?.commonReducer);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    if (!isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  };

  return (
    <>
      <Container>
        <div className={classes.header}>
          <div className={classes.imageContainer} onClick={() => navigate("/")}>
            <Logo type={"header"} customClass={classes.headerLogo} />
          </div>
          <div className={classes.actions}>
            {isLogin && (
              <>
                <span
                  className={cn(
                    classes.notificationIcon,
                    isSticky && classes.sticky
                  )}
                  onClick={() => {
                    navigate("/notifications");
                  }}
                >
                  {unreadNotification > 0 && (
                    <div className={classes.unreadNotification}>
                      {unreadNotification > 9 ? "9+" : unreadNotification}
                    </div>
                  )}
                  <IoMdNotificationsOutline
                    color={"var(--white-color)"}
                    size={28}
                    onClick={() => navigate("/notifications")}
                  />
                </span>
                {/* <Separator /> */}
                {/* <UserPopover user={user} /> */}
              </>
            )}
            <ThemeSelector />
            <RxHamburgerMenu
              className={`${classes.hamburger} ${
                variant && classes.secondaryHamburger
              }`}
              onClick={() => {
                toggleDrawer();
              }}
              color={"var(--text-color)"}
            />
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className={classes.drawer}
          overlayClassName={classes.overlay}
        >
          <div>
            <div className={classes.drawerUserSection}>
              <div className={classes.drawerUserImage}>
                <Logo variant="footer" type="footer" />
              </div>
            </div>
            <div className={classes.drawerList}>
              <>
                {links[isLogin ? "loggedIn" : "loggedOut"]?.map(
                  (item, index) => (
                    <RenderListItem
                      key={index}
                      icon={item?.icon && item?.icon}
                      text={item?.label}
                      path={item?.value}
                      subMenu={item?.submenu}
                      onClick={item?.onClick}
                      toggleDrawer={toggleDrawer}
                    />
                  )
                )}
                {/* <hr
                  style={{
                    width: "100%",
                    marginBottom: "0px",
                    borderTop: `1px solid var("--border-color")`,
                  }}
                /> */}
                {/* {HeaderButtons?.filter((el) => !el?.component)?.map(
                  (item, index) => (
                    <RenderListItem
                      key={index}
                      icon={item?.icon && item?.icon}
                      text={item?.label}
                      path={item?.value}
                      target={item?.target}
                      onClick={item?.onClick}
                      subMenu={item?.submenu}
                      toggleDrawer={toggleDrawer}
                    />
                  )
                )} */}
                {/* {isLogin && ( */}
                <>
                  <RenderListItem text={"Logout"} path={"logout"} />
                </>
                {/* )} */}
              </>
            </div>
          </div>
        </Drawer>
      </Container>
    </>
  );
};

const RenderListItem = ({
  icon,
  text,
  customClass,
  user,
  path,
  onClick,
  subMenu,
  toggleDrawer,
  target,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();
  const handleLanguageChange = (val) => {};

  const logout = () => {
    dispatch(signOutRequest());
    navigate("/");
  };
  console.log(pathname, path);
  return (
    <>
      <div
        className={[
          classes.listItem,
          customClass,
          pathname == path && classes.activeItem,
        ].join(" ")}
        onClick={() => {
          if (subMenu) {
            setIsOpen((prev) => !prev);
            return;
          }
          if (onClick) {
            onClick(text);
            return;
          }
          if (path.toLowerCase() == "logout") {
            logout();
            toggleDrawer();
          } else {
            toggleDrawer();
            if (target) {
              window.open(path, target);
            } else {
              navigate(path);
            }
          }
        }}
      >
        {icon}
        <span className={classes.listItemText}>
          {text}
          {subMenu ? (
            isOpen ? (
              <span className={classes.icon}>
                <FaChevronUp size={12} />
              </span>
            ) : (
              <span className={classes.icon}>
                <FaChevronDown size={12} />
              </span>
            )
          ) : (
            ""
          )}
        </span>
      </div>
      {isOpen && (
        <div className={classes.subMenu}>
          {subMenu?.map((link, index) => (
            <div
              onClick={() => handleLanguageChange(link)}
              className={classes.subMenuItem}
              key={link?.id}
            >
              <p>{link?.label}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
