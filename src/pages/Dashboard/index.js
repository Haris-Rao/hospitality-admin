import CallsCard from "@/components/CallsCard";
import AreaChartComponent from "@/components/Charts/AreaChart";
import DonutChart from "@/components/Charts/DonutChart";
import RangeChart from "@/components/Charts/RangeChart";
import Box from "@/components/Core/Box";
import SideBarSkeleton from "@/components/Core/SideBarSkeleton";
import InfoCard from "@/components/InfoCard";
import PageHeader from "@/components/PageHeader";
import { dashboardData } from "@/constant/DummyData";
import { getYearRange } from "@/helper/HelperFunction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Dashboard.module.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState(dashboardData);
  const [monthlyRevenueFilter, setMonthlyRevenueFilter] = useState(
    getYearRange()[0]
  );

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
                "var(--primary-color)",
                "var(--secondary-color)",
                "#F9F9F9",
              ]}
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
              options={getYearRange()}
              selectedValue={monthlyRevenueFilter}
              onSelect={(item) => setMonthlyRevenueFilter(item)}
            />
            <AreaChartComponent data={data?.areaChartData} height={300} />
          </Box>
          <div className={classes.callLogs}>
            <Box className={classes.calllogsBox}>
              <div className={classes.calllogsSection}>
                <PageHeader
                  title="Call Logs"
                  buttonLabel="View All"
                  onClick={() => navigate("/hotel-management")}
                />
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
