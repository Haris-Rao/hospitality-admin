import { cn } from "@/helper/HelperFunction";
import classes from "./ContentSection.module.css";
export default function ContentSection({ heading, description, children, center = true }) {
  return (
      <div className={classes.content__wrapper}>
        <div className={cn( classes.content__heading, center && classes.center )}>
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>
        {children}
      </div>
  );
}
