import { cn } from "@/helper/HelperFunction";
import classes from "./CmsSeparator.module.css";
export default function CmsSeparator({
  children,
  first = false,
  last = false,
}) {
  return (
    <div
      className={cn(
        classes.separator,
        classes[first ? "first" : ""],
        classes[last ? "last" : ""]
      )}
    >
      <h2 className={classes.title}>{children}</h2>
    </div>
  );
}
