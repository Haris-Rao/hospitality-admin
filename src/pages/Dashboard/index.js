import CallsCard from "@/components/CallsCard";
import AreaChartComponent from "@/components/Charts/AreaChart";
import Box from "@/components/Core/Box";
import SideBarSkeleton from "@/components/Core/SideBarSkeleton";
import FilterOption from "@/components/FilterOption";
import InfoCard from "@/components/InfoCard";
import PageHeader from "@/components/PageHeader";
import { dashboardData } from "@/constant/DummyData";
import { useState } from "react";
import classes from "./Dashboard.module.css";
import RangeChart from "@/components/Charts/RangeChart";
import DonutChart from "@/components/Charts/DonutChart";

export default function Dashboard() {
  const [data, setData] = useState(dashboardData);
  return (
    <SideBarSkeleton>
      <div className={classes.dashboardContainer}>
        <div className={classes.leftCol}>
          <Box className={classes.chartBox}>
            <RangeChart
              totalSubscriptions={"1500"}
              package1={500}
              package2={600}
              package3={400}
              title="Most Active Subscripiton"
            />
          </Box>
          {data?.callCard?.map((call, index) => (
            <CallsCard
              key={index}
              data={call}
              icon={call?.icon}
              rightIcon={call?.rightIcon}
            />
          ))}
          <Box className={classes.chartBox}>
            <DonutChart
              data={data?.donutChartData}
              colors={[
                "var(--light-blue)",
                "var(--primary-color)",
                "var(--secondary-color)",
              ]}
              centerLabel="Total"
              showCenterLabel={false}
              height={300}
            />
          </Box>
        </div>
        <div className={classes.rightCol}>
          <Box className={classes.revenueChart}>
            <PageHeader
              className={classes.pageHeadClass}
              title="Monthly Revenue"
              showFilter={true}
              children={
                <FilterOption
                  label="Select Range"
                  options={[
                    { label: "Monthly", value: "monthly" },
                    { label: "Yearly", value: "yearly" },
                  ]}
                />
              }
            />
            <AreaChartComponent data={data?.areaChartData} height={300} />
          </Box>
          <div className={classes.callLogs}>
            <Box className={classes.calllogsBox}>
              <div className={classes.calllogsSection}>
                <PageHeader title="Call Logs" buttonLabel="View All" />
                <div className={classes.cardWrapper}>
                  {data?.callLogsData?.map((callLog) => (
                    <InfoCard
                      key={callLog?._id}
                      data={callLog}
                      type="callLogsSecondary"
                      variant="secondary"
                    />
                  ))}
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </SideBarSkeleton>
  );
}
