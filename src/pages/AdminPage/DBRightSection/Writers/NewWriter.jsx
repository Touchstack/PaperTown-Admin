import { useState } from 'react';
import WriterSearchBar from "./WriterSearchBar";
import NewWriter1 from './NewWriterForm'; 
import NewWriter2 from './NewWriterForm2'; 

const NewWriter = () => {
  const [currentView, setCurrentView] = useState('NewWriter1');
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleClick = () => {
    // Toggle between views
    setCurrentView(currentView === 'NewWriter1' ? 'NewWriter2' : 'NewWriter1');
    // Hide the button
    setButtonVisible(false);
  }

  return (
    <div className="bg-[#FFFFFF] rounded-[25px] mt-2">
      <WriterSearchBar />
      <main className="flex items-center justify-center lg:ml-[5%]">
        {/*render the current view */}
        {currentView === 'NewWriter1' && <NewWriter1 />}
        {currentView === 'NewWriter2' && <NewWriter2 />}
      </main>
      <div className="lg:px-[60px] px-[30px] lg:py-[20px] py-[30px] text-center lg:ml-10 ml-4 lg:mb-10 mb-4">
        {/* Show the button only if it's visible */}
        {buttonVisible && (
          <button
            type="button"
            className="bg-[#DB2E78] font-Bold text-white rounded-full p-2 w-[500px] h-[55px]"
            onClick={handleClick}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default NewWriter;
