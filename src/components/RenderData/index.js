import { cloneElement, isValidElement } from "react";
import classes from "./RenderData.module.css";

export default function RenderData({ label, children }) {
  return (
    <div className={classes.renderData}>
      <p className={classes.label}>{label}</p>
      {children && isValidElement(children)
        ? cloneElement(children, {
            className: classes.value,
          })
        : children && <p className={classes.value}>{children}</p>}
    </div>
  );
}
