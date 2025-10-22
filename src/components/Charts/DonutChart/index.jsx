import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";
import classes from "./DonutChart.module.css";
import { useMediaQuery } from "@/customHooks/useMediaQuery";

export default function DonutChart({
  data = [],
  colors = [
    "var(--light-blue)",
    "var(--primary-color)",
    "var(--secondary-color)",
  ],
  innerRadius = 85,
  outerRadius = 120,

  showLegend = true,
  showCenterLabel = true,
  showCenterValue = true,
  centerLabel = "Total",
  height = 400,
}) {
  const screenSize = useMediaQuery("(max-width: 400px)");

  // Calculate total value
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // Calculate percentages for each segment
  const dataWithPercentages = data.map((item) => ({
    ...item,
    percentage: ((item.value / total) * 100).toFixed(1),
  }));

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius: innerR,
    outerRadius: outerR,
    percent,
    index,
  }) => {
    // Position text at the center of each segment
    const radius = innerR + (outerR - innerR) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="12"
        fontWeight="500"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

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
      value={total.toLocaleString()}
      position="center"
      offset={20}
      style={{
        fill: "var(--primary-heading-color)",
        fontSize: "24px",
        fontWeight: "700",
      }}
    />
  );

  return (
    <div className={classes.donutChartContainer}>
      <ResponsiveContainer width={screenSize ? "80%" : "100%"} height={height}>
        <PieChart>
          <Pie
            data={dataWithPercentages}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={screenSize ? outerRadius * 0.8 : outerRadius}
            innerRadius={screenSize ? innerRadius * 0.8 : innerRadius}
            fill="#8884d8"
            dataKey="value"
          >
            {dataWithPercentages.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
            {showCenterLabel && renderCenterLabel()}
            {showCenterValue && renderCenterValue()}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {showLegend && (
        <div className={classes.legendContainer}>
          {dataWithPercentages.map((entry, index) => (
            <div key={index} className={classes.legendItem}>
              <span
                className={classes.legendDot}
                style={{ backgroundColor: colors[index % colors.length] }}
              ></span>
              <span className={classes.legendLabel}>{entry.name}</span>
              <span className={classes.legendValue}>{entry.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
