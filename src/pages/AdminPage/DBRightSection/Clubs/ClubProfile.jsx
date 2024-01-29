import ProfileHero from "./component/ProfileHero";
import ProfileLocation from "./component/ProfileLocation";
import ProfileMemberList from "./component/ProfileMemberList";
import ProfileSliders from "./component/ProfileSliders";

const ClubProfile = () => {
  return (
    <div>
      <div className="mt-2 bg-[#FFFFFF]  rounded-[25px]">
        <ProfileHero />
        <ProfileLocation />
        <ProfileMemberList />
        <ProfileSliders />
      </div>
    </div>
  );
};

export default ClubProfile;
