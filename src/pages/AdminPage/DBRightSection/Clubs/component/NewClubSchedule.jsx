import PhotoCover from "../../../../../assets/Images/UploadIcon.svg";
import RoundedPink from "../../../../../assets/Images/PinkPlus.svg";
import RectanglePic from "../../../../../assets/Images/Rectangle.svg";
import Calender from "../../../../../assets/Images/bi_calendar.svg";
import Tick from "../../../../../assets/Images/Tick.svg";
import Modal from "../../../../../components/Modal/Modal";
import { useState } from "react";
import PropTypes from "prop-types";

const NewClubSchedule = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const openModal = (modalNumber) => {
    // Close all modals first
    setShowModal(false);
    setShowModal2(false);

    // Open the desired modal
    switch (modalNumber) {
      case 1:
        setShowModal(true);
        break;
      case 2:
        setShowModal2(true);
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
      default:
        break;
    }
  };

  return (
    <div>
      <p className="text-[#393939] pt-4 text-sm pl-12">Upload cover photo</p>
      <div className="text-center py-2">
        <div className="m-12 mt-1 font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-3xl max-w-[9000px] text-[#B6B6B6] relative">
          <img src={RectanglePic} alt="Pencil.svg" />

          <button className="gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex font-SemiBold w-[170px] text-sm py-2 text-[#B6B6B6] justify-center items-center rounded-md border border-[#B6B6B6] p-4 ">
            <span className="inline-flex"></span>
            <img src={PhotoCover} alt="Pencil.svg" />
            Upload image
          </button>
        </div>
      </div>
      <div className="md:inline-flex justify-center items-center img-fluid mx-8 mb-20">
        <div className="py-14 px-8 lg:ml-14">
          <h3 className="flex font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center py-4 text-[#000000]">
            Meeting Schedule
            <span className="ml-24 mt-3">
              <img src={RoundedPink} alt="PinkPlus.svg" />
            </span>
          </h3>
          <div className="py-6">
            <div className="font-Regular max-w-[470px] lg:text-xl md:text-lg sm:text-lg text-lg lg:text-left md:text-left text-center">
              <form name="contact" method="post">
                <div className="relative z-0 w-full mb-6 group tracking-wider text-sm font-Medium text-[#393939]">
                  Day
                  <input
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Wednesday"
                    className="block w-[365px] tracking-wider h-[55px] p-3 text-[#000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="relative z-0 w-full mb-6 group text-sm tracking-wider font-Medium text-[#393939] ">
                    Start time
                    <input
                      type="name"
                      id="name"
                      name="name"
                      placeholder="Wednesday"
                      className="block w-[175px] tracking-wider h-[55px] p-3 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                    />
                    <img
                      src={Calender}
                      alt="Pencil.svg"
                      className="absolute right-3 mt-2 top-1/2 transform -translate-y-1/2"
                    />
                  </div>
                  <div className="relative z-0 w-full mb-6 group text-sm tracking-wider font-Medium text-[#393939] ">
                    End time
                    <input
                      type="name"
                      id="name"
                      name="name"
                      placeholder="Wednesday"
                      className="block w-[175px] tracking-wider h-[55px] p-3 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                    />
                    <img
                      src={Calender}
                      alt="Pencil.svg"
                      className="absolute right-3 mt-2 top-1/2 transform -translate-y-1/2"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="inline-flex justify-center items-center img-fluid mx-8 mb-20">
          <div className="py-14 lg:ml-14">
            <h3 className="font-Bold mb-8 lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center py-4 text-[#000]">
              Schedule Summary
            </h3>
            <div className="flex text-[#393939] text-lg gap-6 mt-10 font-Medium leading-6 tracking-wider text-left spacing-4">
              Wednesday
              <span className="text-[#393939] text-lg">3 pm–5 pm</span>
              <span className="font-Bold text-[#DB2E78] text-sm mt-1 ml-4">
                Remove
              </span>
            </div>
            <div className="flex text-[#393939] text-lg gap-12 mt-6 font-Medium leading-6 tracking-wider text-left spacing-4">
              Friday
              <span className="flex text-[#393939] text-lg ml-4">
                3 pm–5 pm
              </span>
              <span className="font-Bold text-[#DB2E78] text-sm mt-1 ml-[-4px]">
                Remove
              </span>
            </div>
            <div className="flex text-[#393939]  text-lg gap-10 mt-6 font-Medium leading-6 tracking-wider text-left spacing-4">
              Saturday
              <span className="text-[#393939] text-lg">12 pm–2 pm</span>
              <span className="font-Bold text-[#DB2E78] text-sm mt-1">
                Remove
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:ml-10 border-b-2 border-[#D9D9D9] bg-[#000000]"></div>

      <div className="flex ml-32 mt-16 mb-10">
        <button
          className="inline-flex text-[#FFFFFF] font-Bold rounded-full w-[340px] h-[45px] text-sm py-2 justify-center items-center bg-[#DB2E78]"
          onClick={() => setShowModal(true)}
        >
          <span className="inline-flex mr-2"></span>Save Changes
        </button>
      </div>
      <Modal isVisible={showModal} onClose={() => closeModal(1)}>
        <div className="flex justify-center items-center pb-5">
          <img src={Tick} alt="Tick.svg" />
        </div>
        <div className="lg:text-3xl md:text-2xl sm:text-xl text-xl flex justify-center items-center max-w-[350px] ml-5 text-center mb-8 font-Bold text-[#040A1D]">
          You’ve added a new club profile.
        </div>
        <p className="flex justify-center items-center max-w-[300px] ml-12 tracking-wider text-center mb-8 font-Medium text-[#4C536A] text-md">
          Club chaperon will receive a confirmation email to start running their
          account
        </p>
      </Modal>
    </div>
  );
};
NewClubSchedule.propTypes = {
  showModal: PropTypes.bool.isRequired,
};
export default NewClubSchedule;
