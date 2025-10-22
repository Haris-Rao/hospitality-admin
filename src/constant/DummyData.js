import { FaRegEye } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { GrStatusCritical } from "react-icons/gr";
import { HiOutlineTrash } from "react-icons/hi2";
import { parking_card_img1, profileImg, user_image } from "./imagePath";

export const dashboardBooking_filter = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Unverified",
    value: "unverified",
  },
  {
    label: "Inactive",
    value: "system-deactivated",
  },
];

export const dashboardBooking_action = [
  { label: "View", icon: <FaRegEye />, value: "view" },
  {
    label: "Delete",
    icon: <HiOutlineTrash />,
    value: "delete",
    color: "#F53649",
    bg: "#FFE3E3",
  },
];
export const userManagement_actions = (status) => [
  { label: "View", icon: <FaRegEye />, value: "view" },
  {
    label: status === "active" ? "Deactivate" : "Activate",
    icon: <GrStatusCritical />,
    value: "updateStatus",
    color: "#000000",
  },
  {
    label: "Delete",
    icon: <HiOutlineTrash />,
    value: "delete",
    color: "#F53649",
    bg: "#FFE3E3",
  },
];

export const airport_action = [
  { label: "View", icon: <FaRegEye />, value: "view" },
  {
    label: "Edit",
    icon: <GoPencil />,
    value: "edit",
  },
  {
    label: "Delete",
    icon: <HiOutlineTrash />,
    value: "delete",
    color: "#F53649",
    bg: "#FFE3E3",
  },
];
export const disbursment_action = [
  { label: "View", icon: <FaRegEye />, value: "view" },
  {
    label: "Delete",
    icon: <HiOutlineTrash />,
    value: "delete",
    color: "#F53649",
    bg: "#FFE3E3",
  },
];
export const dashboardBooking_header = [
  {
    label: "User ID",
    value: "userId",
  },
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Email Address",
    value: "email",
  },
  {
    label: "Phone Number",
    value: "phone",
  },
  {
    label: "Created At",
    value: "createdAt",
  },
  {
    label: "Role",
    value: "role",
  },
  {
    label: "Status",
    value: "status",
  },
];
export const customerManagement_header = [
  {
    label: "User ID",
    value: "userId",
  },
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Email Address",
    value: "email",
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

export const userManagement_data = Array(10)
  .fill("")
  .map((_, index) => ({
    userId: `BKG-${index + 1}`,
    name: `John Doe ${index + 1}`,
    email: `john.doe${index + 1}@example.com`,
    phone: `+1234567890`,
    role: `Admin`,
    status: "active",
    action: "View",
    image: user_image,
  }));

export const bookingOverview_data = [
  { month: "Jan", value: "20" },
  { month: "Feb", value: "30" },
  { month: "Mar", value: "50" },
  { month: "Apr", value: "40" },
  { month: "May", value: "60" },
  { month: "Jun", value: "80" },
  { month: "Jul", value: "100" },
  { month: "Aug", value: "90" },
  { month: "Sep", value: "100" },
  { month: "Oct", value: "100" },
  { month: "Nov", value: "90" },
  { month: "Dec", value: "90" },
];
export const revenueOverview_data = [
  { name: "Jan", uv: 12 },
  { name: "Feb", uv: 18 },
  { name: "Mar", uv: 22 },
  { name: "Apr", uv: 40 },
  { name: "May", uv: 60 },
  { name: "Jun", uv: 35 },
  { name: "Jul", uv: 29 },
  { name: "Aug", uv: 40 },
  { name: "Sep", uv: 38 },
  { name: "Oct", uv: 50 },
  { name: "Nov", uv: 60 },
  { name: "Dec", uv: 70 },
];
export const booking_status_breakdown = [
  { name: "Jan", uv: 12 },
  { name: "Feb", uv: 18 },
  { name: "Mar", uv: 22 },
  { name: "Apr", uv: 40 },
  { name: "May", uv: 60 },
  { name: "Jun", uv: 35 },
  { name: "Jul", uv: 29 },
  { name: "Aug", uv: 40 },
  { name: "Sep", uv: 38 },
  { name: "Oct", uv: 50 },
  { name: "Nov", uv: 60 },
  { name: "Dec", uv: 70 },
];

export const booking_status_breakdown_data = [
  { name: "Active", uv: 12 },
  { name: "Upcoming", uv: 18 },
  { name: "Completed", uv: 40 },
  { name: "Cancelled", uv: 22 },
];
export const operator_performance_data = [
  { name: "Operator 1", uv: 12 },
  { name: "Operator 2", uv: 18 },
  { name: "Operator 3", uv: 40 },
  { name: "Operator 4", uv: 40 },
  { name: "Operator 5", uv: 40 },
];

export const reviewsData = Array(10).fill({
  customerName: "Ethan Blake",
  operatorName: "John Doe",
  service: "Airport Car Parking",
  rating: "4.5",
  bookingDate: new Date().toLocaleDateString(),
  role: "Operator",
  email: "ethan.blake@example.com",
  service: "Airport Car Parking",
  description:
    "Booking parking at the airport has never been this easy! I love the ability to compare different parking options. Highly recommend!",
  createdAt: new Date().toLocaleDateString(),
  rating: 5,
  image: profileImg,
});

export const disbursementData = Array(10)
  .fill({
    disbursementId: "202",
    operatorName: "John Doe",
    amount: "$100",
    paymentMethod: "Bank Transfer",
    disbursementDate: new Date().toLocaleDateString(),
    status: "completed",
  })
  .map((item, index) => ({
    ...item,
    _id: index + 1,
  }));

export const parkingSpacesHeader = [
  { label: "Parking Space ID", value: "parkingSpaceId" },
  { label: "Location/Terminal", value: "location" },
  { label: "Space Number", value: "spaceNumber" },
  { label: "Status", value: "status" },
];

export const parkingSpacesData = Array(10).fill({
  parkingSpaceId: "PS-001",
  location: "T1 - A Section",
  spaceNumber: "01",
  status: "booked",
});

export const discountData = Array(10)
  .fill("")
  .map((_, index) => ({
    discountCode: "SUMMER25",
    discountName: "Summer Sale",
    type: "Percentage",
    amount: "10%",
    validFrom: new Date().toLocaleDateString(),
    validUntil: new Date().toLocaleDateString(),
    capAmount: "$100",
    status: ["completed", "pending", "cancelled"][index % 3],
  }));
export const airportManagement_tabs = [
  {
    label: "Airport",
    value: "airport",
  },
  {
    label: "Terminal",
    value: "terminal",
  },
];
export const parkingOperator_tabs = [
  {
    label: "Payment History",
    value: "paymentHistory",
  },
  {
    label: "Booking History",
    value: "bookingHistory",
  },
  {
    label: "Reviews",
    value: "reviews",
  },
];

export const allParkingsHeader = [
  { label: "Parking Name", value: "name" },
  { label: "Airport", value: "airportName" },
  { label: "Operator", value: "operatorName" },
  { label: "Capacity", value: "capacity" },
  { label: "Featured", value: "isFeatured" },
  { label: "Terminals", value: "terminals" },
  { label: "Status", value: "active" },
  { label: "Actions", value: "action" },
];

export const allParkingsData = Array(10)
  .fill({
    parkingSpaceId: "202",
    operatorName: "John Doe",
    terminal: "T1-A",
    spaceNumber: "001",
    status: "booked",
    image: user_image,
  })
  .map((item, index) => ({
    ...item,
    _id: index + 1,
  }));

export const parkingDetailsHeader = [
  { label: "Booking ID", value: "bookingId" },
  { label: "Customer Name", value: "customerName" },
  { label: "Vehicle Info", value: "vehicleInfo" },
  { label: "Booking Date", value: "bookingDate" },
  { label: "Status", value: "status" },
];

export const parkingDetailsData = Array(10).fill({
  bookingId: "BK-001",
  customerName: "Logan Martinez",
  vehicleInfo: "ABC-123",
  bookingDate: "2025-06-21",
  status: "booked",
});

export const paymentHistoryHeader = [
  { label: "Payment ID", value: "paymentId" },
  { label: "Amount Paid", value: "amountPaid" },
  { label: "Payment Method", value: "paymentMethod" },
  { label: "Date", value: "createdAt" },
];

export const payment_history_data = Array(10).fill({
  paymentId: "101",
  amountPaid: "$100",
  paymentMethod: "Bank Transfer",
  createdAt: new Date().toLocaleDateString(),
  status: "completed",
});
export const bookingHistoryHeader = [
  { label: "Booking ID", value: "bookingId" },
  { label: "Amount Paid", value: "amountPaid" },
  { label: "Vehicle Info", value: "vehicleInfo" },
  { label: "Date", value: "createdAt" },
  { label: "Status", value: "status" },
];

export const booking_history_data = Array(10).fill({
  bookingId: "101",
  amountPaid: "$100",
  vehicleInfo: "ABC-123",
  createdAt: new Date().toLocaleDateString(),
  status: "completed",
});

export const reviews_data = Array(10).fill({
  description:
    "Booking parking at the airport has never been this easy! I love the ability to compare different parking options. Highly recommend!",
  rating: 5,
  createdAt: new Date().toLocaleDateString(),
  image: user_image,
  userName: "John Doe",
});

export const feeManagement_filter = [
  { label: "All", value: "all" },
  { label: "Active", value: true },
  { label: "Inactive", value: false },
];

export const faqs_headers = [
  { label: "S.No", value: "serial" },
  { label: "Question", value: "question" },
  { label: "Answer", value: "answer" },
  { label: "Date", value: "createdAt" },
  { label: "Actions", value: "action" },
];
export const testimonials_headers = [
  { label: "S.No", value: "serial" },
  { label: "Name", value: "name" },
  { label: "Designation", value: "designation" },
  { label: "Testimonial", value: "testimonial" },
  { label: "Rating", value: "rating" },
  { label: "Date", value: "createdAt" },
  { label: "Actions", value: "action" },
];

export const subscriptionData = [
  {
    title: "Basic",
    description:
      "The Premium package provides exclusive, advanced features for businesses that need the best. Unlock all functionalities with priority support and a top-tier experience.",
    subscriptionId: "001",
    subscriptionAvailability: "All Users",
    email: "basic@example.com",
    noOfTrialDays: "7 Days",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    monthlyCost: "10",
    status: "active",
    usersSubscribed: "120",
    recurringType: "Monthly",
    yearlyCost: "100",
  },
  {
    title: "Standard",
    description:
      "The Premium package provides exclusive, advanced features for businesses that need the best. Unlock all functionalities with priority support and a top-tier experience.",
    subscriptionId: "001",
    subscriptionAvailability: "All Users",
    email: "standard@example.com",
    noOfTrialDays: "7 Days",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    monthlyCost: "10",
    usersSubscribed: "120",
    status: "inactive",
    recurringType: "Monthly",
    yearlyCost: "100",
  },
  {
    title: "Premium ",
    description:
      "The Premium package provides exclusive, advanced features for businesses that need the best. Unlock all functionalities with priority support and a top-tier experience.",
    subscriptionId: "001",
    subscriptionAvailability: "All Users",
    email: "premium@example.com",
    noOfTrialDays: "7 Days",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    monthlyCost: "10",
    usersSubscribed: "120",
    status: "inactive",
    recurringType: "Monthly",
    yearlyCost: "100",
  },
];
