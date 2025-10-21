import { cn } from "@/helper/HelperFunction";
import classes from "./ImageCard.module.css";
import Image from "next/image";

export default function ImageCard({ data, loading, selected, handleClick }) {
  return loading ? (
    <div className={classes.imageLoading}>
      <div className={classes.__image}></div>
      <p className={classes.__title}></p>
    </div>
  ) : (
    <div
      className={cn(classes.imageCard, selected && classes.selected)}
      onClick={() => handleClick && handleClick(data)}
    >
      <div className={classes.__image}>
        <Image src={`${data.imageUrl}`} alt={data.imageUrl} fill />
      </div>
      <p className={classes.__title}>{data.pageNumber}</p>
    </div>
  );
}
