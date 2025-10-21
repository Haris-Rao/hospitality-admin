import { cn } from "@/helper/HelperFunction";
import classes from "./FormWrapper.module.css";

export default function FormWrapper({ children, className, columns = 2 }) {
  return (
    <div
      className={cn(classes.wrapper, className)}
      style={{ "--columns": columns }}
    >
      {children}
    </div>
  );
}

export const FormRow = ({ children, span = 1 }) => {
  return (
    <div className={classes.row} style={{ gridColumnEnd: `span ${span}` }}>
      {children}
    </div>
  );
};
