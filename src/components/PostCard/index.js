import Image from "next/image";
import classes from "./PostCard.module.css";
import { FiEye } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { capitalizeFirstLetter, cn, formatDate } from "@/helper/HelperFunction";
import { Button } from "../Core/Button";
import { PiShareFat } from "react-icons/pi";
import ShowMoreShowLessText from "../Core/ShowMoreShowLess";
import Skeleton from "../Skeleton";
import { imageUrl } from "@/config/apiUrl";
import { FiTrash } from "react-icons/fi";
import Statuses from "../Core/Statuses";

export default function PostCard({
  data,
  onView,
  onEdit,
  onShare,
  onShareVariant,
  onDelete = false,
  size = "sm",
  preview = false,
}) {
  return (
    <div className={classes.postCard__wrapper}>
      <div className={cn(classes.body, classes[size])}>
        <div className={classes.header}>
          <div className={classes.user__wrapper}>
            <div className={classes.user__info}>
              <div className={classes.user__image}>
                {preview && !data?.user?.photo ? (
                  <Skeleton
                    width={50}
                    height={50}
                    animate={false}
                    variant="rounded"
                  />
                ) : (
                  <Image
                    src={imageUrl(data?.user?.photo)}
                    alt={data?.user?.name || "John Doe"}
                    layout="fill"
                  />
                )}
              </div>
              <div className={classes.user__details}>
                {preview && !data?.user?.name ? (
                  <Skeleton width={100} height={20} animate={false} />
                ) : (
                  <p className={classes.user__name}>
                    {capitalizeFirstLetter(data?.user?.name)}
                  </p>
                )}
                {preview && !data?.createdAt ? (
                  <Skeleton
                    width={78}
                    height={17}
                    animate={false}
                    style={{ marginTop: "5px" }}
                  />
                ) : (
                  <span className={classes.createdAt}>
                    {formatDate(data?.createdAt)}
                  </span>
                )}
              </div>
            </div>

            <Statuses
              status={data?.status}
              size="sm"
              className={classes.status}
            />
          </div>
        </div>
        {size === "md" &&
          (preview && (!data?.scheduledAt || !data?.createdAt) ? (
            <div className={classes.dateSkeleton}>
              <Skeleton width={80} height={20} animate={false} />
              <Skeleton width={100} height={20} animate={false} />
            </div>
          ) : (
            <p className={classes.date}>
              <span className={classes.__published}>
                {data?.scheduledAt ? "Reminder Date" : "Created On"}
              </span>{" "}
              <span className={classes.__date}>
                {formatDate(data?.scheduledAt || data?.createdAt)}
              </span>
            </p>
          ))}
        {/* title */}
        {preview && !data?.title ? (
          <div className={classes.titleSkeleton}>
            <Skeleton width={"90%"} height={16} animate={false} />
          </div>
        ) : (
          <p className={classes.title}>{capitalizeFirstLetter(data?.title)}</p>
        )}
        {/* description */}
        {preview && !data?.description ? (
          <div className={classes.contentSkeleton}>
            <Skeleton width={"90%"} height={16} animate={false} />
            <Skeleton width={"100%"} height={16} animate={false} />
            <Skeleton width={"80%"} height={16} animate={false} />
          </div>
        ) : (
          data?.description && (
            <p className={`${classes.content} ellipse`}>{data?.description}</p>
          )
        )}

        {size === "sm" &&
          (preview && (!data?.scheduledAt || !data?.createdAt) ? (
            <div className={classes.dateSkeleton}>
              <Skeleton width={80} height={20} animate={false} />
              <Skeleton width={100} height={20} animate={false} />
            </div>
          ) : (
            <div className={classes.date__wrapper}>
              <p className={classes.date}>
                <span className={classes.__published}>
                  {data?.scheduledAt ? "Reminder Date" : "Created On"}
                </span>{" "}
                <span className={classes.__date}>
                  {formatDate(data?.scheduledAt || data?.createdAt)}
                </span>
              </p>
              <p className={classes.date}>
                <span className={classes.__published}>Category</span>{" "}
                <span className={classes.__date}>
                  {data?.category?.name || "No Category"}
                </span>
              </p>
            </div>
          ))}
        <div className={cn(classes.image, classes[size])}>
          {preview || !data?.media?.length ? (
            <Skeleton height={size === "sm" ? 200 : 300} animate={false} />
          ) : (
            <Image
              src={imageUrl(data?.media?.[0])}
              alt={"Post Image"}
              layout="fill"
            />
          )}
        </div>
      </div>
      {(onView || onEdit || onShare) && (
        <div className={cn(classes.footer, classes[size])}>
          {onDelete && (
            <FiTrash className={classes.__icon} onClick={onDelete} />
          )}
          {onView && <FiEye className={classes.__icon} onClick={onView} />}
          {onEdit && <TbEdit className={classes.__icon} onClick={onEdit} />}
          {onShare && (
            <PiShareFat className={classes.__icon} onClick={onShare} />
          )}
        </div>
      )}
    </div>
  );
}
