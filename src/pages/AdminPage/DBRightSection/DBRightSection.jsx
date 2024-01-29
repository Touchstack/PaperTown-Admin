import Dashboard from "./DashBoard/DashBoard";
import Team from "./Team/Team";
import CsmPage from "./CMS/CmsPage";
import { Routes, Route } from "react-router-dom";
import Writers from "../DBRightSection/Writers/Writers";
import Clubs from "./Clubs/Clubs";
import NewMember from "./Team/NewMember";
import Submissions from "./Submissions/Submissions";
import NewSubmission from "./Submissions/Components/NewSubmission";
import NewWriter from "./Writers/NewWriter";
import Profile from "./Writers/Profile/Profile";
import Narrative from "./Submissions/Category/Narrative";
import SingleSubmission from "./Submissions/SingleSubmission/SingleSubmission";
import NewWriter2 from "./Writers/NewWriter2";
import AddRole from "./Team/Roles/AddRole";
import PermissionsRole from "./Team/Roles/PermissionsRole";
import ClubProfile from "./Clubs/ClubProfile";
import ManageClub from "./Clubs/ManageClub";
import NewClub from "./Clubs/NewClub";
import ProfileTeam from "./Team/Profile/Profile";

const DBRightSection = () => {
  return (
    <div className="py-12 flex-1 m-2">
      {/*header*/}
      <div className="flex flex-col flex-1">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/cms" element={<CsmPage />} />
          <Route path="/writers" element={<Writers />} />
          <Route path="/writers/NewWriter" element={<NewWriter />} />
          <Route path="/writers/NewWriter2" element={<NewWriter2 />} />
          <Route path="/team/NewMember" element={<NewMember />} />
          <Route
            path="/submissions/NewSubmission"
            element={<NewSubmission />}
          />
          <Route path="/submissions/Narrative" element={<Narrative />} />
          <Route
            path="/submissions/SingleSubmission"
            element={<SingleSubmission />}
          />
          <Route path="/team/new-member" element={<NewMember />} />
          <Route path="/team/add-role" element={<AddRole />} />
          <Route path="/team/member-profile" element={<ProfileTeam />} />
          <Route path="/team/role-permissions" element={<PermissionsRole />} />
          {/* <Route path="/team/member-profile" element={<Profile />} /> */}
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/writers/Profile" element={<Profile />} />
          <Route path="/clubsprofile" element={<ClubProfile />} />
          <Route path="/manageclub" element={<ManageClub />} />
          <Route path="/newclub" element={<NewClub />} />
          <Route path="/submissions" element={<Submissions />} />

          {/* 
                      
            <Route path="/cms" element={} /> 
          */}
        </Routes>
      </div>
    </div>
  );
};

export default DBRightSection;
