import { HiBell, HiChevronDown } from "react-icons/hi2";
import AppLogo from "../../../../../assets/Images/Ellipse 27.png";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

function NarrativeHeader() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between md:px-10 px-6">
        <Link to="/admin/submissions" className="flex items-center gap-3 mt-[70px]">
          <MdArrowBackIosNew className="text-[22px]" />
          <h1 className="md:text-[42px] text-[22px] font-Bold">Narrative</h1>
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
    </div>
  );
}

export default NarrativeHeader;
