import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import classes from "./LineChart.module.css";

export default function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          stroke="var(--text-color)"
          axisLine={false}
          tickLine={false}
          tick={<CustomXAxisTick />}
        />
        <YAxis
          stroke="var(--text-color)"
          axisLine={false}
          tickLine={false}
          tick={<CustomYAxisTick />}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ strokeDasharray: "3 3", stroke: "#FFB300" }}
        />
        <Line
          type="monotone"
          dataKey="earning"
          stroke="var(--main-color)"
          strokeWidth={4}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={classes.customTooltip}>
        <div className={classes.content_container}>
          <p className={classes.SuccessfulTitle}>Successful Transactions </p>
          <p className={classes.Value}>{`${payload[0]?.value}`}</p>
        </div>
        <div className={classes.content_container}>
          <p className={classes.failedTitle}>Failed Transactions: </p>
          <p className={classes.Value}>{`${payload[1]?.value}`}</p>
        </div>
      </div>
    );
  }
  return null;
};
const CustomXAxisTick = (props) => {
  const { x, y, payload } = props;
  return (
    <text
      x={x}
      y={y}
      dy={18}
      textAnchor="middle"
      style={{ fill: "var(--text-color)" }}
    >
      {payload.value}
    </text>
  );
};
const CustomYAxisTick = (props) => {
  const { x, y, payload } = props;
  return (
    <text
      x={x}
      y={y}
      dx={-10}
      textAnchor="end"
      style={{ fill: "var(--text-color)" }}
    >
      {payload.value}
    </text>
  );
};
const data = [
  {
    name: "Jan",
    earning: 4000,
  },
  {
    name: "Feb",
    earning: 3000,
  },
  {
    name: "Mar",
    earning: 2000,
  },
  {
    name: "Apr",
    earning: 2780,
  },
  {
    name: "May",
    earning: 1890,
  },
  {
    name: "Jun",
    earning: 2390,
  },
  {
    name: "Jul",
    earning: 3490,
  },
  {
    name: "Aug",
    earning: 3490,
  },
  {
    name: "Sep",
    earning: 3490,
  },
  {
    name: "Oct",
    earning: 4590,
  },
  {
    name: "Nov",
    earning: 4890,
  },
  {
    name: "Dec",
    earning: 4890,
  },
];
