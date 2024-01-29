import { useState } from "react";
import Home from '../Home/Home';
import News from "../News/News";
import WriteNow from "../WriteNow/WriteNow";
import WritersRoom from "../WritersRoom/WritersRoom";


const Navbar = () => {
  const tabs = ["Home", "Writer's Room", "Write Now", "News"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="font-medium px-10  text-gray-500 dark:text-gray-400 dark:border-gray-700 ">
       
      <ul className="flex gap-10 px-10 mb-10">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer text-[14px] md:text-[16px] ${
              activeTab === tab ? "border-b-[1px] border-[#B44DB8] text-[#B44DB8]" : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </li>   
        ))}
      </ul>
    
    {/* Render content based on the active tab */}
      {activeTab === "Home" && (
        <div>
          <Home />
        </div>
      )}
      {activeTab === "Writer's Room" && (
        <div>
          <WritersRoom />
        </div>
      )}
       {activeTab === "Write Now" && (
        <div>
          <WriteNow />
          {/* <SinglePrompt /> */}
        </div>
      )}
      {activeTab === "News" && (
        <div>
           <News />
        </div>
      )}
    </div>
  );
};

export default Navbar;