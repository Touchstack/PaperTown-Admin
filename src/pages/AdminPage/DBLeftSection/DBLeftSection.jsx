import { NavLink } from "react-router-dom";
import AppLogo from "../../../assets/Images/Logo.svg";
// import { isActiveStyles, isNotActiveStyles } from "../../../utils/styles";
import { isActiveStyles, isNotActiveStyles } from "../../../utils/styles";
import { HiUserGroup, HiMiniRectangleGroup } from "react-icons/hi2";
import { BsSuitClubFill } from "react-icons/bs";
import { TbWriting } from "react-icons/tb";
import { MdBubbleChart } from "react-icons/md";
import { MdCenterFocusStrong } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const DBLeftSection = () => {
  return (
    <div className="h-full py-12 hidden md:flex flex-col justify-center items-center min-w-210 w-[250px] gap-3">
      <NavLink to={"/"} className="flex items-center justify-start px-6 gap-4 ">
        <img
          src={AppLogo}
          alt="Logo"
          className="md:h-[80px] lg:w-[88px] sm:h-[70px]  h-[60px] w-[70px]"
        />
      </NavLink>

      <ul className="flex flex-col gap-4 ml-5 mt-10">
        <NavLink
          to={"/admin/dashboard"}
          className={({ isActive }) =>
            isActive ? `${isActiveStyles}` : isNotActiveStyles
          }
        >
          <MdBubbleChart />
          Dashboard
        </NavLink>

        <NavLink
          to={"/admin/writers"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 text-bold`
              : isNotActiveStyles
          }
        >
          <TbWriting />
          Writers
        </NavLink>

        <NavLink
          to={"/admin/clubs"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 text-bold`
              : isNotActiveStyles
          }
        >
          <BsSuitClubFill />
          Clubs
        </NavLink>

        <NavLink
          to={"/admin/submissions"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 text-bold`
              : isNotActiveStyles
          }
        >
          <MdCenterFocusStrong />
          Submissions
        </NavLink>

        <NavLink
          to={"/admin/team"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 text-bold`
              : isNotActiveStyles
          }
        >
          <HiUserGroup />
          Team
        </NavLink>

        <NavLink
          to={"/admin/cms"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 text-bold`
              : isNotActiveStyles
          }
        >
          <HiMiniRectangleGroup />
          CMS
        </NavLink>
      </ul>

      {/* Logout section */}
      <div className="mt-auto flex flex-col mr-[5rem]">
        <hr className="text-[#D9D9D9] mb-4 ml-[70px] w-[200px]" />
        <div className="flex items-center justify-center gap-2 mb-5 cursor-pointer">
          <FiLogOut className="font-bold" />
          <p className="text-[14px] font-[700]">Log Out</p>
        </div>
        <p className="text-[#B44DB8] flex justify-center items-center text-[10px] ml-10">
          Papertown Imaginarium © 2022
        </p>
      </div>
    </div>
  );
};

export default DBLeftSection;
