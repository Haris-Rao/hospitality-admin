import React from "react";
import classes from "./SubscriptionCard.module.css";
import { FaStar, FaCircleCheck } from "react-icons/fa6";
import { Button } from "../Core/Button";
import { cn } from "@/helper/HelperFunction";

export default function SubscriptionCard({
  data,
  onEdit,
  className,
  isActive = false,
}) {
  return (
    <div
      className={cn(
        classes.subscriptionCard,
        isActive && classes.active,
        className
      )}
    >
      {/* Header with title and star */}
      <div className={classes.header}>
        <div className={classes.titleContainer}>
          <h3>{data?.title}</h3>
          <FaStar size={25} />
        </div>
      </div>

      {/* Description */}
      <div className={classes.description}>
        <p>{data?.description}</p>
      </div>

      {/* Details Section */}
      <div className={classes.details}>
        <div className={classes.detailsColumn}>
          <div className={classes.detailItem}>
            <FaCircleCheck />
            <div className={classes.detailContent}>
              <p>Subscription ID</p>
              <span>{data?.subscriptionId}</span>
            </div>
          </div>
          <div className={classes.detailItem}>
            <FaCircleCheck />
            <div className={classes.detailContent}>
              <p>Cost (Monthly)</p>
              <span>{data?.monthlyCost}</span>
            </div>
          </div>
          <div className={classes.detailItem}>
            <FaCircleCheck />
            <div className={classes.detailContent}>
              <p>Users Subscribed</p>
              <span>{data?.usersSubscribed}</span>
            </div>
          </div>
        </div>

        <div className={classes.detailsColumn}>
          <div className={classes.detailItem}>
            <FaCircleCheck />
            <div className={classes.detailContent}>
              <p>Recurring Type</p>
              <span>{data?.recurringType}</span>
            </div>
          </div>
          <div className={classes.detailItem}>
            <FaCircleCheck />
            <div className={classes.detailContent}>
              <p>Cost (Yearly)</p>
              <span>{data?.yearlyCost}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Package Button */}
      <div className={classes.footer}>
        <Button
          onClick={onEdit}
          className={classes.editButton}
          label="Edit Package"
          variant={"secondary"}
          size="lg"
        />
      </div>
    </div>
  );
}
