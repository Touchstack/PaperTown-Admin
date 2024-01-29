import { HiBell, HiChevronDown } from "react-icons/hi2";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import AppLogo from "../../../../../assets/Images/Ellipse 27.png";
import SelectRole from "./SelectRole";

function PermissionsRoleHeader() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between mt-10 lg:mt-0 md:p-10 p-6">
        <Link to="/admin/team" className="flex items-center gap-3">
          <MdArrowBackIosNew className="text-[22px]" />
          <h1 className="md:text-[40px] text-[22px] font-Bold">
            Role Permissions
          </h1>
        </Link>

        <div className="flex flex-row items-center md:gap-5 gap-3">
          <HiBell className="md:text-[30px] text-[25px]  text-[#BDBDBD]" />

          <div>
            <img
              src={AppLogo}
              alt=""
              className="md:w-[50px] w-[40px] md:h-[50px] h-[40px]"
            />
          </div>

          <div className="flex flex-row items-center gap-2">
            <p>Amaka Ndubisi</p>
            <HiChevronDown className="text-[15px]" />
          </div>
        </div>
      </div>

      <div className="ml-10 lg:mt-10 mt-7">
        <h6 className="lg:w-[400px] w-[280px] text-[16px] ">
          Add permissions to this role. Team members added to this role will
          have access to permissions added to this role.
        </h6>
      </div>

      <SelectRole />
    </div>
  );
}

export default PermissionsRoleHeader;
