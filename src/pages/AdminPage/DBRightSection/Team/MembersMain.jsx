import { useState } from "react";
import Roles from "./Roles/Roles";
import Members from "./Members";
import { Link, useNavigate } from "react-router-dom";

function MembersMain() {
  const tabs = ["Members", "Roles"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const navigate = useNavigate();

  const handleNewmember = () => {
    navigate("/admin/team/new-member");
  };

  return (
    <div className=" text-gray-500 dark:text-gray-400 dark:border-gray-700 ">
      {activeTab === "Members" && (
        <div>
          {/* button start  */}
          <div className=" flex justify-end lg:mr-8 mr-5 gap-5 mt-5 mb-10">
            <button
              type="button"
              className="bg-[#F2F2F2] text-[#BDBDBD] rounded-full w-[111px] py-2"
              //onClick={handleRemoveClick}
            >
              Remove
            </button>
            <button
              onClick={handleNewmember}
              className="bg-[#DF327B] inline-block lg:hidden text-[#FFFFFF] font-Bold rounded-full px-2  py-1"
            >
              + Add team
            </button>
            <button
              onClick={handleNewmember}
              className="bg-[#DF327B] lg:inline-block hidden text-[#FFFFFF] font-Bold rounded-full w-[185px] py-2"
            >
              + Add team member
            </button>
          </div>
          {/* button end  */}
        </div>
      )}
      {activeTab === "Roles" && (
        <div>
          {/* button start  */}
          <div className=" flex justify-end lg:mr-20 mr-5 gap-5 mt-5 lg:mb-10 mb-5">
            <Link to="/admin/team/add-role">
              <button
                onClick={handleNewmember}
                className="bg-[#DF327B] lg:inline-block hidden   text-[#FFFFFF] font-Bold rounded-full w-[111px] py-2"
              >
                + Add role
              </button>
            </Link>
            <Link to="/admin/team/add-role">
              <button className="bg-[#DF327B]  lg:hidden inline-block text-[#FFFFFF] font-Bold rounded-full w-[111px] py-2">
                + Add
              </button>
            </Link>
          </div>
          {/* button end  */}
        </div>
      )}
      <ul className="flex gap-10 px-10 mb-10">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer text-[16px] font-Blod ${
              activeTab === tab
                ? "border-b-[1px] border-[#B44DB8] text-[#B44DB8]"
                : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>

      {/* Render content based on the active tab */}

      {activeTab === "Members" && (
        <div>
          <Members />
        </div>
      )}
      {activeTab === "Roles" && (
        <div>
          <Roles />
        </div>
      )}
    </div>
  );
}

export default MembersMain;
