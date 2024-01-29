
import { HiBell, HiChevronDown } from "react-icons/hi2";
import AppLogo from "../../../../../assets/Images/Ellipse 27.png"
import { IoChevronBackSharp } from "react-icons/io5";
 import { Link } from "react-router-dom"

const ProfileHero = () => {
  return (
    <div>



        <div>
          <div className="flex flex-row items-center justify-between md:p-10 p-6">
            <Link to="/admin/writers" className="flex items-center">
              <div className="md:text-[42px] text-[22px] mr-2 font-Bold">
                <IoChevronBackSharp className="text-3xl" />
               Writer Profile
              </div>
            </Link>
    
            <div className="flex flex-row items-center md:gap-5 gap-3">
              <HiBell className="md:text-[30px] text-[25px] text-[#BDBDBD]" />
              <div>
                <img src={AppLogo} alt="" className="md:w-[50px] w-[40px] md:h-[50px] h-[40px]" />
              </div>
              <div className="flex flex-row items-center gap-2">
                <p>Amaka Ndubisi</p>
                <HiChevronDown className="text-[15px]" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileHero
