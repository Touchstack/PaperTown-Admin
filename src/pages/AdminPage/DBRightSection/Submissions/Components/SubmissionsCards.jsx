import Child1 from "../../../../../assets/Images/child1.png"
import Slope from "../../../../../assets/Images/Slope.png"
import Slope2 from "../../../../../assets/Images/Slope2.png"
 
const handleClick = () => {
    // Navigate to another page
    window.location.href = 'submissions/Narrative';
  }

function SubmissionsCards() {
  return (
    <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5 mt-12 ml-[3%]">
      {/* card section start */}
      <a href="/">
  <div
    className="bg-fuchsia-600 border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto"
  >
    <p className="rounded-full mr-[80%] text-white text-lg border-[1px] items-center text-center">All</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-x-[30%]  ">
        <div className="text-white text-[42px] font-Bold mt-4"> 125 </div>
        <div className="text-white text-xl mt-4">
        <div className="flex items-center justify-end mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] mr-2 relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             </div>
        <div className="text-fuchsia-300 text-[12px] font-Regular"> Last update <p className="text-white text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-white text-xl inline-flex items-center">
  <img src={Slope} alt="Slope" className="mr-2" />
  12%
</div>

        </div>

    </div>
    </a>


      {/* card section end */}
      {/* card section start */}
      <a>
  <div
    className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto"
  >
    <p className="rounded-full mr-[70%] text-lg border-[1px] items-center text-center text-black" onClick={handleClick}>Memoir</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-x-[30%]  ">
        <div className="text-black text-[42px] font-Bold mt-4"> 125 </div>
        <div className="text-black text-xl mt-4">
        <div className="flex items-center justify-end mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-2 relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             </div>
        <div className="text-grey-300 text-[12px] font-Regular"> Last update <p className="text-black text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-black text-xl inline-flex items-center">
  <img src={Slope2} alt="Slope" className=" mr-2" />
  12%
</div>

        </div>
        
    </div>
    </a>




      {/* card section end */}
      {/* card section start */}
      <a >
  <div
    className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mr-2"
  >
    <p className="rounded-full mr-[70%] text-lg border-[1px] items-center text-center text-black" onClick={handleClick}>Narrative</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-x-[30%]  ">
        <div className="text-black text-[42px] font-Bold mt-4"> 125 </div>
        <div className="text-black text-xl mt-4">
        <div className="flex items-center justify-end mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-2 relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             </div>
        <div className="text-grey-300 text-[12px] font-Regular"> Last update <p className="text-black text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-black text-xl inline-flex items-center">
  <img src={Slope2} alt="Slope" className=" mr-2" />
  12%
</div>

        </div>

    </div>
    </a>
      {/* card section end */}
      {/* card section start */}
      <a href="/">
  <div
    className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto"
  >
    <p className="rounded-full mr-[70%] text-lg border-[1px] items-center text-center text-black" onClick={handleClick}>Narrative</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-x-[30%]  ">
        <div className="text-black text-[42px] font-Bold mt-4"> 125 </div>
        <div className="text-black text-xl mt-4">
        <div className="flex items-center justify-end mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-2 relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             </div>
        <div className="text-grey-300 text-[12px] font-Regular"> Last update <p className="text-black text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-black text-xl inline-flex items-center">
  <img src={Slope2} alt="Slope" className=" mr-2" />
  12%
</div>

        </div>

    </div>
    </a>
      {/* card section end */}
      {/* card section start */}
      <a href="/">
  <div
    className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto"
  >
    <p className="rounded-full mr-[70%] text-lg border-[1px] items-center text-center text-black" onClick={handleClick}>Memoir</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-x-[30%]  ">
        <div className="text-black text-[42px] font-Bold mt-4"> 125 </div>
        <div className="text-black text-xl mt-4">
        <div className="flex items-center justify-end mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-2 relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             </div>
        <div className="text-grey-300 text-[12px] font-Regular"> Last update <p className="text-black text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-black text-xl inline-flex items-center">
  <img src={Slope2} alt="Slope" className=" mr-2" />
  12%
</div>

        </div>

    </div>
    </a>
      {/* card section end */}
      {/* card section start */}
      <a href="/">
  <div
    className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mr-2"
  >
    <p className="rounded-full mr-[70%] text-lg border-[1px] items-center text-center text-black" onClick={handleClick}>Memoir</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-x-[30%]  ">
        <div className="text-black text-[42px] font-Bold mt-4"> 125 </div>
        <div className="text-black text-xl mt-4">
        <div className="flex items-center justify-end mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-2 relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             </div>
        <div className="text-grey-300 text-[12px] font-Regular"> Last update <p className="text-black text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-black text-xl inline-flex items-center">
  <img src={Slope2} alt="Slope" className=" mr-2" />
  12%
</div>

        </div>

    </div>
    </a>
      {/* card section end */}
      {/* card section start */}
      <a href="/">
  <div
    className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto"
  >
    <p className="rounded-full mr-[70%] text-lg border-[1px] items-center text-center text-black" onClick={handleClick}>Memoir</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-x-[30%]  ">
        <div className="text-black text-[42px] font-Bold mt-4"> 125 </div>
        <div className="text-black text-xl mt-4">
        <div className="flex items-center justify-end mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-2 relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             </div>
        <div className="text-grey-300 text-[12px] font-Regular"> Last update <p className="text-black text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-black text-xl inline-flex items-center">
  <img src={Slope2} alt="Slope" className=" mr-2" />
  12%
</div>

        </div>

    </div>
    </a>
      {/* card section end */}
      {/* card section start */}
      <a href="/">
  <div
    className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mb-10"
  >
    <p className="rounded-full mr-[70%] text-lg border-[1px] items-center text-center text-black">Memoir</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-x-[30%]  ">
        <div className="text-black text-[42px] font-Bold mt-4"> 125 </div>
        <div className="text-black text-xl mt-4">
        <div className="flex items-center justify-end mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-2 relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             </div>
        <div className="text-grey-300 text-[12px] font-Regular"> Last update <p className="text-black text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-black text-xl inline-flex items-center">
  <img src={Slope2} alt="Slope" className=" mr-2" />
  12%
</div>

        </div>

    </div>
    </a>
      {/* card section end */}
    </div>
  );
}

export default SubmissionsCards;
