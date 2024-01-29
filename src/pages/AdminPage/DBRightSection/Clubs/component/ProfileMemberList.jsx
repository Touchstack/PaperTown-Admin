import Profile from "../../../../../assets/Images/Profile.png";
import Modal from "../../../../../components/Modal/Modal";
import Tick from "../../../../../assets/Images/Tick.svg";
import Warning from "../../../../../assets/Images/Warning.svg";
import { useState } from "react";
import PropTypes from "prop-types";

const ProfileMemberList = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);

  const openModal = (modalNumber) => {
    // Close all modals first
    setShowModal(false);
    setShowModal2(false);
    setShowModal3(false);
    setShowModal4(false);
    setShowModal5(false);

    // Open the desired modal
    switch (modalNumber) {
      case 1:
        setShowModal(true);
        break;
      case 2:
        setShowModal2(true);
        break;
      case 3:
        setShowModal3(true);
        break;
      case 4:
        setShowModal4(true);
        break;
      case 5:
        setShowModal5(true);
        break;
      default:
        break;
    }
  };

  const closeModal = (modalNumber) => {
    switch (modalNumber) {
      case 1:
        setShowModal(false);
        break;
      case 2:
        setShowModal2(false);
        break;
      case 3:
        setShowModal3(false);
        break;
      case 4:
        setShowModal4(false);
        break;
      case 5:
        setShowModal5(false);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div
        className="flex justify-between lg:ml-10 mt-10 pb-4 border-b-2 border-[#D9D9D9]
     border-dashed"
      ></div>
      <div className="mx-auto">
        <div className="flex flex-row items-center justify-between md:p-10 p-6 mt-8 text-center">
          <h1 className="font-Bold text-4xl">Member List</h1>
          <div className="flex gap-4">
            <button
              className="inline-flex text-[#BDBDBD] font-Medium rounded-full w-[110px] h-[50px] py-2 bg-[#F2F2F2] justify-center items-center"
              onClick={() => setShowModal4(true)}
            >
              <span className="inline-flex mr-2"></span> Remove
            </button>
            <button
              className="inline-flex text-[#DB2E78] font-Bold text-lg rounded-full w-[170px] py-2 justify-center items-center border border-[#DB2E78]"
              onClick={() => setShowModal(true)}
            >
              <span className="inline-flex mr-2"></span>+ Add member
            </button>
          </div>
        </div>

        <div className="flex justify-between lg:ml-1 mt-10 text-[#9A9A9A]">
          <ul className="flex ml-3 md:ml-7 lg:ml-28">
            <li className="lg:mr-[100%] mr-16 md:mr-[140%]">Name</li>
            <li className="lg:mr-[100%] mr-16 md:mr-[140%]">Email</li>
            <li className="lg:mr-[90%] mr-16 md:mr-[140%]">Contact</li>
            <li className="lg:mr-[90%] mr-16 md:mr-[140%]">Age</li>
            <li className="lg:mr-[90%] mr-16 md:mr-[140%]">Grade</li>
          </ul>
        </div>
        <hr className="text-[#D9D9D9] mt-5 ml-[50px] w-[990px]" />
        <div className="mt-10 lg:ml-2 ml-4">
          {/* start  */}
          <div className="flex gap-3 text-center items-center mb-5 py-4 font-SemiBold">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-[#F6F6F6] border-gray-300 rounded dark:bg-gray-700"
            />

            <img src={Profile} alt="" className="w-[51px] h-[51px]" />
            <p className="lg:inline-flex md:inline-flex hidden">
              Fortune Adeleke
            </p>
            <span className="lg:ml-[3%] md:ml-5">
              fortune.adeleke@gmail.com
            </span>
            <span className="lg:ml-[14%] md:ml-16">0200 234 567</span>
            <span className="lg:ml-[7%] md:ml-[20%]">9</span>
            <span className="lg:ml-[15%] md:ml-[20%]">Grade 6</span>
          </div>

          <p className="lg:hidden md:hidden inline-block font-Bold">
            Fortune Adeleke
          </p>
          {/* end  */}
          {/* start  */}
          <div className="flex lg:gap-3 bg-[#F9F9F9] text-center py-4 items-center mb-5 lg:mx-auto font-SemiBold">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700"
            />

            <img src={Profile} alt="" className="w-[51px] h-[51px]" />
            <p className="font-Bold lg:inline-flex md:inline-flex hidden">
              Fortune Adeleke
            </p>
            <span className="lg:ml-[3%] md:ml-5">
              fortune.adeleke@gmail.com
            </span>
            <span className="lg:ml-[14%] md:ml-16">0200 234 567</span>
            <span className="lg:ml-[7%] md:ml-[20%]">15</span>
            <span className="lg:ml-[15%] md:ml-[20%]">Grade 6</span>
          </div>
          <p className="lg:hidden md:hidden inline-block font-Bold">
            Fortune Adeleke
          </p>
          {/* end  */}
          {/* start  */}
          <div className="flex gap-3 text-center items-center mb-5 py-4 font-SemiBold">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700"
            />

            <img src={Profile} alt="" className="w-[51px] h-[51px]" />
            <p className="font-Bold lg:inline-flex md:inline-flex hidden">
              Fortune Adeleke
            </p>
            <span className="lg:ml-[3%] md:ml-5">
              fortune.adeleke@gmail.com
            </span>
            <span className="lg:ml-[14%] md:ml-16">0200 234 567</span>
            <span className="lg:ml-[7%] md:ml-[20%]">13</span>
            <span className="lg:ml-[15%] md:ml-[20%]">Grade 6</span>
          </div>
          <p className="lg:hidden md:hidden inline-block font-SemiBold">
            Fortune Adeleke
          </p>
          {/* end  */}
          {/* start  */}
          <div className="flex lg:gap-3 bg-[#F9F9F9] py-4 text-center items-center mb-5 lg:mx-auto font-SemiBold">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700"
            />

            <img src={Profile} alt="" className="w-[51px] h-[51px]" />
            <p className="font-Bold lg:inline-flex md:inline-flex hidden">
              Fortune Adeleke
            </p>
            <span className="lg:ml-[3%] md:ml-5">
              fortune.adeleke@gmail.com
            </span>
            <span className="lg:ml-[14%] md:ml-16">0200 234 567</span>
            <span className="lg:ml-[7%] md:ml-[20%]">8</span>
            <span className="lg:ml-[15%] md:ml-[20%]">Grade 6</span>
          </div>
          <p className="lg:hidden md:hidden inline-block font-Bold">
            Fortune Adeleke
          </p>
          {/* end  */}
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => closeModal(1)}>
        <header className="lg:text-3xl md:text-2xl sm:text-xl text-xl ml-5 font-Bold text-[#040A1D] break-normal md:break-all">
          Add member
        </header>
        <p className="text-[#000000] tracking-wider m-6 font-SemiBold">
          Select writer name to them add to this club
        </p>
        <form>
          <div className="relative mb-6 group flex items-center m-6">
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Select writer name"
              className="block w-[350px] tracking-wider h-[55px] p-3 text-[#CECECE] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
            />
            <span className="absolute right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
              >
                <path
                  d="M3.375 8.25L9 13.75L14.625 8.25"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs"></p>
          </div>

          <div className="flex gap-3 text-center items-center py-4 font-SemiBold">
            <img src={Profile} alt="" className="w-[41px] h-[41px] ml-6" />
            <p className="font-SemiBold tracking-wider lg:inline-flex md:inline-flex hidden">
              Fortune Adeleke
            </p>
            <span className="ml-32 text-[#DF327B] text-sm">Remove</span>
          </div>
          <div className="flex gap-3 text-center items-center py-4 font-SemiBold">
            <img src={Profile} alt="" className="w-[41px] h-[41px] ml-6" />
            <p className="font-SemiBold tracking-wider lg:inline-flex md:inline-flex hidden">
              Fortune Adeleke
            </p>
            <span className="ml-32 text-[#DF327B] text-sm">Remove</span>
          </div>

          <div className="flex gap-3 text-center items-center py-4 font-SemiBold">
            <img src={Profile} alt="" className="w-[41] h-[41px] ml-6" />
            <p className="font-SemiBold tracking-wider lg:inline-flex md:inline-flex hidden">
              Fortune Adeleke
            </p>
            <span className="ml-32 text-[#DF327B] text-sm">Remove</span>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="text-[#FFF] bg-[#DF327B] hover:bg-[#A12356] mt-2 font-Regular rounded-full p-3 md:w-[350px] w-[300px] h-[48px] mb-4"
            >
              <p
                className="text-center font-bold text-lg text-[#FFF] font-Bold leading-[130.5%] mb-3"
                onClick={() => openModal(2)}
              >
                Add writer
              </p>
            </button>
          </div>
        </form>
      </Modal>
      <Modal isVisible={showModal2} onClose={() => closeModal(2)}>
        <header className="lg:text-3xl md:text-2xl sm:text-xl text-xl ml-6 font-Bold text-[#040A1D] break-normal md:break-all">
          Add member
        </header>
        <p className="text-[#000000] ml-6 font-SemiBold mt-2 tracking-wider">
          Select writer name to them add to this club
        </p>
        <form>
          <div className="relative mb-6 group flex items-center m-6">
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Select writer name"
              className="block w-[350px] h-[50px] tracking-wider p-3 text-[#CECECE] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
            />
            <span className="absolute right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
              >
                <path
                  d="M3.375 8.25L9 13.75L14.625 8.25"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs"></p>
          </div>
          <div className="container mx-auto p-2">
            <div className="rounded-lg border border-solid border-[#F4F5F7] bg-white shadow-md p-6">
              <div className="flex text-center items-center px-2 font-SemiBold ">
                <p className="font-SemiBold tracking-wider lg:inline-flex md:inline-flex hidden">
                  Fortune Adeleke
                </p>
              </div>
              <div className="flex gap-3 tracking-wider text-center items-center  py-2 font-SemiBold">
                <p className="font-SemiBold rounded-2xl bg-[#F4F5F7] py-2 px-2 w-[500px] lg:inline-flex md:inline-flex hidden">
                  Adjoa Konadu
                </p>
              </div>
              <div className="flex gap-3 tracking-wider text-center items-center  py-2 px-2 font-SemiBold">
                <p className="font-SemiBold lg:inline-flex md:inline-flex hidden">
                  Bruno Major
                </p>
              </div>
              <div className="flex gap-3 text-center tracking-wider items-center  py-2 px-2 font-SemiBold">
                <p className="font-SemiBold lg:inline-flex md:inline-flex hidden">
                  Godsway Akpalu
                </p>
              </div>
              <div className="flex gap-3 text-center tracking-wider items-center py-2 px-2 font-SemiBold">
                <p className="font-SemiBold lg:inline-flex md:inline-flex hidden">
                  Cynthia Rotimi
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button
                type="button"
                className="text-[#FFF] bg-[#DF327B] mt-6 hover:bg-[#A12356] font-Regular rounded-full p-3 md:w-[350px] w-[300px] h-[48px] mb-4"
              >
                {/* <ClipLoader color="#FFF" size={20} /> */}
                <p
                  className="text-center font-bold text-lg text-[#FFF] font-Bold leading-[130.5%]"
                  onClick={() => openModal(3)}
                >
                  Add writer
                </p>
              </button>
            </div>
          </div>
        </form>
      </Modal>
      <Modal isVisible={showModal3} onClose={() => closeModal(3)}>
        <div className="flex justify-center items-center pb-8">
          <img src={Tick} alt="Tick.svg" />
        </div>
        <div className="lg:text-3xl md:text-2xl sm:text-xl text-xl flex justify-center items-center max-w-[370px] ml-3 text-center mb-8 font-Bold text-[#040A1D]">
          3 writers added to Smartgenes Club
        </div>
      </Modal>
      <Modal isVisible={showModal4} onClose={() => closeModal(4)}>
        <div className="flex justify-center items-center pb-8">
          <img src={Warning} alt="Warning.svg" />
        </div>
        <div className="lg:text-3xl md:text-2xl sm:text-xl text-xl flex justify-center items-center max-w-[370px] ml-3 text-center mb-8 font-Bold text-[#040A1D]">
          You’re removing 2 writers from this club
        </div>
        <p className="text-[#4C536A] flex justify-center items-center m-12 mt-2 font-SemiBold">
          Writers will no longer interact with other members and will not have
          access to information on this club
        </p>
        <div className="flex  justify-center items-center gap-2 mb-4">
          <button
            className="inline-flex text-[#BDBDBD] font-Medium rounded-full w-[150px] h-[45px] py-2 bg-[#F2F2F2] justify-center items-center"
            onClick={() => openModal(5)}
          >
            <span className="inline-flex mr-2"></span> Remove
          </button>
          <button className="inline-flex text-[#FFF] font-Bold text-lg rounded-full w-[150px] h-[45px] py-2 justify-center items-center bg-[#DB2E78]">
            <span className="inline-flex mr-2"></span>Cancel
          </button>
        </div>
      </Modal>
      <Modal isVisible={showModal5} onClose={() => closeModal(5)}>
        <div className="flex justify-center items-center pb-5">
          <img src={Tick} alt="Tick.svg" />
        </div>
        <div className="lg:text-3xl md:text-2xl sm:text-xl text-xl flex justify-center items-center max-w-[350px] ml-5 text-center mb-8 font-Bold text-[#040A1D]">
          2 writers removed from Mary Mother Writer’s Club
        </div>
      </Modal>
    </div>
  );
};

ProfileMemberList.propTypes = {
  showModal: PropTypes.bool.isRequired,
  showModal2: PropTypes.bool.isRequired,
  showModal3: PropTypes.bool.isRequired,
  showModal4: PropTypes.bool.isRequired,
  showModal5: PropTypes.bool.isRequired,
};
export default ProfileMemberList;
