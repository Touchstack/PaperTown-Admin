import Bell from "../../../../../assets/Images/NotificationBell.svg";
import AmakaImg from "../../../../../assets/Images/Amaka.svg";
import Arrow from "../../../../../assets/Images/ArrowUp.svg";
import SearchIcon from "../../../../../assets/Images/Search.Line.svg";
import HorizontalSlider from "../../../../../assets/Images/Slider.svg";

const handleButtonClick = () => {
  // Navigate to another page
  window.location.href = "/admin/newclub";
};

const Header = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-row items-center justify-between md:p-10 p-6 mt-8 lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center">
        <h1 className="font-Bold text-4xl">Clubs</h1>
        <div className="flex gap-4">
          <img src={Bell} alt="NotificationBell.svg" />
          <img src={AmakaImg} alt="Amaka.svg" />
          <p className="inline-block">Amaka Ndubisi </p>
          <img src={Arrow} alt="ArrowUp.svg" className="mt-2 w-[20px]" />
        </div>
      </div>
      {/* Search Bar */}
      <div className="flex flex-row items-center justify-between  md:p-10 p-6 mt-2 ">
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 marker:pointer-events-none">
              <img src={SearchIcon} alt="Search.Line.svg" />
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-[#F9F9FB] border-gray-300 text-[#ACACAC] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] pl-14 p-2.5"
              placeholder="Search by name"
              required
            />
          </div>
          <div className="font-medium ml-2 border border-solid border-[#393939] text-black text-sm rounded-lg p-2.5 cursor-pointer flex items-center">
            <div className="mr-3">
              <img src={HorizontalSlider} alt="Slider.svg" />
            </div>
            <p className="inline-block mr-2 text-[#000000] font-Medium">
              Filter
            </p>
          </div>
        </form>
        {/* Button */}
        <button
          className="bg-[#DF327B] inline-block  text-[#FFFFFF] font-Bold rounded-full w-[165px] py-2 "
          onClick={handleButtonClick}
        >
          + Add new club
        </button>
      </div>
    </div>
  );
};

export default Header;
