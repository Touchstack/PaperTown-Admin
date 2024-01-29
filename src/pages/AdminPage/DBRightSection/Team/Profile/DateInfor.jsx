import { IoMdCall } from "react-icons/io";
// import Line from "../../../../../assets/Images/lines.png";
import { HiCalendar } from "react-icons/hi2";
import { IoPeople } from "react-icons/io5";
import LoginSessions from "./LoginSessions";
function DateInfor() {
  return (
    <div>
      {/* LG start  */}
      <div className="hidden lg:inline-flex lg:ml-20 ml-3 lg:mt-20 mt-8 flex">
        {/* start  */}
        <div className="">
          <div className="flex items-center lg:gap-5 gap-3  text-[#A3A3A3] ">
            <IoMdCall />
            <h5>Contact</h5>
          </div>
          <p className="text-[#393939] font-Bold lg:text-xl">0200 234 567</p>

          {/* <div className="border-r-2 border-[#A3A3A3]"></div> */}
        </div>
        {/* end  */}
        {/* start  */}
        <div className="lg:ml-20">
          <div className="flex items-centerlg:gap-5 gap-3  text-[#A3A3A3] ">
            <HiCalendar />
            <h5>Date joined</h5>
          </div>
          <p className="text-[#393939] font-Bold lg:text-xl">1st Nov, 2023</p>

          {/* <div className="border-r-2 border-[#A3A3A3]"></div> */}
        </div>
        {/* end  */}
        {/* start  */}
        <div className="lg:ml-20">
          <div className="flex items-center lg:gap-5 gap-3  text-[#A3A3A3] ">
            <IoPeople />
            <h5>User role</h5>
          </div>
          <p className="text-[#393939] font-Bold lg:text-xl">Editor</p>

          {/* <div className="border-r-2 border-[#A3A3A3]"></div> */}
        </div>
        {/* end  */}
        {/* start  */}
        <div className="lg:ml-20">
          <div className="flex items-centerlg:gap-5 gap-3  text-[#A3A3A3] ">
            <HiCalendar />
            <h5>Last activity</h5>
          </div>
          <p className="text-[#393939] font-Bold text-xl">
            18th Feb, 2023 15:36
          </p>

          {/* <div className="border-r-2 border-[#A3A3A3]"></div> */}
        </div>

        {/* end  */}
      </div>
      {/* LG start  */}
      {/* SM start  */}
      <div className=" lg:hidden inline-block lg:ml-20 ml-10  mt-20">
        {/* set 1 start  */}
        <div className="flex gap-10 mb-5">
          {/* start  */}
          <div className="">
            <div className="flex items-center lg:gap-5 gap-3  text-[#A3A3A3] ">
              <IoMdCall />
              <h5>Contact</h5>
            </div>
            <p className="text-[#393939] font-Bold lg:text-xl">0200 234 567</p>

            {/* <div className="border-r-2 border-[#A3A3A3]"></div> */}
          </div>
          {/* end  */}
          {/* start  */}
          <div className="lg:ml-20">
            <div className="flex items-centerlg:gap-5 gap-3  text-[#A3A3A3] ">
              <HiCalendar />
              <h5>Date joined</h5>
            </div>
            <p className="text-[#393939] font-Bold lg:text-xl">1st Nov, 2023</p>

            {/* <div className="border-r-2 border-[#A3A3A3]"></div> */}
          </div>
          {/* end  */}
        </div>
        {/* set 1 end  */}
        {/* set 2 start  */}
        <div className="flex gap-10 ">
          {/* start  */}
          <div className="lg:ml-20">
            <div className="flex items-center lg:gap-5 gap-3  text-[#A3A3A3] ">
              <IoPeople />
              <h5>User role</h5>
            </div>
            <p className="text-[#393939] font-Bold lg:text-xl">Editor</p>

            {/* <div className="border-r-2 border-[#A3A3A3]"></div> */}
          </div>
          {/* end  */}
          {/* start  */}
          <div className="lg:ml-20">
            <div className="flex items-centerlg:gap-5 gap-3  text-[#A3A3A3] ">
              <HiCalendar />
              <h5>Last activity</h5>
            </div>
            <p className="text-[#393939] font-Bold text-xl">
              18th Feb, 2023 15:36
            </p>

            {/* <div className="border-r-2 border-[#A3A3A3]"></div> */}
          </div>
        </div>
        {/* set 2 end  */}

        {/* end  */}
      </div>
      {/* SM start  */}
      <hr className="text-[#D9D9D9] mt-10 lg:ml-[70px]  lg:w-[900px] ml-10 w-[300px]" />

      <LoginSessions />
    </div>
  );
}

export default DateInfor;
20;
