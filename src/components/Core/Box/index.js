import React from "react";
import classes from "./Box.module.css";

export default function Box({ className, children, style }) {
  return (
    <div
      className={[classes.container, className && className].join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
