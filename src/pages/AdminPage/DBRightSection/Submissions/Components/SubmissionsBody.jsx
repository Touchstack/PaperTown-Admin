
import { useNavigate } from "react-router-dom";
import { PiSlidersHorizontalThin } from "react-icons/pi";
import SubmissionsCards from "./SubmissionsCards";

function SubmissionsBody () {
    const navigate = useNavigate();
  
    const handleNewCategory = () => {
        navigate("/admin/submissions/NewSubmission") }


  return (
    <div>
        <div className="flex items-center justify-between lg:px-10 px:6 gap-5">
  {/* Search Bar */}
  <form className="flex items-center">
    <label htmlFor="simple-search" className="sr-only">
      Search
    </label>
   
    
  </form>
  <div className="ml-[74%] border border-black text-black text-sm font-medium rounded-lg p-2.5 cursor-pointer flex items-center">
  <div className="inline-block mr-1">
    <PiSlidersHorizontalThin />
  </div>
  <p className="inline-block">Filter</p>
</div>
  {/* Button */}
  <button className="bg-[#DF327B] lg:inline-block hidden text-[#FFFFFF] font-Bold rounded-full w-[185px] py-2 " onClick={handleNewCategory} >
    + Add New Category
  </button>
  
</div>
<SubmissionsCards />
    </div>
  )
}

export default SubmissionsBody;