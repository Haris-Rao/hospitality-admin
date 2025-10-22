import SideBarSkeleton from "@/components/Core/SideBarSkeleton";
import FilterOption from "@/components/FilterOption";
import InfoCard from "@/components/InfoCard";
import PageHeader from "@/components/PageHeader";
import { hotelManagementData } from "@/constant/DummyData";
import { statusOptions } from "@/data/data";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import classes from "./HotelManagement.module.css";

function HotelManagement() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);
  const navigate = useNavigate();

  const [data, setData] = useState(hotelManagementData);

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
          {data?.map((item) => (
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
