export const CURRENCY = "£";
export var recordsLimit = 10;
export var recordsLimit50 = 50;
// We are using this  wellness now api Key
export const googleMapApiKey = "AIzaSyDIBq-YUt5wO5MqfKWfPyfX407GcrWiNlg";

export const falsyArray = [
  null,
  undefined,
  "",
  0,
  false,
  NaN,
  "null",
  "undefined",
  "false",
  "0",
  "NaN",
];
export const fileTypesAllowed = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "video/mp4",
  "video/mpeg",
  "video/quicktime",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
export const videoFileTypes = ["mp4", "mpeg", "quicktime"];

export const allowedFileTypes = {
  "application/pdf": [".pdf"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    ".docx",
  ],
  "image/*": [".png", ".jpeg", ".jpg"],
};
export const allowedDocTypes = {
  "application/pdf": [".pdf"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    ".docx",
  ],
};
export const allowedImageTypes = {
  "image/*": [".png", ".jpeg", ".jpg", ".jfif", ".webp"],
};

export const STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
};
export const USER_STATUS = {
  ACTIVE: "active",
  INACTIVE: "system-deactivated",
};

// permission route
export const permissionRoute = {
  "/cms": "cms-management",
  "/role-management": "role-management",
  "/orders": "order-management",
  "/user-management": "user-management",
  "/analytics-report": "report-management",
  "/staff-management": "staff-management",
  "/products": "product-management",
  "/promotion": "promotion-code-management",
  "/voucher": "voucher-management",
  "/promotion-vouchers": ["promotion-code-management", "voucher-management"],
};
export const notProtectedRoute = ["/login", "/", "/settings", "/notifications"];

export const BOOKING_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  COMPLETED: "completed",
  IN_PROGRESS: "in-progress",
  CANCELLED: "cancelled",
};
