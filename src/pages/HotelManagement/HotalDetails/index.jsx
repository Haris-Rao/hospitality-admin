import SideBarSkeleton from "@/components/Core/SideBarSkeleton";
import classes from "./HotalDetails.module.css";
import PageHeader from "@/components/PageHeader";
import { FaPencil } from "react-icons/fa6";

function HotalDetails() {
  return (
    <SideBarSkeleton>
      <div className={classes.container}>
        <PageHeader
          title="Hotal Details"
          breadcrumbs={[
            { label: "Hotel Management", value: "/hotel-management" },
            { label: "Hotel Details", value: "/hotel-management/1" },
          ]}
          buttonLabel="Edit"
          buttonIcon={<FaPencil />}
          variant="light-danger"
        />
      </div>
    </SideBarSkeleton>
  );
}

export default HotalDetails;
