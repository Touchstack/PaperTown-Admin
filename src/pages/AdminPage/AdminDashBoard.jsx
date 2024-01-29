import DBLeftSection from "./DBLeftSection/DBLeftSection";
import DBRightSection from "./DBRightSection/DBRightSection";

const AdminDashBoard = () => {
  return (
    <div className="flex bg-gradient-to-b from-[#e7d2de] to-[#f7f4d4] min-h-screen">
      <DBLeftSection />
      <DBRightSection />
    </div>
  );
};
export default AdminDashBoard;
