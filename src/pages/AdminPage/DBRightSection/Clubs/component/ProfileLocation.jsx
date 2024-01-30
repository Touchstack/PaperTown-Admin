import Location from "../../../../../assets/Images/LocationSymbol.svg";
import Meeting from "../../../../../assets/Images/MeetingIcon.svg";
import Phone from "../../../../../assets/Images/LocalPhone.svg";
import MapView from "../../../../../assets/Images/map.svg";

const ProfileLocation = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 justify-items mt-12">
      <div className="mx-4 md:mx-16">
        <div className="md:text-left">
          <h3 className="font-Bold text-xl lg:text-2xl text-[#000000] mt-[-0px]">
            <span className="inline-flex gap-2 items-center">
              <img
                style={{ height: "auto" }}
                src={Location}
                alt="LocationSymbol.svg"
              />
              Location
            </span>
          </h3>
        </div>

        <div className="font-SemiBold text-[#000000] mt-5 tracking-wider">
          2 JKN Airport West
        </div>
        <div className="font-SemiBold text-[#393939] mt-2 tracking-wider">
          JWHM+WJH, First Floor, Blu Business
        </div>
        <div className="mt-4">
          <img style={{ maxWidth: "100%" }} src={MapView} alt="Map.svg" />
        </div>
      </div>

      {/* Right section */}
      <div className="lg:mx-auto md:mx-4 sm:mx-4 mx-4 mb-14">
        <div className="md:text-left">
          <h3 className="font-Bold text-xl lg:text-2xl text-[#000000]">
            <span className="inline-flex gap-2 items-center">
              <img
                style={{ height: "auto" }}
                src={Phone}
                alt="LocalPhone.svg"
              />
              Contact
            </span>
          </h3>
        </div>
        <div className="font-Medium text-[#393939] text-lg mt-4">
          Patience Awuku
        </div>
        <div className="font-Medium text-[#393939] text-lg mt-2">
          fortune.adeleke@gmail.com
        </div>
        <div className="font-Medium text-[#393939] text-lg">
          0200 234 567 / 0200 234 567
        </div>
        <div className="mt-6 md:text-left">
          <h3 className="font-Bold text-xl lg:text-2xl text-[#000000]">
            <span className="inline-flex gap-2 items-center">
              <img
                style={{ height: "auto" }}
                src={Meeting}
                alt="MeetingIcon.svg"
              />
              Meeting Schedule
            </span>
          </h3>
          <div className="flex flex-col text-[#393939] text-lg mt-2 font-Medium leading-6 tracking-wider">
            <div className="flex justify-between items-center">
              <span className="flex gap-6">
                Wednesday <h3>3 pm–5 pm</h3>
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="flex gap-16">
                Friday <h3>3 pm–5 pm</h3>
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="flex gap-10">
                Saturday <h3>12 pm–2 pm</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLocation;
