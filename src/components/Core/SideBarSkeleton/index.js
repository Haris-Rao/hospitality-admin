import DashboardNav from "@/components/DashboardNav";
const SideBarSkeleton = ({ children }) => {
  return (
    <>
      <DashboardNav />
      {children}
    </>
  );
};

export default SideBarSkeleton;
