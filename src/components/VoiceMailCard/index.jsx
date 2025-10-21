import React from "react";
import classes from "./VoiceMailCard.module.css";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";

const VoiceMailCard = ({ data }) => {
  return (
    <div className={classes.voiceMainCard}>
      <div className={classes.userInfo}>
        <div className={classes.userImage}>
          <Image src={data?.image || "/images/profile.png"} alt="user" fill />
        </div>
        <p>{data?.name || "John Doe"}</p>
      </div>
      <div className={classes.voiceContent}>
        <span>Time Stamp</span>
        <p>{data?.timeStamp || "10:00 AM"}</p>
      </div>
      <div className={classes.voiceContent}>
        <span>Room No</span>
        <p>{data?.roomNo || "101"}</p>
      </div>
      <div className={classes.icon}>
        <IoEyeOutline size={16} color={"var(--text-color)"} />
      </div>
    </div>
  );
};

export default VoiceMailCard;
