import Image from "next/image";
import classes from "./OverlayCard.module.css";

export default function OverlayCard({image, title}) {
    return (
        <div className={classes.card}>
            <Image src={image} alt="" fill/>
            <h3>{title}</h3>
        </div>
    )
}