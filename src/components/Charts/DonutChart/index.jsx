import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";
import classes from "./DonutChart.module.css";
import { useMediaQuery } from "@/customHooks/useMediaQuery";
import { FaUsers } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

export default function DonutChart({
  data = [],
  colors = ["#F9F9F9", "var(--primary-color)", "var(--secondary-color)"],
  innerRadius = 85,
  outerRadius = 120,
  showLegend = true,
  showCenterLabel = false,
  showCenterValue = true,
  centerLabel = "Total",
  height = 400,
}) {
  const screenSize = useMediaQuery("(max-width: 400px)");

  // Calculate total value
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // Calculate remaining value to reach 100
  const remainingValue = 100 - total;

  // Create enhanced data with remaining segment if needed
  const enhancedData = [...data];
  if (remainingValue > 0) {
    enhancedData.push({
      name: "Remaining",
      value: remainingValue,
      color: "#F9F9F9",
    });
  }

  // Calculate percentages for each segment
  const dataWithPercentages = enhancedData.map((item) => ({
    ...item,
    percentage: ((item.value / 100) * 100).toFixed(1),
  }));

  console.log("02", dataWithPercentages);

  const renderCenterLabel = () => (
    <Label
      value={centerLabel}
      position="center"
      style={{
        fill: "var(--primary-heading-color)",
        fontSize: "14px",
        fontWeight: "500",
      }}
    />
  );

  const renderCenterValue = () => (
    <Label
      value={`${total.toLocaleString()}%`}
      position="center"
      offset={20}
      style={{
        fill: "var(--text-color-dark-secondary)",
        fontSize: "24px",
        fontWeight: "700",
      }}
    />
  );

  return (
    <div className={classes.donutChartContainer}>
      <div className={classes.header}>
        <div className={classes.iconContainer}>
          <IoCallOutline className={classes.icon} />
        </div>
        <h3> Billing</h3>
      </div>
      <ResponsiveContainer width={screenSize ? "80%" : "100%"} height={height}>
        <PieChart>
          <Pie
            data={dataWithPercentages}
            cx="50%"
            cy="50%"
            labelLine={false}
            // label={renderCustomizedLabel}
            outerRadius={screenSize ? outerRadius * 0.8 : outerRadius}
            innerRadius={screenSize ? innerRadius * 0.8 : innerRadius}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
            paddingAngle={4}
            cornerRadius={8}
          >
            {dataWithPercentages.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color || colors[index % colors.length]}
              />
            ))}
            {showCenterLabel && renderCenterLabel()}
            {showCenterValue && renderCenterValue()}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {showLegend && (
        <div className={classes.legendContainer}>
          {dataWithPercentages?.slice(0, 2)?.map((entry, index) => (
            <div key={index} className={classes.legendItem}>
              <span
                className={classes.legendDot}
                style={{
                  backgroundColor: entry.color || colors[index % colors.length],
                }}
              ></span>
              <span className={classes.legendLabel}>{entry.name}</span>
              <span className={classes.legendValue}>{entry.percentage}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
