"use client";

import { AfterLoginHeader } from "@/components/Header/AfterLoginHeader";
import { isMobileViewHook } from "@/customHooks/isMobileViewHook";
import { cn } from "@/helper/HelperFunction";
import moment from "moment";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "react-modern-drawer";
import { Link, useLocation, useParams } from "react-router-dom";
import SideBar from "../SideBar";
import classes from "./SideBarSkeleton.module.css";
const SideBarSkeleton = ({
  children,
  footerVisible = false,
  headerHeading,
  noPageBg = false,
  lang,
}) => {
  const pathname = useLocation();
  const { slug } = useParams();
  const splitBySlashPathname = pathname.split("/");
  const pathNameLast = splitBySlashPathname[splitBySlashPathname?.length - 1];
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    isMobileViewHook((e) => {
      setIsMobile(e);
      if (e) {
        setIsCollapsed(false);
      }
    });
  }, []);
  const header = {
    "edit-points": "Project: {slug}",
  };
  return (
    <>
      <style>{`
        .drawerContainer{
          width:320px !important;
          background-color:transparent !important;
        }
        @media (max-width:768px){
          .drawerContainer{
            width:290px !important;
          }
        }
    `}</style>
      <div className={`${classes.wrapper} g-0`}>
        <div
          className={[
            !isMobile ? classes.sidebarDiv : classes.sidebarOnMobileDiv,
            isCollapsed ? classes.iscollapsed : "",
          ].join(" ")}
        >
          {!isMobile ? (
            <SideBar
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              lang={lang}
              setIsOpen={setIsOpen}
            />
          ) : (
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="left"
              className="drawerContainer"
            >
              <SideBar
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
                isMobile={isMobile}
                lang={lang}
                setIsOpen={setIsOpen}
              />
            </Drawer>
          )}
        </div>
        <div
          className={[
            !isMobile ? classes.contentDiv : classes.contentOnMobileDiv,
            isCollapsed ? classes.contentIsCollapsed : "",
          ].join(" ")}
        >
          <AfterLoginHeader
            drawerBtn={
              isMobile && (
                <GiHamburgerMenu
                  className={[classes.GiHamburgerMenuMobile]}
                  onClick={() => {
                    toggleDrawer();
                  }}
                />
              )
            }
            lang={lang}
            header={headerHeading}
          />
          <div className={cn(classes.pageMain, classes.noPageBg)}>
            {children}
          </div>
        </div>
        {footerVisible && (
          <div className={classes.footer}>
            <p>Copyright {moment().format("YYYY")}, All Rights Reserved</p>
            <div className={classes.links}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span className={classes.seprator}></span>
              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SideBarSkeleton;
