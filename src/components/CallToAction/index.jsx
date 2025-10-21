import Image from "next/image";
import React from "react";
import classes from "./CallToAction.module.css";

const CallToAction = ({ data }) => {
  return (
    <div className={classes.callToActionItem}>
      <div className={classes.callToActionIcon}>
        <div className={classes.callToActionIconImage}>
          <Image src={data?.icon} alt={data?.text} fill />
        </div>
      </div>
      <p>{data?.text}</p>
    </div>
  );
};

export default CallToAction;
