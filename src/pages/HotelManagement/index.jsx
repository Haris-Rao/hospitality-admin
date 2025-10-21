"use client";

import PageHeader from "@/components/PageHeader";
import classes from "./HotelManagement.module.css";
import ProfileCard from "@/components/profileCard";

function HotelManagement() {
  return (
    <div className={classes.container}>
      <PageHeader title="Hotel Management" />

      <div className={classes.cardWrapper}>
        {hotelManagementData.map((item) => (
          <ProfileCard
            data={item}
            type="hotelManagement"
            variant="primary"
            bottonGrid={true}
          />
        ))}
      </div>
    </div>
  );
}

export default HotelManagement;

const hotelManagementData = Array(10)
  .fill(0)
  .map((_, index) => ({
    _id: index + 1,
    image: "/images/roomImg.png",
    name: "Liam Carter",
    date: new Date(),
    dailedRoom: "Kitchen",
    roomNumber: 302,
  }));
