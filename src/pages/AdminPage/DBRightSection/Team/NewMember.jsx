import AddMember from "./AddMember";
import MemberForm from "./MemberForm";
// import TeamHeader from "./TeamHeader";

function NewMember() {
  return (
    <div className="mt-2 bg-[#FFFFFF] h-[1210px] rounded-[25px]">
      <div>
        <AddMember />

        <MemberForm />
      </div>
    </div>
  );
}

export default NewMember;
