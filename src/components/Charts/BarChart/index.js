// import React from "react";
// import {
//   BarChart as ReBarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import classes from "./BarChart.module.css";

// const BarChartComponent = ({
//   data = [],
//   series1Key = "series1",
//   series2Key = "series2",
//   series3Key = "series3",
//   series1Name = "Series 1",
//   series2Name = "Series 2",
//   series3Name = "Series 3",
//   height = 400,
//   showLegend = true,
//   xAxisKey = "month", // Add this prop to make x-axis key configurable
//   isSingleSeries = false, // Add this prop to handle single series
// }) => {
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className={classes.tooltip}>
//           <p className={classes.tooltipLabel}>{label}</p>
//           {payload.map((entry, index) => (
//             <p
//               key={index}
//               className={classes.tooltipItem}
//               style={{ color: entry.color }}
//             >
//               {`${entry.name}: ${entry.value}${
//                 isSingleSeries ? " calls" : "k"
//               }`}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   const formatYAxisTick = (value) => {
//     return isSingleSeries ? value : `${value}k`;
//   };

//   return (
//     <div className={classes.chartContainer}>
//       <ResponsiveContainer width="100%" height={height}>
//         <ReBarChart
//           data={data}
//           margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
//           barCategoryGap={isSingleSeries ? "10%" : "20%"}
//           barGap={isSingleSeries ? 0 : 4}
//         >
//           <defs>
//             <linearGradient id="gradientBlue" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#3FD2FF" stopOpacity={1} />
//               <stop offset="100%" stopColor="#3FD2FF" stopOpacity={0.4} />
//             </linearGradient>

//             <linearGradient id="gradientOrange" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#FE8F4E" stopOpacity={1} />
//               <stop offset="100%" stopColor="#FE8F4E" stopOpacity={0.4} />
//             </linearGradient>

//             <linearGradient id="gradientPurple" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#4F81FF" stopOpacity={1} />
//               <stop offset="100%" stopColor="#4F81FF" stopOpacity={0.4} />
//             </linearGradient>
//           </defs>

//           <CartesianGrid strokeDasharray="3 3" stroke="var(--whisper-white)" />
//           <XAxis
//             dataKey={xAxisKey}
//             axisLine={false}
//             tickLine={false}
//             tick={{ fontSize: 12, fill: "#666" }}
//           />
//           <YAxis
//             axisLine={false}
//             tickLine={false}
//             tick={{ fontSize: 12, fill: "#666" }}
//             tickFormatter={formatYAxisTick}
//             domain={[0, "dataMax + 2"]}
//           />
//           <Tooltip content={<CustomTooltip />} />
//           {showLegend && <Legend />}

//           {isSingleSeries ? (
//             <Bar
//               dataKey={series1Key}
//               name={series1Name}
//               fill="url(#gradientBlue)"
//               radius={[4, 4, 0, 0]}
//               maxBarSize={80}
//             />
//           ) : (
//             <>
//               <Bar
//                 dataKey={series1Key}
//                 name={series1Name}
//                 fill="url(#gradientBlue)"
//                 radius={[4, 4, 0, 0]}
//                 maxBarSize={30}
//               />
//               <Bar
//                 dataKey={series2Key}
//                 name={series2Name}
//                 fill="url(#gradientOrange)"
//                 radius={[4, 4, 0, 0]}
//                 maxBarSize={30}
//               />
//               <Bar
//                 dataKey={series3Key}
//                 name={series3Name}
//                 fill="url(#gradientPurple)"
//                 radius={[4, 4, 0, 0]}
//                 maxBarSize={30}
//               />
//             </>
//           )}
//         </ReBarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default BarChartComponent;

import React from "react";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import classes from "./BarChart.module.css";

const BarChartComponent = ({
  data = [],
  series1Key = "series1",
  series2Key = "series2",
  series3Key = "series3",
  series1Name = "Series 1",
  series2Name = "Series 2",
  series3Name = "Series 3",
  height = 400,
  showLegend = true,
  xAxisKey = "month", // configurable x-axis key
  isSingleSeries = false, // single series toggle
}) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={classes.tooltip}>
          <p className={classes.tooltipLabel}>{label}</p>
          {payload.map((entry, index) => (
            <p
              key={index}
              className={classes.tooltipItem}
              style={{ color: entry.color }}
            >
              {`${entry.name}: ${entry.value}${
                isSingleSeries ? " calls" : "k"
              }`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const formatYAxisTick = (value) => {
    return isSingleSeries ? value : `${value}k`;
  };

  return (
    <div className={classes.chartContainer}>
      <ResponsiveContainer width="100%" height={height}>
        <ReBarChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          barCategoryGap={isSingleSeries ? "5%" : "10%"} // Reduced from 0/20% to 5%/10%
          barGap={isSingleSeries ? 0 : 2} // Reduced from 0/4 to 0/2
          barSize={isSingleSeries ? 80 : undefined} // Increased from 60 to 80
        >
          <defs>
            <linearGradient id="gradientBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3FD2FF" stopOpacity={1} />
              <stop offset="100%" stopColor="#3FD2FF" stopOpacity={0.4} />
            </linearGradient>

            <linearGradient id="gradientOrange" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FE8F4E" stopOpacity={1} />
              <stop offset="100%" stopColor="#FE8F4E" stopOpacity={0.4} />
            </linearGradient>

            <linearGradient id="gradientPurple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F81FF" stopOpacity={1} />
              <stop offset="100%" stopColor="#4F81FF" stopOpacity={0.4} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="var(--whisper-white)" />
          <XAxis
            dataKey={xAxisKey}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
            tickFormatter={formatYAxisTick}
            domain={[0, "dataMax + 2"]}
          />
          <Tooltip content={<CustomTooltip />} />
          {showLegend && <Legend />}

          {isSingleSeries ? (
            <Bar
              dataKey={series1Key}
              name={series1Name}
              fill="url(#gradientPurple)"
              radius={[4, 4, 0, 0]}
              maxBarSize={80}
            />
          ) : (
            <>
              <Bar
                dataKey={series1Key}
                name={series1Name}
                fill="url(#gradientBlue)"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
              <Bar
                dataKey={series2Key}
                name={series2Name}
                fill="url(#gradientOrange)"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
              <Bar
                dataKey={series3Key}
                name={series3Name}
                fill="url(#gradientPurple)"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
            </>
          )}
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
