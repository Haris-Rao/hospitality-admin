"use client";
import SubscriptionCard from "../SubscriptionCard";
import { cn } from "@/helper/HelperFunction";
import classes from "./Subscriptions.module.css";

export default function Subscriptions({
  data = [],
  fullWidth = false,
  onClick = null,
  onCancel = null,
  cancelLoading = false,
  onClickLabel,
  className,
  onClickLoading = false,
  loading = false,
  onRenew = null,
  renewLoading = false,
  showMultiple = false,
  selectedSubscription = null,
  onSubscriptionSelect = null,
  gridLayout = false,
  onEdit = null,
}) {
  if (loading) {
    return (
      <div className={cn(classes.subscriptionsContainer, className)}>
        {showMultiple ? (
          // Show multiple skeleton cards
          <div
            className={cn(
              classes.subscriptionsGrid,
              gridLayout && classes.gridLayout
            )}
          >
            {data?.map((d) => (
              <SubscriptionCard
                key={d?._id}
                data={d}
                fullWidth={fullWidth}
                className={className}
              />
            ))}
          </div>
        ) : (
          <SubscriptionCard
            onClick={null}
            className={className}
            onClickLabel={onClickLabel}
            fullWidth={fullWidth}
            data={data?.[0]}
            loading={loading}
            onCancel={onCancel}
            cancelLoading={cancelLoading}
            onRenew={onRenew}
            renewLoading={renewLoading}
            onEdit={onEdit}
          />
        )}
      </div>
    );
  }

  // If showing multiple subscriptions
  if (showMultiple && data?.length > 0) {
    return (
      <div className={cn(classes.subscriptionsContainer, className)}>
        <div
          className={cn(
            classes.subscriptionsGrid,
            gridLayout && classes.gridLayout
          )}
        >
          {data.map((subscription) => (
            <SubscriptionCard
              key={subscription._id}
              data={subscription}
              fullWidth={fullWidth}
              onClick={
                onSubscriptionSelect
                  ? () => onSubscriptionSelect(subscription)
                  : onClick
                  ? () => onClick(subscription)
                  : null
              }
              onClickLabel={onClickLabel}
              className={cn(
                className,
                selectedSubscription?._id === subscription._id &&
                  classes.selected
              )}
              onCancel={onCancel}
              cancelLoading={cancelLoading}
              onRenew={onRenew}
              onClickLoading={onClickLoading}
              renewLoading={renewLoading}
            />
          ))}
        </div>
      </div>
    );
  }

  // Default single subscription display
  return (
    <div className={cn(classes.subscriptionsContainer, className)}>
      <SubscriptionCard
        onClick={
          onClick
            ? () => {
                if (!onClick) return;
                onClick(data?.[0]);
              }
            : null
        }
        className={className}
        onClickLabel={onClickLabel}
        fullWidth={fullWidth}
        key={data?.[0]?._id}
        data={data?.[0]}
        loading={loading}
        onCancel={onCancel}
        cancelLoading={cancelLoading}
        onRenew={onRenew}
        onClickLoading={onClickLoading}
        renewLoading={renewLoading}
        onEdit={onEdit}
      />
    </div>
  );
}
