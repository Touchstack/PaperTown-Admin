import ManageClubHeader from "./component/ManageClubHeader";
import ManageClubDetails from "./component/ManageClubDetails";
import ManageClubSchedule from "./component/ManageClubSchedule";
const ManageClub = () => {
  return (
    <div>
      <div className="mt-2 bg-[#FFFFFF] rounded-[25px]">
        <ManageClubHeader />
        <ManageClubDetails />
        <ManageClubSchedule />
      </div>
    </div>
  );
};

export default ManageClub;
