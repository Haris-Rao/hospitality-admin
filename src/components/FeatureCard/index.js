import Image from "next/image";
import classes from "./FeatureCard.module.css";

export default function FeatureCard({ data, backgroundColor }) {
  return (
    <div
      className={classes.featureCard}
      style={backgroundColor && { backgroundColor: backgroundColor }}
    >
      <div className={classes.image__wrapper}>
        <div className={classes.imageDiv}>
          <Image
            src={data?.image}
            alt={data?.title}
            fill
            className={classes.image}
          />
        </div>
      </div>
      <div className={classes.featureCard__heading}>
        <h3>{data?.title}</h3>
        <p>{data?.description}</p>
      </div>
    </div>
  );
}
