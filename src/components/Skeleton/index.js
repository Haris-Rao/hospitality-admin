import { cn } from "@/helper/HelperFunction";
import classes from "./Skeleton.module.css";

const variants = {
  rounded: {
    borderRadius: "var(--border-radius)",
  },
  circular: {
    borderRadius: "50%",
  },
};

export default function Skeleton({
  className,
  style,
  width = "100%",
  children,
  height,
  variant = "rounded",
  animate = true,
}) {
  return (
    <div
      className={cn(classes.skeleton, animate && classes.animate, className)}
      style={{
        ...style,
        width,
        height: height || "300px",
        backgroundColor: "var(--skeleton-color)",
        borderRadius: variants[variant]?.borderRadius,
      }}
    ></div>
  );
}
