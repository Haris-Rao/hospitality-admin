import classes from "./ActionHeader.module.css";
import { isValidElement } from "react";

export default function ActionHeader({ heading, description, children }) {
  return (
    <div className={classes.actionHeader}>
      <div className={classes.header}>
        {heading && <h3 className={classes.heading}>{heading}</h3>}
        {description && isValidElement(description) ? (
          description
        ) : (
          <p className={classes.description}>{description}</p>
        )}
      </div>
      <div className={classes.actions}>{children}</div>
    </div>
  );
}
