"use client";

import SideBarSkeleton from "@/components/Core/SideBarSkeleton";
import InfoCard from "@/components/InfoCard";
import PageHeader from "@/components/PageHeader";
import classes from "./HotelManagement.module.css";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import FilterOption from "@/components/FilterOption";
import { useNavigate } from "react-router-dom";

function HotelManagement() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);
  const navigate = useNavigate();
  const statusOptions = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  // Filter data based on status
  const filteredData = hotelManagementData.filter((item) => {
    if (!statusFilter || statusFilter === "all") {
      return true;
    }
    return item.status === statusFilter;
  });

  const handleStatusFilter = (option) => {
    setStatusFilter(option.value);
  };

  return (
    <SideBarSkeleton>
      <div className={classes.container}>
        <PageHeader
          title="Hotel Management"
          showSearch={true}
          search={search}
          setSearch={setSearch}
          showFilter={true}
          buttonLabel="Create"
          buttonIcon={<FaPlus />}
          onClick={() => navigate("/hotel-management/create")}
          children={
            <div style={{ padding: "16px" }}>
              <FilterOption
                label="Status Filter"
                options={statusOptions}
                selectedValue={statusFilter}
                onSelect={handleStatusFilter}
              />
            </div>
          }
        />

        <div className={classes.cardWrapper}>
          {hotelManagementData.map((item) => (
            <InfoCard
              key={item?._id}
              data={item}
              variant="primary"
              type="hotel"
              bottonGrid={true}
              onView={() => navigate(`/hotel-management/${item?._id}`)}
              onEdit={() => navigate(`/hotel-management/edit/${item?._id}`)}
            />
          ))}
        </div>
      </div>
    </SideBarSkeleton>
  );
}

export default HotelManagement;

const hotelManagementData = Array(10)
  .fill(0)
  .map((_, index) => ({
    _id: index + 1,
    image: "/assets/images/airport.png",
    name: "Liam Carter",
    date: new Date(),
    dailedRoom: "Kitchen",
    roomNumber: 302,
  }));
