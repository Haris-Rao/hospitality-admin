import { FaCircleCheck } from "react-icons/fa6";
import classes from "./SubscriptionCard.module.css";
import {
  capitalizeFirstLetter,
  cn,
  formatNumber,
} from "@/helper/HelperFunction";
import { Button } from "../Core/Button";
import Skeleton from "../Skeleton";
import { FaEdit } from "react-icons/fa";

export default function SubscriptionCard({
  data,
  fullWidth,
  onClick,
  onClickLabel,
  loading,
  className,
  onCancel,
  cancelLoading,
  onRenew,
  renewLoading,
  onEdit = null,
  onClickLoading = false,
}) {
  if (loading) {
    return <Loader fullWidth={fullWidth} className={className} />;
  }
  return (
    <div
      className={cn(
        classes.subscriptionCard,
        fullWidth && classes.fullWidth,
        className
      )}
    >
      <div className={classes.subscriptionCard__headerContainer}>
        <div className={classes.subscriptionCard__header}>
          <h3>{capitalizeFirstLetter(data?.name)}</h3>
        </div>
        {onEdit && (
          // <div className={classes.subscriptionCard__edit}>
          //   <Button onClick={() => onEdit(data)} variant="bordered">
          //     Edit
          //   </Button>
          // </div>
          <FaEdit
            size={20}
            color={"var(--text-color)"}
            onClick={() => onEdit(data)}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      <div className={classes.subscriptionCard__description}>
        <p>{capitalizeFirstLetter(data?.description)}</p>
      </div>
      <div className={classes.subscriptionCard__body}>
        <div className={classes.subscriptionCard__price}>
          <p>
            {formatNumber(data?.price)}/<span>Monthly</span>
          </p>
        </div>
        {data?.features?.length > 0 && (
          <div className={classes.subscriptionCard__features}>
            {data?.features?.map((feature, index) => (
              <div key={index} className={classes.subscriptionCard__feature}>
                <FaCircleCheck size={20} color={"#6B6C70"} />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={classes.subscriptionCard__footer}>
        {onClick && (
          <Button
            onClick={onClick}
            disabled={onClickLoading}
            className={fullWidth && classes.fullWidth}
          >
            {onClickLabel || "Subscribe Now"}
          </Button>
        )}
        {onCancel && (
          <Button
            onClick={onCancel}
            variant="bordered"
            className={fullWidth && classes.fullWidth}
          >
            {cancelLoading ? "Cancelling..." : "Cancel"}
          </Button>
        )}
        {onRenew && (
          <Button onClick={onRenew} className={fullWidth && classes.fullWidth}>
            {renewLoading ? "Renewing..." : "Renew"}
          </Button>
        )}
      </div>
    </div>
  );
}

const Loader = ({ fullWidth, className }) => {
  return (
    <div
      className={cn(
        classes.subscriptionCard,
        fullWidth && classes.fullWidth,
        className
      )}
    >
      <div className={classes.subscriptionCard__header}>
        <h3>
          <Skeleton height={20} width={100} />
        </h3>
      </div>
      <div className={classes.subscriptionCard__description}>
        <p>
          <Skeleton height={20} width={100} />
        </p>
      </div>
      <div className={classes.subscriptionCard__body}>
        <div className={classes.subscriptionCard__price}>
          <p>
            <Skeleton height={20} width={100} />
          </p>
        </div>
        <div className={classes.subscriptionCard__features}>
          <div className={classes.subscriptionCard__feature}>
            <FaCircleCheck size={20} color={"#6B6C70"} />
            <p>
              <Skeleton height={20} width={100} />
            </p>
            <p>
              <Skeleton height={20} width={100} />
            </p>
            <p>
              <Skeleton height={20} width={100} />
            </p>
          </div>
        </div>
      </div>
      <div className={classes.subscriptionCard__footer}>
        <Skeleton height={40} width={"100%"} />
      </div>
    </div>
  );
};
