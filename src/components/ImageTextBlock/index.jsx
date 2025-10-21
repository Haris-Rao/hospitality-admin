"use client";
import React from "react";
import Image from "next/image";
import classes from "./ImageTextBlock.module.css";
import { Button } from "../Core/Button";

export default function ImageTextBlock({
  data,
  reverse = false,
  className,
  onclick,
}) {
  return (
    <div
      className={`${classes.imageTextBlock} ${className} ${
        reverse ? classes.reverse : ""
      }`}
    >
      <div className={classes.content}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        {onclick && (
          <div>
            <Button onClick={onclick} label="Learn More" size="lg" />
          </div>
        )}
      </div>
      <div className={classes.imageContainer}>
        <Image
          src={data?.image}
          alt={data?.title}
          fill
          className={classes.image}
        />
      </div>
    </div>
  );
}
