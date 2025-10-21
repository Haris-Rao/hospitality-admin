import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import classes from "./AreaChart.module.css";

export default function AreaChartComponent({ data, height = 400 }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={classes.customTooltip}>
          <p className={classes.tooltipMonth}>{label}</p>
          <p className={classes.tooltipValue}>
            {payload[0]?.value?.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  const ActiveDot = (props) => {
    const { cx, cy } = props;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={6}
        fill="white"
        stroke="#4F81FF"
        strokeWidth={2}
      />
    );
  };

  const formatYAxisTick = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    }
    return value.toString();
  };

  const formatXAxisTick = (value) => {
    return value.substring(0, 3);
  };

  return (
    <div className={classes.chartContainer}>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F81FF" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#4F81FF" stopOpacity={0.0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="var(--whisper-white)" />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6B7280" }}
            tickFormatter={formatXAxisTick}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6B7280" }}
            tickFormatter={formatYAxisTick}
            domain={[0, "dataMax"]}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#4F81FF",
              strokeWidth: 1,
              strokeDasharray: "5 5",
            }}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#4F81FF"
            strokeWidth={2}
            fill="url(#areaGradient)"
            activeDot={<ActiveDot />}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
