import React from "react";
import classes from "./RatingCard.module.css";
import Image from "next/image";

const RatingCard = ({ data }) => {
  return (
    <div className={classes.ratingCard}>
      <div className={classes.ratingCardIcon}>
        <Image src={data?.icon} alt={data?.title} fill />
      </div>
      <div className={classes.ratingCardContent}>
        <h3>{data?.title}</h3>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default RatingCard;
