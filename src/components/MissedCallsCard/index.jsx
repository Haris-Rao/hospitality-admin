import { handleMilitaryToStandardTime } from "@/helper/HelperFunction";
import { IoHomeOutline } from "react-icons/io5";
import classes from "./MissedCallsCard.module.css";

const MissedCallsCard = ({ data, icon, rightIcon }) => {
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.missedCallsCard}>
        <div className={classes.cardIcon}>
          {icon || <IoHomeOutline size={20} color="var(--primary-color)" />}
        </div>
        <div className={classes.cardContent}>
          <div className={classes.cardText}>
            <span>{data?.title || "Missed Calls"}</span>
            {data?.duration ? (
              <h4>
                {data?.duration} <span>sec</span>
              </h4>
            ) : (
              <h4>{data?.count}</h4>
            )}
          </div>
        </div>
      </div>
      {rightIcon && rightIcon}
    </div>
  );
};

export default MissedCallsCard;
