import Profile from "../../../../assets/Images/Profile.png"
//import WritersSlider from "./WritersSlider";

const WritersBody = () => {
  
  const handleClick = () => {
    // Navigate to another page
    window.location.href = 'writers/Profile';
  }

  return (
    <div>
        <div className="flex justify-between lg:ml-10 mt-10 border-b-2 border-[#EFEEEE]">
    <ul className="flex ml-3 md:ml-7 lg:ml-10">
      <li className=" mr-16">Name</li>
      <li className=" mr-16 md:mr-[120%]">Email</li>
      <li className="lg:mr-[130%] mr-16 md:mr-[110%]">Contact</li>
      <li className="lg:mr-[110%] mr-16 md:mr-[10%]">Age</li>
      <li className="lg:mr-[100%] mr-16 md:mr-[100%]">Grade</li>
    </ul>
  </div>
  <div className="mt-10 lg:ml-10 ml-4">
    {/* start  */}
   
   {Array.from({ length: 12}).map((_, index) => (
    <div onClick={ handleClick} key={index} className="flex gap-3 text-center items-center mb-5 cursor-pointer">
      <img src={Profile} alt="" className="w-[51px] h-[51px]"/>
      <p className=" lg:inline-flex md:inline-flex hidden">
        Fortune Adeleke
      </p>
      <span className="lg:ml-[10%] md:ml-5">
        fortune.adeleke@gmail.com
      </span>
      <span className="lg:ml-[8%] md:ml-16">0200 234 567</span>
      <span className="lg:ml-[16%] md:ml-[20%]">9</span>
      <span className="lg:ml-[16%] md:ml-[20%]">Grade 6</span>
    </div>
   ))}
      
  </div>
  <div className="lg:ml-[3%] md:ml-[5%] lg:mt-[3%]">
  <div className="flex items-center justify-between ">
  <p>
  <span className="font-Bold opacity-100">1</span>
  <span className="opacity-75"> of 10 </span>
  <span className="flex-right text-right ml-[] ">
   {/*<WritersSlider />*/ }
    </span>
</p>
      </div>
 
  </div>
  </div>
);
}


export default WritersBody