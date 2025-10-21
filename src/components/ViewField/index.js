import React from "react";
import { IoPerson } from "react-icons/io5";
import classes from "./ViewField.module.css";
import { Label } from "../Core/Label";
import { cn } from "@/helper/HelperFunction";
function ViewField({
  label,
  labelStyles,
  value,
  type = "text",
  rightIcon,
  variant = "primary",
  customStyles = {},
  valueClass,
}) {
  return (
    <div
      className={cn(classes.main, variant === "secondary" && classes.secondary)}
    >
      <p className={classes.label} style={labelStyles}>
        {label}
      </p>
      <div
        className={[
          classes.value,
          type === "textarea" && classes.textarea,
          type === "input" && classes.input,
        ].join(" ")}
        style={customStyles}
      >
        <p className={valueClass}>{value || "N/A"}</p>{" "}
        {type === "text" && <span>{rightIcon}</span>}
      </div>
    </div>
  );
}

export default ViewField;
