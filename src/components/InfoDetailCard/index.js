import { useState } from "react";
import { profileImg } from "@/constant/imagePath";
import { FaPhone, FaGlobe, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";
import ToggleSwitch from "../ToggleSwitch";
import classes from "./InfoDetailCard.module.css";

function InfoDetailCard({ data }) {
  const [chatEnabled, setChatEnabled] = useState(data.chatEnabled);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.infoSectionWrapper}>
        {/* Profile Section */}
        <div className={classes.profileSection}>
          <div className={classes.profileImage}>
            <img src={profileImg} alt="hotel" width={48} height={48} />
          </div>
          <div className={classes.profileInfo}>
            <h3>{data.name}</h3>
            <p>{data.email}</p>
          </div>
        </div>

        {/* Phone Number Section */}
        <div className={classes.infoSection}>
          <div className={classes.infoIcon}>
            <FaPhone color="var(--primary-color)" />
            <p>Phone Number</p>
          </div>
          <div className={classes.infoContent}>
            <span>{data.phoneNumber}</span>
          </div>
        </div>

        {/* Website Section */}
        <div className={classes.infoSection}>
          <div className={classes.infoIcon}>
            <FaGlobe color="var(--primary-color)" />
            <p>Website</p>
          </div>
          <div className={classes.infoContent}>
            <span>{data.website}</span>
          </div>
        </div>

        {/* Location Section */}
        <div className={classes.infoSection}>
          <div className={classes.infoIcon}>
            <FaMapMarkerAlt color="var(--primary-color)" />
            <p>Location</p>
          </div>
          <div className={classes.infoContent}>
            <span>{data.location}</span>
          </div>
        </div>

        {/* Current Plan Section */}
        <div className={classes.infoSection}>
          <div className={classes.infoIcon}>
            <FaInfoCircle color="var(--primary-color)" />
            <p>Current Plan</p>
          </div>
          <div className={classes.infoContent}>
            <span>{data.currentPlan}</span>
          </div>
        </div>
      </div>
      {/* Chat Enabled Toggle Section */}
      <div className={classes.toggleSection}>
        <ToggleSwitch
          isActive={chatEnabled}
          onToggle={setChatEnabled}
          label="Chat Enabled"
          size="medium"
        />
      </div>
    </div>
  );
}

export default InfoDetailCard;
