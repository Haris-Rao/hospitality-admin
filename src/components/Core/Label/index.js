import { cn } from "@/helper/HelperFunction";
import classes from "./Label.module.css";
export const Label = ({
  disabled,
  labelOnTop,
  children,
  variant,
  inline,
  labelClass,
  ...props
}) => {
  return (
    <label
      className={cn(
        classes.labelText,
        labelClass && labelClass,
        disabled && classes.disabled,
        labelOnTop && classes.onTopLabel,
        inline && classes.inline
      )}
      data-variant={variant}
      {...props}
    >
      {children}
    </label>
  );
};
