import { HiBell, HiChevronDown } from "react-icons/hi2";
import AppLogo from "../../../../assets/Images/Ellipse 27.png";
import { PiSlidersHorizontalThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const handleButtonClick = () => {
  // Navigate to another page

  window.location.href = 'writers/NewWriter';
}

function WriterHeader() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between md:p-10 p-6">
        <h1 className="md:text-[42px] text-[22px] font-[700]">Writers</h1>
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
      <div className="flex items-center justify-between lg:px-10 px:6 gap-5">
        {/* Search Bar */}
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <CiSearch />
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
              placeholder="Search branch name..."
              required
            />
          </div>
          <div className="ml-2 border border-black text-black text-sm font-medium rounded-lg p-2.5 cursor-pointer flex items-center">
            <div className="inline-block mr-1">
              <PiSlidersHorizontalThin />
            </div>
            <p className="inline-block">Filter</p>
          </div>
        </form>
        {/* Button */}
        <button
          className="bg-[#DF327B] lg:inline-block hidden text-[#FFFFFF] font-Bold rounded-full w-[185px] py-2 "
          onClick={handleButtonClick}
        >
          + Add New Writer
        </button>
      </div>
    </div>
  );
}

export default WriterHeader;
