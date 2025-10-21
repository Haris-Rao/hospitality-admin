"use client";
import React from "react";
import classes from "./HeadingSection.module.css";
import { Button } from "../Core/Button";
import { cn } from "@/helper/HelperFunction";
const HeadingSection = ({
  title,
  description,
  tag,
  btnText,
  onBtnClick = () => {},
  btnVariant,
  className,
}) => {
  console.log(className);
  return (
    <div className={cn(classes.headingSectionWrapper, className && className)}>
      <div
        className={classes.headingSection}
        data-variant={btnText ? "" : "fullWidth"}
      >
        {tag && <div className={classes.tag}>{tag}</div>}
        <div className={classes.heading}>{title}</div>
        <div className={classes.description}>{description}</div>
      </div>
      {btnText && (
        <Button
          variant={btnVariant}
          className={classes.btn}
          onClick={onBtnClick}
          label={btnText}
          size="lg"
        />
      )}
    </div>
  );
};
export default HeadingSection;
