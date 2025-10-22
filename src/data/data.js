import { BOOKING_STATUS } from "@/constant/constants";
import moment from "moment";

const headerStyle = {
  whiteSpace: "nowrap",
};

export const monthFilterOptions = Array(5)
  .fill(null)
  .map((_, i) => ({
    label: moment().subtract(i, "years").format("YYYY"),
    value: moment().subtract(i, "years").format("YYYY"),
  }));

export const dashboardTableHeaders = [
  { label: "Product ID", value: "id" },
  { label: "Product Name", value: "name" },
  { label: "Category", value: "category" },
  { label: "Price", value: "price" },
  { label: "Status", value: "status" },
  {
    label: "Action",
    value: "action",
    dataStyle: { textAlign: "center" },
    headerStyle: { textAlign: "center" },
  },
];

export const bookings_table_header = [
  { label: "Booking ID", value: "bookingId" },
  { label: "Customer Name", value: "customerName" },
  { label: "Operator Name", value: "operatorName" },
  { label: "Parking", value: "parking" },
  { label: "Date", value: "date" },
  { label: "Total Price", value: "totalPrice" },
  { label: "Status", value: "status" },
  { label: "Actions", value: "actions" },
];
export const airport_headers = [
  {
    label: "Airport Code",
    value: "airportCode",
  },
  {
    label: "Airport Name",
    value: "airport",
  },
  {
    label: "Address",
    value: "address",
  },
  {
    label: "Total Terminals",
    value: "totalTerminals",
  },
  {
    label: "Created At",
    value: "createdAt",
  },
  {
    label: "Status",
    value: "status",
  },
  {
    label: "Action",
    value: "action",
  },
];
export const terminal_headers = [
  {
    label: "Terminal ID",
    value: "terminalId",
  },
  {
    label: "Airport Name",
    value: "airport",
  },
  {
    label: "Terminal Name",
    value: "terminalName",
  },
  {
    label: "Capacity",
    value: "capacity",
  },
  {
    label: "Active Slots",
    value: "activeSlots",
  },
  {
    label: "Status",
    value: "status",
  },
  {
    label: "Action",
    value: "action",
  },
];
export const discount_table_header = [
  { label: "Discount Code", value: "code", headerStyle },
  { label: "Discount Name", value: "name", headerStyle },
  { label: "Type", value: "type", headerStyle },
  { label: "Discount", value: "discount", headerStyle },
  { label: "Valid From", value: "startDate", headerStyle },
  { label: "Valid Until", value: "endDate", headerStyle },
  { label: "Cap Amount", value: "cap", headerStyle },
  {
    label: "Applicable For",
    value: "applyFor",
    headerStyle,
  },
  { label: "Status", value: "status", headerStyle },
  { label: "Action", value: "action", headerStyle },
];
export const applicableForOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "selected",
    label: "Specific Airports",
  },
];
export const applicableForOptionsDiscount = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "selected",
    label: "Specific Airports",
  },
];
export const feesTypeOptions = [
  {
    value: "flat",
    label: "Flat",
  },
  {
    value: "percentage",
    label: "Percentage",
  },
];
export const discountTypeOptions = [
  {
    value: "flat",
    label: "Flat",
  },
  {
    value: "percentage",
    label: "Percentage",
  },
];

export const reviewsHeader = [
  { label: "Customer Name", value: "customerName" },
  { label: "Operator Name", value: "operatorName" },
  { label: "Parking", value: "parking" },
  { label: "Rating", value: "rating" },
  { label: "Booking Date", value: "bookingDate" },
  { label: "Actions", value: "actions" },
];

export const bookingFilter = [
  { label: "All", value: "all" },
  { label: "Pending", value: BOOKING_STATUS.PENDING },
  { label: "Confirmed", value: BOOKING_STATUS.CONFIRMED },
  { label: "In Progress", value: BOOKING_STATUS.IN_PROGRESS },
  { label: "Completed", value: BOOKING_STATUS.COMPLETED },
  { label: "Cancelled", value: BOOKING_STATUS.CANCELLED },
];

export const contact_us_table_header = [
  {
    label: "ID",
    value: "id",
  },
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Email",
    value: "email",
  },
  {
    label: "Contact No",
    value: "phone",
  },
  {
    label: "Date",
    value: "date",
  },
  {
    label: "Status",
    value: "status",
  },
  {
    label: "Action",
    value: "action",
  },
];

export const disbursementHeader = [
  { label: "Disbursement", value: "disbursementId" },
  { label: "Operator Name", value: "operatorName" },
  { label: "Disbursed Amount", value: "disbursedAmount" },
  { label: "Payment Method", value: "paymentMethod" },
  { label: "Disbursement Date", value: "createdAt" },
];
export const disbursementUserHeader = [
  { label: "Operator Name", value: "operatorName" },
  { label: "Overall Amount", value: "overallAmount" },
  { label: "Total Amount", value: "totalAmount" },
  { label: "Disbursement Amount", value: "disbursementAmount" },
  { label: "Actions", value: "action" },
];
export const minutesOptions = (function () {
  const options = [];

  for (let i = 15; i <= 60; i += 15) {
    options.push({
      label: `${i} mins`,
      value: i,
    });
  }

  for (let i = 75; i <= 105; i += 15) {
    const hours = Math.floor(i / 60);
    const minutes = i % 60;
    options.push({
      label: `${hours} hr${hours > 1 ? "s" : ""} ${
        minutes > 0 ? `${minutes} mins` : ""
      }`.trim(),
      value: i,
    });
  }

  for (let hour = 2; hour <= 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const totalMinutes = hour * 60 + minute;

      if (totalMinutes > 1440) break;

      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;

      options.push({
        label: `${hours} hr${hours > 1 ? "s" : ""} ${
          minutes > 0 ? `${minutes} mins` : ""
        }`.trim(),
        value: totalMinutes,
      });
    }
  }

  return options;
})();

export const profileSettingTabs = [
  {
    label: "Account",
    value: "account",
  },
  {
    label: "Password",
    value: "password",
  },
];

export const statusOptions = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];
