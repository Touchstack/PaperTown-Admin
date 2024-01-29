import Child1 from "../../../../../assets/Images/child1.png";
import Child2 from "../../../../../assets/Images/child2.png";
import Child3 from "../../../../../assets/Images/child3.png";
import Child4 from "../../../../../assets/Images/child4.png";
import Child5 from "../../../../../assets/Images/child5.png";

import ChildrenPic from "../../../../../assets/Images/Children.png";

import { HiChevronRight, HiCalendar } from "react-icons/hi2";

const RightSection = () => {
  const data = [
    {
      img: Child1,
      name:"Fifi Brown"
    },
    {
      img: Child2,
      name:"Fifi Brown"
    },
    {
      img: Child3,
      name:"Fifi Brown"
    },
    {
      img: Child4,
      name:"Fifi Brown"
    },
    {
      img: Child5,
      name:"Fifi Brown"
    },
  ]

  const newClubData = [
    {
      img: ChildrenPic,
      title: "Mary Mother of Good Counsel",
      date: "1st Nov, 2023"
    },
    {
       img: ChildrenPic,
       title: "Mary Mother of Good Counsel",
       date: "1st Nov, 2023"
     },
     {
       img: ChildrenPic,
       title: "Mary Mother of Good Counsel",
       date: "1st Nov, 2023"
     },
     {
       img: ChildrenPic,
       title: "Mary Mother of Good Counsel",
       date: "1st Nov, 2023"
     },
     {
       img: ChildrenPic,
       title: "Mary Mother of Good Counsel",
       date: "1st Nov, 2023"
     },
     {
      img: ChildrenPic,
      title: "Mary Mother of Good Counsel",
      date: "1st Nov, 2023"
    },
  ]

  return (
    <div className="flex flex-col items-center lg:flex-auto justify-center mt-6 md:ml-3 lg:mr-2">
        {/*Top writers section*/}
        <div className="lg:w-[410px] md:w-[670px] w-[360px] bg-[#FFFFFF] h-[203px] rounded-[10px] mt-5 md:mt-0">
            <div className="flex flex-row justify-between p-5">
                <p>Top Writers</p>
                
                <div className="flex flex-row items-center text-[#BCBCBC] cursor-pointer">
                <a href="/" className="text-sm flex items-center">
                  View all <HiChevronRight className="ml-1" />
                </a>
                </div>
            </div>
            <hr className="mx-5"/>

            <div className="flex flex-row mt-3 gap-3 items-center justify-center">
              {data.map((data) => (
                <div key={data.name} className="flex flex-col">
                  <img src={data.img} alt="" className="rounded-full w-full h-full" />
                  <p className="text-center">{data.name}</p>
                </div>
              ))}
            </div>
        </div>
        {/*Top writers section*/}


        {/*New Clubs section*/}
        <div className="flex flex-col lg:w-[410px] md:w-[670px] w-[360px] h-[588px] bg-[#FFFFFF] mt-5 mb-7 rounded-[10px]">
            <div className="flex flex-row justify-between p-5">
                <p>News Clubs</p>
                
                <div className="flex flex-row items-center text-[#BCBCBC] cursor-pointer">
                <a href="/" className="text-sm flex items-center">
                  View all <HiChevronRight className="ml-1" />
                </a>
                </div>
            </div>
            <hr className="mx-5"/>


            <div className="flex flex-col mt-5  overflow-y-auto">
              {newClubData.map((data) => (
                <div key={data.title} className="flex flex-row p-3">
                   
                   <div className=" w-[109px] h-[85.69px] flex flex-row  ml-5">
                    <img src={data.img} 
                      alt="" 
                      className="w-full h-full rounded-[10px]" 
                      />
                   </div>
                   
                   <div className="flex flex-col gap-1 ml-1 ">
                      <p className="font-bold">{data.title}</p>
                     
                      <div className="flex flex-row items-center gap-1 text-[#BCBCBC]">
                        <HiCalendar className="w-[10px] h-[10px]"/>
                        <p className="text-[12px]">Date created</p>
                      </div>

                      <p>{data.date}</p>
                   </div>

                </div>
              ))}
        </div>
        </div>
    </div>
  )
}

export default RightSection
