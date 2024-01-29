import SubmissionsBody from "./Components/SubmissionsBody"
import SubmissionsHeader from "./Components/SubmissionsHeader"


const DashBoard = () => {
    return (
      <div className="mt-2 bg-[#F6F6F6] rounded-[25px]">
        <SubmissionsHeader />
        <div className="flex lg:flex-row flex-col items-center justify-center">
       <SubmissionsBody/>
        </div>
      </div>
    )
  }
  
  export default DashBoard