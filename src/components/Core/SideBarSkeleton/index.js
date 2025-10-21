import DashboardNav from "@/components/DashboardNav";
import classes from "./SideBarSkeleton.module.css";
const SideBarSkeleton = ({ children }) => {
  return (
    <>
      <DashboardNav />
      <div className={classes.pageMain}>{children}</div>
    </>
  );
};

export default SideBarSkeleton;
