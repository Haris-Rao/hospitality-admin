"use client";

import React from "react";
import classes from "./BreadCrumbComponent.module.css";
import { useRouter } from "next/navigation";

export default function BreadCrumbComponent({ data = breadCrumbDummy }) {
  const router = useRouter();
  return (
    <div className={classes.breadcrumb}>
      {data.map((item, index) => (
        <div key={index}>
          <p
            className={index === data.length - 1 && classes.active}
            onClick={() =>
              index !== data.length - 1 && router.push(item?.value)
            }
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
    label: "Employee Management",
    value: "/employees",
  },
  {
    label: "Group Details",
    value: "/employees/1",
  },
];
