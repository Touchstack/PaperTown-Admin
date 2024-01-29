import PropTypes from 'prop-types';
// import { FaTimes } from 'react-icons/fa';
import CheckMark from '../../../../../../assets/Images/CheckMark.svg';

const Modal = ({ isVisible, onClose, text }) => {
    if (!isVisible) return null;
    const handleClose = (e) => {
        if (e.target.id === "wrapper") onClose();
      };

  return (
    <div
    className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center"
    onClick={handleClose}
  >
    <div className="md:w-5/12 w-6/6 md:h-[304px] h-[370px] flex flex-col bg-white rounded-[30px] z-40 ">
      <div className="flex justify-end md:p-2 p-10">
        {/* <FaTimes
          className="text-black text-2xl cursor-pointer"
          onClick={() => onClose()}
        /> */}
      </div>

      {/*Modal Content*/}
      <div className='flex flex-col items-center justify-center md:p-[5rem] p-2'>
        <img src={CheckMark} alt="" />

        <div className='pt-5 flex flex-col items-center justify-center'>
          <h1 className='text-[#2A2A2A] lg:text-[36px] md:text-[26px] text-center sm:text-[20px] font-[700]'>
            {text}
            </h1>
        </div>

        {/* <button
          className='m-[3rem] w-[100px]  h-[72px] bg-[#063231] rounded-[50px] text-[#fff]'
          onClick={() => onClose()}
        > 
          Done 
        </button> */}
      </div>

    </div>
  </div>
);
};

Modal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    text: PropTypes.string,
  };

export default Modal