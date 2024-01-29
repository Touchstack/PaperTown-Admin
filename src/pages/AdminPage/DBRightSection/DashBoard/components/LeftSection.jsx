import { HiChevronRight, HiChevronDown, HiCalendar, HiArrowUp } from "react-icons/hi2";
import Child5 from "../../../../../assets/Images/child5.png";
import dashStats from "../../../../../assets/Images/dashStats.png";

const LeftSection = () => {

    const data = [
        {
            title: "Total Writes",
            fig: "1,456"
         },
         {
            title: "Submissions",
            fig: "567"
         },
         {
            title: "Clubs",
            fig: "50"
         },
    ]

    const writers = [
      { 
         img: Child5,
         name: "Fortune Adeleke", 
         age: 12, 
         grade: "Grade 6", 
         date: "19 Feb, 2023" 
      },
      { 
         img: Child5,
         name: "Fortune Adeleke", 
         age: 12, 
         grade: "Grade 6", 
         date: "19 Feb, 2023" 
      },
      { 
         img: Child5,
         name: "Fortune Adeleke", 
         age: 12, 
         grade: "Grade 6", 
         date: "19 Feb, 2023" 
      },
      { 
         img: Child5,
         name: "Fortune Adeleke", 
         age: 12, 
         grade: "Grade 6", 
         date: "19 Feb, 2023" 
      },
      { 
         img: Child5,
         name: "Fortune Adeleke", 
         age: 12, 
         grade: "Grade 6", 
         date: "19 Feb, 2023" 
      },
   
    ];


  return (
    <div className="flex flex-col lg:flex-auto items-center justify-center">
       <div className="grid grid-cols-2 md:grid-cols-3 gap-[10px]">
        {data.map((info) => (
            <div key={info.title} className="bg-white rounded-lg shadow px-5 py-3 md:w-[215px] xl:w-[315px] w-[170px]">
            <h2 className="text-[13px] text-[#BCBCBC] font-bold mb-2">{info.title}</h2>
            <p className="font-[700] text-[24px] text-[#242424]">{info.fig}</p>
            </div>
        ))}
       </div>

       {/*user growth*/}
        <div className="md:w-[679px] xl:w-[979px] w-[360px] xl:h-[393px] h-[323px] bg-[#FFFFFF]  px-5 py-3  mt-5 rounded-[10px]">
           <div className="flex flex-col p-2">
               <div className="flex justify-between">
                     <p>User Growth</p>
                     {/*Buttons*/}
                     <div className="flex flex-row gap-[10px] cursor-pointer">
                        <div className="w-[86px] h-[40px] bg-[#DB2E78] rounded-[8px] flex justify-center items-center gap-1">
                        <p className="text-[#fff] text-[12px] font-Bold">Week</p>
                        <HiChevronDown className="text-[#fff] text-[10px] font-Bold"/>
                        </div>

                        <div className="w-[122px] h-[40px] border-[1px] border-[#E9ECEF] rounded-[8px] flex items-center justify-center gap-1">
                           <p className="text-[#8B8B8B] text-[12px] font-Bold">Date Range</p>
                           <HiCalendar className="text-[#8B8B8B]"/>
                        </div>
                     </div>
                     {/*Buttons*/}
               </div>

               <div className="flex flex-row items-baseline gap-2">
                  <p className="font-[900] text-[24px] text-[#242424]">1,456</p>
                  <p className="text-[10px] flex flex-row gap-1">
                     <span className="flex flex-row items-center gap-1 text-[#83C303]">
                        <HiArrowUp className="text-[10px]"/>
                        <p>20%</p>
                     </span>

                     vs yesterday
                  </p>
               </div>

               <p className="text-[#8B8B8B] text-[10px]">12:35pm</p>
           </div>

            <div>
               <img src={dashStats} alt="stats" className="xl:w-[900px]" />
            </div>
        </div>
       {/*user growth*/}


      {/* New Writers Section */}
      <div className="md:w-[679px] xl:w-[979px] w-[360px] h-[361px] bg-white px-5 py-3 mb-5  mt-5 rounded-2xl overflow-hidden">
      <div className="flex justify-between items-center p-5">
         <h2 className="text-xl font-semibold">New Writers</h2>
         <a href="/" className="text-sm flex items-center text-[#BCBCBC]">
            View all <HiChevronRight className="ml-1" />
         </a>
      </div>
      <hr className="mx-5"/>

         {/* Table */}
         <div className="overflow-y-auto h-[260px]">
            <table className="w-full text-sm">
               <thead>
               <tr className="text-xs text-[#9A9A9A] bg-white">
                  <th scope="col" className="px-6 py-3 text-left">Name</th>
                  <th scope="col" className=" xl:px-[5rem] px-10 text-left font-medium py-3">Age</th>
                  <th scope="col" className=" xl:px-[5rem] px-10 text-left font-medium py-3">Grade</th>
                  <th scope="col" className=" xl:px-[5rem] px-10 text-left font-medium py-3">Date</th>
               </tr>
               </thead>
               <tbody>
               {writers.map((writer, index) => (
                  <tr key={index} className="bg-white">
                     <td className="px-6 py-4 whitespace-nowrap flex items-center">
                     <img src={writer.img} alt={writer.name} className="h-8 w-8 rounded-full mr-3" />
                     <span className="font-medium text-gray-900">{writer.name}</span>
                     </td>
                     <td className="xl:px-[5rem] px-10 py-4">{writer.age}</td>
                     <td className="xl:px-[5rem] px-10 py-4">{writer.grade}</td>
                     <td className="xl:px-[5rem] px-10 py-4">{writer.date}</td>
                  </tr>
               ))}
               </tbody>
            </table>
         </div>
        </div>
         {/* End New Writers Section */}

      </div>
  )
}

export default LeftSection
