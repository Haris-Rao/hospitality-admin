import { FaX } from "react-icons/fa6";
import classes from "./Tags.module.css";

export default function Tag({ value, onDelete }) {
  return (
    <p className={classes.tag}>
      <span>{value?.label}</span>{" "}
      <span className={classes.delete} onClick={onDelete}>
        <FaX size={10} style={{ cursor: "pointer" }} />
      </span>
    </p>
  );
}
