import { cn } from "@/helper/HelperFunction";
import classes from "./Statuses.module.css";

export default function Statuses({ status, isLabel = true }) {
  const statusesColor = {
    active: {
      color: "#00AF26",
      label: "Active",
      bgColor: "#ECFDF3",
    },
    inactive: {
      color: "#F53649",
      label: "Inactive",
    },
    "system-deactivated": {
      color: "#F53649",
      label: "In-Active",
    },
    expired: {
      color: "#F53649",
      label: "Expired",
    },
    success: {
      color: "#00AF26",
      label: "Success",
    },
    failed: {
      color: "#F53649",
      label: "Failed",
    },
    completed: {
      color: "#109133",
      label: "Completed",
    },
    draft: {
      color: "#F53649",
      label: "Draft",
    },
    booked: {
      color: "#109133",
      label: "Booked",
    },
    paid: {
      color: "#00AF26",
      label: "Paid",
    },
    cancelled: {
      color: "#F53649",
      label: "Cancelled",
    },
    scheduled: {
      color: "#00AF26",
      label: "Active",
    },
    unverified: {
      color: "#337DFE",
      label: "Unverified",
    },
    pending: {
      color: "#337DFE",
      label: "Pending",
    },
    live: {
      bgColor: "#F1F6FF",
      label: "Live",
    },
    rejected: {
      color: "#F04438",
      label: "Rejected",
    },
    accepted: {
      color: "#479F78",
      label: "Accepted",
    },
    available: {
      color: "#337dfe",
      label: "Available",
    },
    confirmed: {
      color: "#00AF26",
      label: "Confirmed",
    },
    "in-progress": {
      color: "#FF9500",
      label: "In Progress",
    },
    paid: {
      color: "#00AF26",
      label: "Paid",
    },
    unpaid: {
      color: "#F53649",
      label: "Unpaid",
    },
  };
  return (
    <div
      className={cn(classes.statusWrapper, !isLabel && classes.withoutLabel)}
      style={{
        "--indicator-color": statusesColor[status]?.color,
        backgroundColor:
          statusesColor[status]?.bgColor ||
          `color-mix(in srgb, ${statusesColor[status]?.color}, light-dark(#ffffff, #000000) 80%)`,
      }}
    >
      {isLabel && (
        <p style={{ color: statusesColor[status]?.color }}>
          {statusesColor[status]?.label}
        </p>
      )}
    </div>
  );
}
