import React, { useState } from "react";
import classes from "./Cms.module.css";
import TabsComponent from "@/components/Core/TabsComponent";
import HomeCms from "./HomeCms";
import SideBarSkeleton from "@/components/Core/SideBarSkeleton";

export default function Cms() {
  const [tab, setTab] = useState(cmsTabOptions[0]);
  return (
    <SideBarSkeleton>
      <div className={classes.mainWrapper}>
        <h4>Content Management System</h4>
        <TabsComponent data={cmsTabOptions} value={tab} onClick={setTab} />
        <div className={classes.pageWrapper}>
          <HomeCms />
        </div>
      </div>
    </SideBarSkeleton>
  );
}

const cmsTabOptions = [
  {
    label: "Home",
    value: "home",
  },
  {
    label: "Features",
    value: "features",
  },
  {
    label: "About",
    value: "about",
  },
  {
    label: "Contact Us",
    value: "contact",
  },
  {
    label: "Footer",
    value: "footer",
  },
];
