import { profileImg } from "@/constant/imagePath";
import { cn, formatDate, formatTime } from "@/helper/HelperFunction";
import { TbEye, TbPencil } from "react-icons/tb";
import classes from "./InfoCard.module.css";
import Statuses from "../Core/Statuses";

function InfoCard({
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
            <img src={profileImg} alt="hotel" width={100} height={100} />
          </div>
          <p>{data?.name || "John Doe"}</p>
        </div>
        {type === "hotel" && (
          <div className={classes.addEditWrapper}>
            <div className={classes.addEditButton} onClick={onView}>
              <TbEye size={20} />
            </div>
            <div className={classes.addEditButton} onClick={onDelete}>
              <TbPencil size={20} />
            </div>
          </div>
        )}
      </div>
      <div className={classes.middleSection}>
        {type === "hotel" && (
          <>
            <div className={classes.infoWrapper}>
              <p>Current Plan</p>
              <h3>{data?.currentPlan || "$49 - Basic"}</h3>
            </div>
            <div className={classes.infoWrapper}>
              <p>Phone Number</p>
              <h3>{data?.phoneNumber || "+1 0876 29384"}</h3>
            </div>
          </>
        )}
        {type === "callLogs" && (
          <>
            <div className={classes.infoWrapper}>
              <p>Call Date</p>
              <h3>
                {formatDate(data?.date, "MMMM DD, YYYY") || "August 14, 2025"}
              </h3>
            </div>
            <div className={classes.infoWrapper}>
              <p>Duration</p>
              <h3>{data?.duration || "10 minutes"}</h3>
            </div>
          </>
        )}
        {type === "callLogsSecondary" && (
          <>
            <div className={classes.infoWrapper}>
              <p>Date Stamp</p>
              <h3>
                {formatDate(data?.date, "MMMM DD, YYYY") || "August 14, 2025"}
              </h3>
            </div>
            <div className={classes.infoWrapper}>
              <p>Time Stamp</p>
              <h3>{formatTime(data?.date) || "10:30 AM"}</h3>
            </div>
          </>
        )}
      </div>
      <div
        className={cn(classes.bottomSection, bottonGrid && classes.gridSection)}
      >
        {type === "hotel" && (
          <>
            <div className={classes.infoWrapper}>
              <p>Hotel ID</p>
              <h3>{data?.hotelId || "101"}</h3>
            </div>
            <div className={classes.infoWrapper}>
              <p>Email</p>
              <h3>{data?.email || "Levin.J@gmail.com"}</h3>
            </div>
          </>
        )}
        {type === "callLogs" && (
          <>
            <div className={classes.infoWrapper}>
              <p>Call Type</p>
              <h3>{data?.callType || "Inbound"}</h3>
            </div>
            <div className={classes.infoWrapper}>
              <p>Call Status</p>
              <Statuses status={data?.callStatus || "Answered"} />
            </div>
          </>
        )}
        {type === "callLogsSecondary" && (
          <>
            <div className={classes.infoWrapper}>
              <p>Dialed Room</p>
              <h3>{data?.dialedRoom || "Reception"}</h3>
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

export default InfoCard;
