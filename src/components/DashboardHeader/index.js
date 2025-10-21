"use client";
import { isValidElement } from "react";
import classes from "./DashboardHeader.module.css";

export default function DashboardHeader({ heading, subHeading, children }) {
  return (
    <div className={classes.dashboardHeader}>
      <div className={classes.contentContainer}>
        {heading && <h2 className={classes.heading}>{heading}</h2>}
        {subHeading && isValidElement(subHeading) ? (
          subHeading
        ) : (
          <p className={classes.subHeading}>{subHeading}</p>
        )}
      </div>
      <div className={classes.filterContainer}>{children}</div>
    </div>
  );
}
