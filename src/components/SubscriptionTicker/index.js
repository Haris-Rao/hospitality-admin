"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NewsTicker } from "../NewsTicker";
import classes from "./SubscriptionTicker.module.css";
import { formatDate } from "@/helper/HelperFunction";
import { SUBSCRIPTION_STATUS } from "@/constant/constants";

const SubscriptionTicker = () => {
  const { user } = useSelector((state) => state.authReducer);
  const [statusArray, setStatusArray] = useState([]);
  useEffect(() => {
    if (user?.subscription?.status === SUBSCRIPTION_STATUS.CANCELLED) {
      setStatusArray([
        {
          text: `Your subscription has been cancelled.  Your plan will end on ${formatDate(
            user?.subscription?.endDate
          )}`,
          color: "#E74C3C",
        },
      ]);
    } else if (user?.subscription?.status === SUBSCRIPTION_STATUS.ACTIVE) {
      setStatusArray([]);
    } else if (user?.subscription?.status === SUBSCRIPTION_STATUS.EXPIRED) {
      setStatusArray([
        {
          text: `Your subscription has expired.`,
          color: "#E74C3C",
        },
      ]);
    }
  }, [user?.subscription]);

  return (
    <>
      {statusArray.length > 0 && (
        <div className={classes.container}>
          <div
            className={classes.ticker}
            style={{
              backgroundColor: statusArray[0]?.color,
            }}
          >
            <NewsTicker slides={statusArray} />
          </div>
        </div>
      )}
    </>
  );
};

export default SubscriptionTicker;
