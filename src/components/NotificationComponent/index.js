import parse from "html-react-parser";
import { FaCircle } from "react-icons/fa";
import { cn, formatMessageDate } from "../../helper/HelperFunction";
import NoData from "../Core/NoData/NoData";
import Skeleton from "../Skeleton";
import classes from "./NotificationComponent.module.css";

function NotificationComponent({ data, onClick, isLoading }) {
  return (
    <>
      {isLoading ? (
        <>
          {Array(10)
            .fill(0)
            .map((_, index) => {
              return (
                <div className="mb-2" key={index}>
                  <Skeleton variant="rounded" height={80} />
                </div>
              );
            })}
        </>
      ) : (
        <>
          {data?.length > 0 ? (
            <>
              {data?.map((notification, key) => (
                <div
                  className={cn(
                    classes.notificationMain,
                    notification?.seen && classes.seen
                  )}
                  key={key}
                  onClick={() => {}}
                  style={{
                    cursor:
                      !["none"]?.includes(notification?.flag) && "pointer",
                  }}
                >
                  <div className={classes.noticationLeftBox}>
                    <div className={classes.imgBox}>
                      <img src={notification?.image} alt="img" />
                      {/* <Image
                        src={imageUrl(notification?.sender?.photo)}
                        alt="img"
                        layout="fill"
                      /> */}
                    </div>
                    <div className={classes.notificationDetails}>
                      <p className={classes.name}>
                        {notification?.title.includes("<strong>")
                          ? parse(`${notification?.title}`)
                          : notification?.title}
                      </p>
                      {notification?.message && (
                        <p className={classes.description}>
                          {notification?.message}
                        </p>
                      )}
                      {notification?.createdAt && !notification?.message && (
                        <p className={classes.description}>
                          {formatMessageDate(notification?.createdAt)}
                        </p>
                      )}
                    </div>
                  </div>

                  {(notification?.seen || notification?.createdAt) && (
                    <div className={classes.notificationRightBox}>
                      {notification?.seen && (
                        <FaCircle
                          size={10}
                          color={notification?.seen && "var(--secondary-color)"}
                        />
                      )}
                      {notification?.message && notification?.createdAt && (
                        <p className={classes.description}>
                          {formatMessageDate(notification?.createdAt)}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </>
          ) : (
            <NoData
              className={classes.noData}
              text={"No Notifications Found"}
            />
          )}
        </>
      )}
    </>
  );
}

export default NotificationComponent;
