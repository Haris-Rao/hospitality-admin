import classes from "./CmsSeparator.module.css";
export default function CmsSeparator({ children }) {
  return (
    <div className={classes.separator}>
      <h2 className={classes.title}>{children}</h2>
      <hr className={classes.hr} />
    </div>
  );
}
