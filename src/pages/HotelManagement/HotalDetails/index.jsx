import SideBarSkeleton from "@/components/Core/SideBarSkeleton";
import classes from "./HotalDetails.module.css";
import PageHeader from "@/components/PageHeader";
import { FaPencil } from "react-icons/fa6";
import Box from "@/components/Core/Box";
import { useState } from "react";
import InfoCard from "@/components/InfoCard";
import InfoDetailCard from "@/components/InfoDetailCard";
import { useNavigate } from "react-router-dom";

function HotalDetails() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <SideBarSkeleton>
      <div className={classes.mainContainer}>
        <PageHeader
          title="Hotal Details"
          breadcrumbs={[
            { label: "Hotel Management", value: "/hotel-management" },
            { label: "Hotel Details", value: "/hotel-management/1" },
          ]}
          buttonLabel="Edit"
          buttonIcon={<FaPencil />}
          variant="light-danger"
          onClick={() => navigate("/hotel-management/create")}
        />
        <div className={classes.detailCardSection}>
          <InfoDetailCard data={hotelDetailsData} />
        </div>

        <Box className={classes.calllogsBox}>
          <div className={classes.calllogsSection}>
            <PageHeader
              title="Call Logs"
              showSearch={true}
              search={search}
              setSearch={setSearch}
            />
            <div className={classes.cardWrapper}>
              {callLogsData?.map((callLog) => (
                <InfoCard key={callLog._id} data={callLog} type="callLogs" />
              ))}
            </div>
          </div>
        </Box>
      </div>
    </SideBarSkeleton>
  );
}

export default HotalDetails;

const callLogsData = Array(12)
  .fill(0)
  .map((_, index) => ({
    _id: index + 1,
    name: "Benjamin David",
    date: new Date(),
    duration: "10 minutes",
    callType: "Inbound",
    callStatus: "active",
  }));
const hotelDetailsData = {
  name: "Lakeside Inn",
  email: "Levin.J@gmail.com",
  phoneNumber: "+1 0678 9012",
  website: "www.lakeside.in",
  location: "8502 Preston Rd. I...",
  currentPlan: "$49 - Monthly",
  chatEnabled: true,
};
