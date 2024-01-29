import ProfileBody from "./ProfileBody";
import ProfileCard from "./ProfileCards";
import ProfileHeader from "./ProfileHeader";
import ProfileHero from "./ProfileHero";

function Profile() {
  return (
    <div className="mt-2 bg-[#FFFFFF] w-[1210px] h-[1510px] rounded-[25px]">
      <ProfileHero />
      <ProfileHeader />
      <ProfileBody />
      <ProfileCard />
    </div>
  );
}

export default Profile;