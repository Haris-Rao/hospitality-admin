import { cn } from "@/helper/HelperFunction";
import classes from "./FancyHeading.module.css";
import { createElement } from "react";

export const FancyHeading = ({ children, as = "h1", className, size = 45, center }) => {
  return createElement(
    as,
    {
      className: cn(classes.fancyHeading, className, center && classes.center),
      style: { "--_fs": `${size}px` },
    },
    children,
  );
};

export const FancyHeadingWithDescription = ({
  children,
  as = "h1",
  className,
  size = 45,
  center,
  description,
}) => {
  return (
    <div
      className={cn(
        classes.fancyHeadingWithDescription,
        className,
        center && classes.center,
      )}
    >
      {createElement(
        as,
        {
          className: cn(classes.fancyHeading),
          style: { "--_fs": `${size}px` },
        },
        children,
      )}
      {description && <p className={classes.description}>{description}</p>}
    </div>
  );
};
