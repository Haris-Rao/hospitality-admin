"use client";

import React from "react";
import classes from "./BreadCrumbComponent.module.css";
import { useNavigate } from "react-router-dom";

export default function BreadCrumbComponent({ data = breadCrumbDummy }) {
  const navigate = useNavigate();
  return (
    <div className={classes.breadcrumb}>
      {data.map((item, index) => (
        <div key={index}>
          <p
            className={index === data.length - 1 && classes.active}
            onClick={() => index !== data.length - 1 && navigate(item?.value)}
          >
            {item.label}
          </p>
          {index !== data.length - 1 && <span>{" > "}</span>}
        </div>
      ))}
    </div>
  );
}

const breadCrumbDummy = [
  {
    label: "Hotel Management",
    value: "/hotel-management",
  },
  {
    label: "Hotel Details",
    value: "/hotel-management/1",
  },
];
