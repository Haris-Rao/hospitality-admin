import React from "react";
import classes from "./AlertCard.module.css";
import { IoEyeOutline } from "react-icons/io5";
import { TbAlertTriangleFilled } from "react-icons/tb";

const AlertCard = ({ data }) => {
  return (
    <div className={classes.alertCard}>
      <div className={classes.alertHeader}>
        <div className={classes.alertIcon}>
          <TbAlertTriangleFilled size={20} color={"var(--danger-color-v2)"} />
          <h3>{data?.title || "Missed Calls"}</h3>
        </div>
        <div className={classes.icon}>
          <IoEyeOutline size={16} color={"var(--text-color)"} />
        </div>
      </div>
      <div className={classes.alertContent}>
        <p>
          {data?.description ||
            "Reception missed 3 calls in the last hour. Action required!"}
        </p>
      </div>
    </div>
  );
};

export default AlertCard;
