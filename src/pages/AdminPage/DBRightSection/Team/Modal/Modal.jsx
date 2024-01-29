import { MdErrorOutline } from "react-icons/md";
// import { IoClose } from "react-icons/io5";
function Modal() {
  return (
    <div>
      {/* Modal start */}

      <div className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white h-[400px] rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-900 bg-transparent  ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {/* <IoClose className="text-2xl" /> */}
            </button>
            <div className="p-4 md:p-5  text-center">
              <MdErrorOutline className="mx-auto mb-4  rounded-full mt-6 text-[#E1B300] text-7xl " />
              <h3 className=" text-4xl text-gray-900 font-Bold  ">
                You’re about to remove 2 members from your team
              </h3>
              <p className="mb-5 mt-5">
                They will no longer be able to log in to Papertown admin panel
              </p>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="bg-[#F2F2F2] text-[#BDBDBD] rounded-full text-sm inline-flex items-center px-10 py-2.5 text-center me-2"
              >
                Remove
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-[#DF327B] rounded-full text-sm font-medium px-10 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal end */}
    </div>
  );
}

export default Modal;
