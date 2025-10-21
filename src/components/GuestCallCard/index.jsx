import Image from "next/image";
import classes from "./GuestCallCard.module.css";

const GuestCallCard = ({ data }) => {
  return (
    <div className={classes.guestCallCard}>
      <div className={classes.userInfo}>
        <div className={classes.userImage}>
          <Image src={data?.image || "/images/profile.png"} alt="user" fill />
        </div>
        <p>{data?.name || "John Doe"}</p>
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.guestCallContent}>
          <span>Department Called</span>
          <p>{data?.departmentCalled || "Cleaning Department"}</p>
        </div>
        <div className={classes.guestCallContent}>
          <span>Time Stamp</span>
          <p>{data?.timeStamp || "10:00 AM"}</p>
        </div>
        <div className={classes.guestCallContent}>
          <span>Duration</span>
          <p>{data?.duration || "01:30 sec"}</p>
        </div>
        <div className={classes.guestCallContent}>
          <span>Room No</span>
          <p>{data?.roomNo || "302"}</p>
        </div>
      </div>
    </div>
  );
};

export default GuestCallCard;
