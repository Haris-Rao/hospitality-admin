import { isMobileViewHook } from "customHooks/isMobileViewHook";
import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import {
  Cell,
  Pie,
  PieChart as RePieChart,
  ResponsiveContainer,
} from "recharts";
import classes from "./RangeChart.module.css";

const COLORS = [
  "var(--light-blue)",
  "var(--primary-color)",
  "var(--secondary-color)",
]; // Package 1, Package 2, Package 3

const RangeChart = ({
  totalSubscriptions = 1500,
  package1 = 500,
  package2 = 600,
  package3 = 400,
  title = "Most Active Subscription",
  package1Count = null,
  package2Count = null,
  package3Count = null,
}) => {
  const data = [
    { name: "Package 1", value: package1 },
    { name: "Package 2", value: package2 },
    { name: "Package 3", value: package3 },
  ];
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    isMobileViewHook(setIsMobile, 500);
  }, []);

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.iconContainer}>
          <FaUsers className={classes.icon} />
        </div>
        <h3 className={classes.title}>{title}</h3>
      </div>

      <div className={classes.gaugeContainer}>
        <div className={classes.gauge}>
          <div className={classes.gaugeValue}>
            <span className={classes.totalNumber}>{totalSubscriptions}</span>
            <span className={classes.totalLabel}>Total Subscripitons</span>
          </div>

          <ResponsiveContainer width="100%" height={isMobile ? 130 : 160}>
            <RePieChart>
              <Pie
                dataKey="value"
                data={data}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={isMobile ? 90 : 120}
                outerRadius={isMobile ? 120 : 150}
                paddingAngle={4}
                cornerRadius={8}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </RePieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={classes.legend}>
        <div className={classes.legendItem}>
          <div className={`${classes.legendDot} ${classes.package1}`}></div>
          <span className={classes.legendText}>Package 1</span>
          {package1Count && (
            <span className={classes.legendValue}>{package1Count}</span>
          )}
        </div>
        <div className={classes.legendItem}>
          <div className={`${classes.legendDot} ${classes.package2}`}></div>
          <span className={classes.legendText}>Package 2</span>
          {package2Count && (
            <span className={classes.legendValue}>{package2Count}</span>
          )}
        </div>
        <div className={classes.legendItem}>
          <div className={`${classes.legendDot} ${classes.package3}`}></div>
          <span className={classes.legendText}>Package 3</span>
          {package3Count && (
            <span className={classes.legendValue}>{package3Count}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RangeChart;
