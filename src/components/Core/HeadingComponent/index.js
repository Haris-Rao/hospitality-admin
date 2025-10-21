import { cn } from "@/helper/HelperFunction";
import classes from "./HeadingComponent.module.css";

export default function HeadingComponent({ heading, className, description }) {
  return (
    <div className={cn(classes.heading_container, className)}>
      <h2>{heading}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
