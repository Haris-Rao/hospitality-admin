import React from "react";
import classes from "./SubscriptionInfoCard.module.css";
import Statuses from "../Core/Statuses";
import { formatDate } from "@/helper/HelperFunction";

const SubscriptionInfoCard = ({ data }) => {
  return (
    <div className={classes.subscriptionInfoCard}>
      <div className={classes.cardHeader}>
        <div className={classes.cardContent}>
          <span>Subscription Plan</span>
          <h3>{data?.type || "Premium"}</h3>
        </div>
        <Statuses status={data?.status || "active"} />
      </div>
      <div className={classes.cardBody}>
        <div className={classes.cardBodyContent}>
          <span>Last Payment Date</span>
          <h3>{formatDate(data?.lastPaymentDate) || "July 15, 2025"}</h3>
        </div>
        <div className={classes.cardBodyContent}>
          <span>Expiry Date</span>
          <h3>{formatDate(data?.expiryDate) || "August 15, 2025"}</h3>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionInfoCard;
