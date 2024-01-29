import Fortune from "../../../../../assets/Images/Profile.png";
import { IoMdCall } from "react-icons/io";
import { HiCalendar } from "react-icons/hi2";
import { GiPartyPopper } from "react-icons/gi";
import { MdOutlineSchool } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";

function ProfileHeader() {
  return (
    <>
      <div className="flex flex-row items-center md:gap-5 lg:mt-10 lg:px-[50px] mb-10">
        <div>
          <img src={Fortune} alt="" className="relative lg:px-[10px] md:w-[123px] w-[40px] md:h-[100px] h-[40px] ml-20" />
        </div>
        <div className="flex flex-col">
          <p className="text-[#000000] font-Bold text-3xl mb-1">Fortune Adeleke</p>
          <p className="text-[#B44DB8] mb-2">fortune.adeleke@gmail.com</p>
        </div>
        <div className="grid">
          <p className="flex flex-col ml-20 text-[#393939]"></p>
          <p></p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <p className="lg:px-[90px] lg:ml-[50px] lg:mb-10">
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
        </p>

        {/* start  */}
        <div className="">
          <div className="grid grid-cols-3 gap-5">
            <div className="flex items-center lg:gap-5 lg:px-2 gap-3 text-[#A3A3A3] border-r border-[#D9D9D9] pr-5">
              <GiPartyPopper />
              <h5>Age</h5>
            </div>
            <p className=" text-[#A3A3A3] inline-flex border-r border-[#D9D9D9]">
              <MdOutlineSchool />
              <h5 className="lg:px-2">School</h5>
            </p>
            <div className="flex items-center lg:gap-5 gap-3 text-[#A3A3A3]">
              <IoDiamondOutline />
              <h5>Grade</h5>
            </div>
            <p className=" font-Regular lg:text-xl  lg:px-2">11 years</p>
            <div className="flex items-center lg:gap-5 gap-3">
              <h5 className="font-Regular lg:text-xl">Faith Montessori</h5>
            </div>
            <p className=" font-Regular lg:text-xl">Grade 9</p>
            <div className="flex items-center lg:gap-5 lg:px-2 gap-3 text-[#A3A3A3] border-r border-[#D9D9D9]">
              <IoMdCall />
              <h5>Contact</h5>
            </div>
            <p className=" text-[#A3A3A3] inline-flex ">
              <HiCalendar />
              <h5 className="lg:px-2">Date joined</h5>
            </p>
            <div className="flex items-center lg:gap-5 gap-3 text-[#A3A3A3]">
              
              <h5></h5>
            </div>
            <p className=" font-Regular lg:text-xl  lg:px-2 lg:mb-10">0200 234 567</p>
            <div className="flex items-center lg:gap-5 gap-3">
              <h5 className="font-Regular lg:text-xl lg:mb-10">1st Nov, 2023</h5>
            </div>
          </div>
        </div>
        {/* end  */}
      </div>
    </>
  );
}

export default ProfileHeader;
