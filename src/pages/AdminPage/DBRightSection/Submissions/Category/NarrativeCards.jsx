import child1 from "../../../../../assets/Images/child1.png";
import DateLogo from "../../../../../assets/Images/DateLogo.png";
import { useNavigate } from "react-router-dom";


const handleClick = () => {
  const navigate = useNavigate();
  navigate('/SingleSubmission');
};
const NarrativeCards = () => {
  const cards = Array.from({ length: 9 }).map((_, index) => (
    <div
      key={index}
      className="flex-shrink-0 w-[340px] h-[258px] rounded-[26px] border-[1px] lg:mr-[20px] border-[#E8E8E8] bg-white p-4 mb-5 ml-5"
      onClick={handleClick}
    >
      <div className="flex flex-col gap-2 text-[6.99px] " >
        <div className="w-[47px] h-[29px] text-[#000] bg-white text-[12px] font-SemiBold rounded-[26px] border-[1px] border-[#000] flex items-center justify-center">
          Fiction
        </div>

        <div className="flex items-center gap-2">
          <img src={DateLogo} className="w-4 h-4" alt="Date Logo" />
          <span className="text-[10.603px] text-black">23rd January, 2023</span>
        </div>
      </div>

      <h1 className="text-[#000000] text-3xl font-Bold w-full p-2 mb-2">
        Repetitive sounds of the echo
      </h1>

      <div className="flex items-center">
        <img
          src={child1}
          alt="Enoch Charway"
          className="w-[39px] h-[39px] rounded-full mr-2"
        />
        <p className="text-[#000000] text-[10.603px] pt-2">
          Enoch Charway
        </p>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-3 gap-3 md:overflow-x-auto overflow-y-auto lg:px-10 px-6 mt-3">
      {cards}
    </div>
  );
};

export default NarrativeCards;
