import Modal from "./Modal";
import PropTypes from "prop-types";

const JoinUSModal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <header className="lg:text-2xl md:text-2xl sm:text-xl text-xl pb-2 ml-5 font-Bold text-[#000] break-normal md:break-all">
        Set up your account
      </header>
      <div className="flex items justify-center mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="110"
          height="110"
          viewBox="0 0 110 110"
          fill="none"
        >
          <circle cx="55" cy="55" r="55" fill="#F4F5F7" />
          <path
            d="M33.5791 78.5622V75.9666C33.5791 67.3653 40.772 60.3926 49.6449 60.3926H60.3554C69.2283 60.3926 76.4212 67.3653 76.4212 75.9666V78.5622"
            stroke="#E1E1E1"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M55.0015 52.6071C49.0863 52.6071 44.291 47.9586 44.291 42.2244C44.291 36.4903 49.0863 31.8418 55.0015 31.8418C60.9167 31.8418 65.7121 36.4903 65.7121 42.2244C65.7121 47.9586 60.9167 52.6071 55.0015 52.6071Z"
            stroke="#E1E1E1"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <form name="contact" method="post">
        <div className="relative w-full group text-sm mb-1 font-Regular text-[#858585]">
          <input
            type="text"
            id="large-input"
            placeholder="First name"
            name="firstname"
            required
            className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
        </div>
        <div className="relative z-0 w-full group text-sm mb-1 font-Regular text-[#858585]">
          <input
            type="text"
            id="large-input"
            placeholder="Last name"
            name="lastname"
            required
            className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
        </div>
        <div className="relative z-0 w-full mb-1 group text-sm font-Regular text-[#858585]">
          <input
            type="text"
            id="large-input"
            placeholder="Date of birth"
            name="dateofbirth"
            required
            className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
        </div>
        <div className="relative z-0 w-full mb-1 group text-sm font-Regular text-[#858585]">
          <input
            type="phonenumber"
            id="phonenumber"
            placeholder="Phone number"
            name="phonenumber"
            required
            className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
        </div>
        <div className="relative z-0 w-full mb-2 group text-sm font-Regular text-[#858585]">
          <input
            type="text"
            id="large-input"
            placeholder="Personal address"
            name="personaladdress"
            required
            className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
        </div>
        <div className="relative z-0 w-full mb-1 group text-sm font-Regular text-[#858585]">
          <input
            type="text"
            id="large-input"
            placeholder="School"
            name="school"
            required
            className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
        </div>
        <div className="relative z-0 w-full mb-1 group text-sm font-Regular text-[#858585]">
          <input
            type="text"
            id="large-input"
            placeholder="School address"
            name="schooladdress"
            required
            className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
        </div>
        <div className="relative z-0 w-full mb-1 group text-sm font-Regular text-[#858585]">
          <input
            type="text"
            id="large-input"
            placeholder="Class / Grade"
            name="class"
            required
            className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
        </div>

        <button
          type="submit"
          className="text-[#FFF] bg-[#DF327B] mt-1 focus:ring-1 focus:outline-none
             focus:ring-amber-100 font-SemiBold rounded-full text-xl p-2 pl-12 w-[350px] pr-12 ml-4 text-center"
        >
          Continue
        </button>

        <div className="flex items justify-center text-sm font-Regular text-[#828282]">
          Already have an account?
          <a href="#" className="text-[#942D99] hover:underline ml-1">
            Log in
          </a>
        </div>
      </form>
    </Modal>
  );
};

JoinUSModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default JoinUSModal;
