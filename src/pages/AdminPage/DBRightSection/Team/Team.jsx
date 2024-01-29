import Members from "./MembersMain";
import TeamHeader from "./TeamHeader";

function Team() {
  return (
    <div className="mt-2 bg-[#FFFFFF] h-[1210px] rounded-[25px]">
      <TeamHeader />
      <div>
        <Members />
      </div>
    </div>
  );
}

export default Team;
