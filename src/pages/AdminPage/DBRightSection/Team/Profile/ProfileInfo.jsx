import AppLogo from "../../../../../assets/Images/Profile.png";
import { FaPencilAlt } from "react-icons/fa";
import DateInfor from "./DateInfor";
function ProfileInfo() {
  return (
    <div className="lg:mt-0 mt-10">
      <div className="lg:ml-20 ml-5 mt-5 flex items-center gap-3">
        <img
          src={AppLogo}
          alt=""
          className="md:w-[110px] w-[90px] md:h-[110px] h-[90px]"
        />

        <div>
          <div className="flex gap-10">
            <h6 className="text-[#000000] font-Bold text-3xl">Jimmy Jules</h6>
            <button className="lg:hidden inline-block bg-[#DF327B] rounded-full px-2  text-white font-Bold">
              <a href="" className="">
                <FaPencilAlt />
              </a>
            </button>
          </div>
          <p className="text-[#B44DB8]">jimmyjulle98@gmail.com</p>
        </div>

        <button className="hidden lg:inline-flex bg-[#DF327B] rounded-full px-5 py-2 text-white font-Bold ml-auto lg:mr-20">
          <a href="" className="flex items-center">
            <FaPencilAlt className="mr-2" />
            Manage
          </a>
        </button>
      </div>

      <div className="">
        <DateInfor />
      </div>
    </div>
  );
}

export default ProfileInfo;
