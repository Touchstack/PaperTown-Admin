import PhotoCover from "../../../../../assets/Images/CoverPhoto.svg";
import RoundedPink from "../../../../../assets/Images/PinkPlus.svg";

const handleButtonClick = () => {
  // Navigate to another page
  window.location.href = "/admin/clubsprofile";
};
const ManageClubSchedule = () => {
  return (
    <div>
      <p className="text-[#393939] pt-4 text-sm pl-12">Upload cover photo</p>
      <div className="text-center py-2">
        <div className="m-12 mt-1 font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-3xl max-w-[9000px] text-[#FFFFFF] relative">
          <img src={PhotoCover} alt="Pencil.svg" />

          <button className="gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex text-[#FFFFFF] font-SemiBold text-lg rounded-full w-[170px] text-sm py-2 text-[#FFF] justify-center items-center rounded-md border border-white p-4 ">
            <span className="inline-flex mr-2 "></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M8.91878 3.38356L6.59333 1.08219L7.35936 0.315069C7.56911 0.105023 7.82682 0 8.13251 0C8.43782 0 8.69535 0.105023 8.9051 0.315069L9.67113 1.08219C9.88088 1.29224 9.99031 1.54575 9.99943 1.84274C10.0085 2.13936 9.90824 2.39269 9.69849 2.60274L8.91878 3.38356ZM0.547164 10C0.392135 10 0.262274 9.9474 0.157583 9.84219C0.0525278 9.73735 0 9.60731 0 9.45205V7.90411C0 7.83105 0.0136791 7.76037 0.0410374 7.69205C0.0683956 7.62338 0.109433 7.56164 0.164149 7.50685L5.79994 1.86301L8.12539 4.19178L2.4896 9.83562C2.43488 9.89041 2.37342 9.93151 2.3052 9.9589C2.23663 9.9863 2.16586 10 2.0929 10H0.547164Z"
                fill="white"
              />
            </svg>
            Change image
          </button>
        </div>
      </div>
      <div className="inline-flex flex-col md:flex-row justify-center items-center img-fluid mx-8 mb-20">
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
      <div
        className="flex justify-between lg:ml-10 border-b-2 border-[#D9D9D9]
                  border-dashed"
      ></div>
      <div className="flex gap-4 m-16 ">
        <button className="inline-flex mb-5 text-[#BDBDBD] font-Medium rounded-full w-[170px] text-sm h-[50px] py-2  bg-[#F2F2F2] justify-center items-center">
          Delete profile
        </button>
        <button
          className="inline-flex mb-5 text-[#FFFFFF] font-Bold  rounded-full w-[170px] text-sm py-2  justify-center items-center bg-[#DB2E78]"
          onClick={handleButtonClick}
        >
         Save Changes
        </button>
      </div>
    </div>
  );
};

export default ManageClubSchedule;
