import { cn, formatNumber } from "@/helper/HelperFunction";
import classes from "./StatsCard.module.css";
import { BsHouse } from "react-icons/bs";

export default function StatsCard({ data }) {
  return (
    <div className={cn(classes.statsCard_container)}>
      <div className={classes.statsCard_header}>
        <p>{data?.title || "No. of Calls in Last Month"}</p>
        <h4>{data?.value || "1,200"}</h4>
      </div>
      <div className={classes.icon_container}>
        <div className={classes.icon_box}>
          <BsHouse size={20} color={"var(--primary-color)"} />
        </div>
      </div>
    </div>
  );
}
