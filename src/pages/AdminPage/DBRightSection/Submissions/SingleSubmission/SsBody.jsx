import { HiBell, HiChevronDown } from "react-icons/hi2";
import AppLogo from "../../../../../assets/Images/Ellipse 27.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import child1 from "../../../../../assets/Images/child1.png";
import DateLogo from "../../../../../assets/Images/DateLogo.png";

const SsBody = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between md:px-14 px-6">
        <Link to="/admin/submissions" className="flex items-center gap-3 mt-[70px]">
          <MdArrowBackIosNew className="text-[22px]" />
          <h1 className="md:text-[42px] text-[22px] font-Bold">Repetitive sounds of the echo</h1>
        </Link>

        <div className="flex flex-row items-center md:gap-5 gap-3">
          <HiBell className="md:text-[30px] text-[25px]  text-[#BDBDBD]" />

          <div>
            <img
              src={AppLogo}
              alt=""
              className="md:w-[50px] w-[40px] md:h-[50px] h-[40px]"
            />
          </div>

          <div className="flex flex-row items-center gap-2">
            <p>Amaka Ndubisi</p>
            <HiChevronDown className="text-[15px]" />
          </div>
        </div>
      </div>

      <div className="flex items-center md:px-14 px-6">
        <img
          src={child1}
          alt="Enoch Charway"
          className="w-[30px] h-[30px] rounded-full mr-2"
        />
        <p className="text-[#000000] text-xs pt-2">
          Enoch Charway
        </p>

        <div className="flex items-center gap-2 ml-2 mt-1">
          <img src={DateLogo} className="w-4 h-4" alt="Date Logo" />
          <span className="text-xs text-black">23rd January, 2023</span>
        </div>
      </div>

      <div className="w-full md:px-14 px-6 leading-relaxed lg:mt-10 mt-6 lg:mb-10 mb-6">
        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>
          <br/>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>
          <br/>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>
          <br/>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>
          <br/>
      </div>

      <div className="w-full border-b border-dotted mt-5"></div>
<div className="w-full md:px-14 px-6 leading-relaxed lg:mt-10 mt-6 lg:mb-10 mb-6">
  <p className="text-[30px]">Score</p>
  
  {/* Two input boxes */}
  <div className="flex mt-3">
    <input
      type="text"
      className="bg-gray-200 rounded-md px-3 py-2 mr-3"
    />
    <p className="text-black">out of</p>
    <input
      type="text"
      className="bg-gray-200 rounded-md px-3 py-2 ml-3"
    />
    <p className="text-black ml-1"> marks</p>
  </div>

  {/* Large input box */}
  <input
    placeholder="Leave your comments"
    className="bg-gray-200 rounded-md px-3 py-2 mt-3 w-[500px] h-[200px] max-w-[600px]"
  />
</div>
<div className="lg:px-14 px-6 lg:mb-10 mb-6">
<button
              type="submit"
              className="bg-[#DB2E78] font-Bold text-white rounded-full  p-2 w-[500px] h-[55px]"
            >
              Submit
            </button>
            </div>
    </div>
  );
};

export default SsBody;
