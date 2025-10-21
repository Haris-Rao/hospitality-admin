import Logo from "@/components/Logo";
import { routes } from "@/routes";
import { usePathname, useRouter } from "next/navigation";
import { cloneElement, useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { GoSidebarCollapse } from "react-icons/go";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./SideBar.module.css";

const SideBar = ({ isCollapsed, setIsCollapsed, isMobile, setIsOpen }) => {
  const { user } = useSelector((state) => state.authReducer);

  const [popper, setPopper] = useState(null);
  const router = useNavigate();

  const Links = routes;

  return (
    <div className={classes?.mainContainer}>
      <div className={classes?.logoContainer} onClick={() => router.push("/")}>
        <Logo
          variant={"logo"}
          type={"header"}
          isCollapsed={isCollapsed}
          disableMobileChange={true}
        />
      </div>
      <div
        className={classes.toggler}
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        <GoSidebarCollapse
          className={!isCollapsed ? classes.toggleIcon : ""}
          cursor={"pointer"}
          size={22}
        />
      </div>
      <div
        className={[
          classes.itemsContainer,
          isCollapsed && classes.isCollapsedContainer,
          isMobile && classes.isMobile,
        ].join(" ")}
      >
        {isCollapsed && popper && (
          <span
            className={classes.popper}
            style={{ top: `${popper.pos + 16}px` }}
          >
            {popper.value}
          </span>
        )}
        <div
          className={[
            classes.items,
            isCollapsed && classes.itemsCollapsed,
          ].join(" ")}
        >
          {Links?.map((item, index) => {
            return (
              <RenderItem
                icon={item?.icon}
                title={item?.title}
                path={item?.path}
                setIsOpen={setIsOpen}
                subMenu={item?.subMenu}
                isCollapsed={isCollapsed}
                key={index}
                setPopper={setPopper}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

const RenderItem = ({
  icon,
  title,
  subMenu = [],
  path,
  isCollapsed,
  setPopper,
  setIsOpen,
}) => {
  const pathname = usePathname();
  const active = pathname === path ? true : false;
  const [subnav, setSubnav] = useState(false);
  const subActive = subMenu.find((item) => item?.path == pathname);
  const router = useRouter();
  const showSubnav = () => setSubnav(!subnav);
  useEffect(() => {
    const allPaths = subMenu.map((item) => item?.path);
    if (allPaths.includes(pathname)) {
      setSubnav(true);
    }
  }, []);

  return (
    <>
      <span
        className={[
          classes?.listItemContainer,
          (active || subnav) && classes?.active,
          subActive && classes?.subActive,
          subnav &&
            [isCollapsed ? classes?.isCollapsedSubnav : classes.subnav].join(
              " "
            ),
          isCollapsed ? classes.isCollapsed : "",
        ].join(" ")}
        onMouseEnter={(e) => {
          setPopper({
            pos: e.target.offsetTop - e.target.parentElement.scrollTop,
            value: title,
          });
        }}
        onMouseLeave={() => {
          setPopper(null);
        }}
        data-title={title}
        // href={subMenu?.length > 0 ? "#" : path}
        onClick={() => {
          if (subMenu?.length > 0) {
            showSubnav(!subnav);
          } else {
            if (path != "#") {
              setIsOpen(false);
              router.push(path);
            }
          }
        }}
      >
        {icon &&
          cloneElement(icon, {
            color: "var(--icon-color)",
            className: classes.icon,
          })}
        {!isCollapsed && <span>{title}</span>}
        {subMenu?.length > 0 && !isCollapsed && (
          <FiChevronUp size={20} className={classes?.dropDownIcon} />
        )}
      </span>

      {subnav && (
        <div
          className={[
            classes?.subMenu,
            isCollapsed ? classes.submenuIsCollapsed : "",
          ].join(" ")}
        >
          {subMenu.map((item, index) => {
            return (
              <span
                onClick={() => {
                  if (item?.path != "#") {
                    router.push(item?.path);
                  }
                }}
                className={[
                  classes?.innerItemContainer,
                  isCollapsed
                    ? classes.isCollapsed
                    : classes?.notCollapsedInnercontainer,
                  subActive?.path === item?.path && classes?.innerItemSubActive,
                ].join(" ")}
                onMouseEnter={(e) => {
                  setPopper({
                    pos:
                      e.target.offsetTop +
                      e.target.parentElement.offsetTop -
                      e.target.parentElement.parentElement.scrollTop -
                      10,
                    value: item?.title,
                  });
                }}
                onMouseLeave={(e) => {
                  setPopper(null);
                }}
                data-title={item?.title}
                key={index}
                to={item?.path}
              >
                {item?.icon &&
                  isCollapsed &&
                  cloneElement(item?.icon, {
                    size: 20,
                    color: "var(--text-color)",
                    className: classes.innerIcon,
                  })}
                {!isCollapsed && <span>{item?.title}</span>}
              </span>
            );
          })}
        </div>
      )}
    </>
  );
};
