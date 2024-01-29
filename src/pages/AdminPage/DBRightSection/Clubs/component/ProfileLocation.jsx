import React from "react";
import Location from "../../../../../assets/Images/LocationSymbol.svg";
import Meeting from "../../../../../assets/Images/MeetingIcon.svg";
import Phone from "../../../../../assets/Images/LocalPhone.svg";
import MapView from "../../../../../assets/Images/map.svg";

const ProfileLocation = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-80">
      <div className="flex mx-8 mt-12">
        <div className="">
          <div className="flex-col flex items-center justify-center">
            <h3 className="font-Bold text-xl text-[#000000]">
              <span className="inline-flex gap-2">
                <img
                  style={{ height: "auto" }}
                  src={Location}
                  alt="LocationSymbol.svg"
                />
                Location
              </span>
            </h3>
            <div className="font-SemiBold text-[#000000] mt-4 tracking-wider">
              2 JKN Airport West
            </div>
            <div className="font-SemiBold text-[#393939] mt-2 tracking-wider">
              JWHM+WJH, First Floor, Blu Business
            </div>
          </div>
          <img
            style={{ height: "139px", width: "960px" }}
            src={MapView}
            alt="Map.svg"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="font-Regular text-[#6D6D6D] text-xl max-w-[3000px]">
          <h3 className="font-Bold text-xl text-[#000000]">
            <span className="inline-flex gap-2">
              <img
                style={{ height: "auto" }}
                src={Phone}
                alt="LocalPhone.svg"
              />
              Contact
            </span>
          </h3>
          <div className="font-Medium text-[#393939] text-lg mt-4">
            Patience Awuku
          </div>
          <div className="font-Medium text-[#393939] text-lg mt-2">
            fortune.adeleke@gmail.com
          </div>
          <div className="font-Medium text-[#393939] text-lg">
            0200 234 567 / 0200 234 567
          </div>

          <h3 className="font-Bold mt-10 text-[#000000]">
            <span className="inline-flex gap-2">
              <img
                style={{ height: "auto" }}
                src={Meeting}
                alt="MeetingIcon.svg"
              />
              Meeting Schedule
            </span>
          </h3>

          <div className="flex text-[#393939] text-lg gap-5 pt-2 font-Medium leading-6 tracking-wider text-left spacing-4">
            Wednesday
            <span className="text-lg">3 pm–5 pm</span>
          </div>
          <div className="flex text-[#393939] text-lg gap-16 font-Medium leading-6 tracking-wider text-left spacing-4">
            Friday
            <span className="text-lg">3 pm–5 pm</span>
          </div>
          <div className="flex text-[#393939] text-lg gap-10 font-Medium leading-6 tracking-wider text-left spacing-4">
            Saturday
            <span className="text-lg">12 pm–2 pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLocation;
