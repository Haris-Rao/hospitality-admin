import React from "react";
import classes from "./profileCard.module.css";
import { TbEye, TbPencil } from "react-icons/tb";
import { cn, formatDate, formatTime } from "@/helper/HelperFunction";

function ProfileCard({
  data,
  type = "room",
  variant = "primary",
  bottonGrid = false,
  onView,
  onDelete,
}) {
  return (
    <div className={classes.container} data-variant={variant}>
      <div className={classes.topSection}>
        <div className={classes.imgNameWrapper}>
          <div className={classes.imgWrapper}>
            <img
              src={data?.image || "/images/profile.png"}
              alt="profile"
              width={100}
              height={100}
            />
          </div>
          <p>{data?.name || "John Doe"}</p>
        </div>
        {(type === "room" || type === "chat") && (
          <div className={classes.addEditWrapper}>
            {(type === "chat" || type === "room") && (
              <div className={classes.addEditButton} onClick={onView}>
                <TbEye size={20} />
              </div>
            )}
            {type === "room" && (
              <div className={classes.addEditButton} onClick={onDelete}>
                <TbPencil size={20} />
              </div>
            )}
          </div>
        )}
      </div>
      <div className={classes.middleSection}>
        {type === "room" && (
          <>
            <div className={classes.infoWrapper}>
              <p>Room Number</p>
              <h3>{data?.roomNumber || "101"}</h3>
            </div>
            <div className={classes.infoWrapper}>
              <p>SIP Extension</p>
              <h3>{data?.sipExtension || "1011"}</h3>
            </div>
          </>
        )}
        {type === "callLogs" && (
          <>
            <div className={classes.infoWrapper}>
              <p>Date Stamp</p>
              <h3>
                {formatDate(data?.date, "MMM DD, YYYY") || "Oct 10, 2025"}
              </h3>
            </div>
            <div className={classes.infoWrapper}>
              <p>Time Stamp</p>
              <h3>{formatTime(data?.date) || ""}</h3>
            </div>
          </>
        )}
        {type === "chat" && (
          <div className={classes.infoWrapper}>
            <p>Room Title</p>
            <h3>{data?.roomTitle || "Deluxe Room"}</h3>
          </div>
        )}
      </div>
      <div
        className={cn(classes.bottomSection, bottonGrid && classes.gridSection)}
      >
        {(type === "room" || type === "chat") && (
          <div className={classes.infoWrapper}>
            <p>Description</p>
            <h3>
              {data?.description ||
                "Executive room with a modern workspace...."}
            </h3>
          </div>
        )}
        {type === "callLogs" && (
          <>
            <div className={classes.infoWrapper}>
              <p>Dialed Room</p>
              <h3>{data?.dailedRoom || "Kitchen"}</h3>
            </div>
            <div className={classes.infoWrapper}>
              <p>Room Number</p>
              <h3>{data?.roomNumber || "302"}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
