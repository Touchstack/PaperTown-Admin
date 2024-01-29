
import AddSubmission from "./AddSubmission";
import NewSubmissionForm from "./NewSubmissionForm";
// import TeamHeader from "./TeamHeader";

function NewSubmission() {
  return (
    <div className="mt-2 bg-[#FFFFFF] h-[1210px] rounded-[25px]">
      <div>
        <AddSubmission />
        <NewSubmissionForm />
      </div>
    </div>
  );
}

export default NewSubmission;