import { useState } from 'react';
import { HiMiniChevronLeft, HiMiniChevronRight, HiPlus, HiCalendar } from "react-icons/hi2";
import PromptCard from '../PromptCard/PromptCard';
import AddNewPrompt from '../AddNewPropmt/AddNewPrompt';
import AllPrompt from '../AllPrompt/AllPrompt';
import SinglePrompt from "../SinglePrompt/SinglePrompt";
import Modal from '../Modal/Modal';

const WriteNow = () => {
  const [title, setTitle] = useState('');
  const [Date, setDate] = useState('');
  const [isPromptModalVisible, setisPromptModalVisible] = useState(false);
  const [showAllPrompt, setShowAllPrompt] = useState(false);
  const [singlePrompt, setSinglePrompt] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setisPromptModalVisible(true);
  }

  const closeModal = () => {
    setisPromptModalVisible(false);
  }

  const handleDueDateChange = (e) => {
    setDate(e.target.value);
  };

  const handletitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleGoBack = () => {
    setShowAllPrompt(false);
    setSinglePrompt(false);
  };

  const handlePromptCardClick = () => {
    setSinglePrompt(true);
  };

  const openSucessModal = () => {
    setIsModalVisible(true);
}

  return (
    <>
      <div className="px-4 md:px-10 flex flex-col">
        {singlePrompt ? (
          <SinglePrompt onGoBack={handleGoBack} />
        ) : (
          showAllPrompt ? (
            <AllPrompt onGoBack={handleGoBack} />
          ) : (
            <>
              {/* Featured spark section */}
              <section className="flex flex-col md:flex-row md:mb-10 gap-4 md:gap-[150px]">
                <p className="text-[#000] font-[700] mb-3 md:mb-0">Featured spark</p>
                <div className='flex flex-col'>
                  {/* Create an input field here */}
                  <label className='text-[#393939] text-[14px] mb-1'>Spark title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={handletitleChange}
                    className="w-[350px] font-['Varela-Regular'] md:w-[522px] h-full p-4 rounded-[10px] bg-[#e8e9ec] border-[#F4F5F7] text-[#000]"
                    placeholder="Type something..."
                  />
                  <label className='text-[#393939] text-[14px] my-2'>Due date</label>
                  <div className='relative'>
                    <input
                      type="text"
                      value={Date}
                      onChange={handleDueDateChange}
                      className="w-[350px] font-['Varela-Regular'] md:w-[522px] h-full p-4 rounded-[10px] bg-[#e8e9ec] border-[#F4F5F7] text-[#000]"
                      placeholder="Type something..."
                    />
                    <HiCalendar className='absolute right-4 top-5 text-[#A3A3A3] cursor-pointer w-[50px] hidden md:block' />
                  </div>
                </div>
              </section>
              {/* Featured spark section */}

              <hr className="mx-5" />

              {/* Writing prompts section */}
              <section className='mt-10 flex flex-col'>
                <div className='flex justify-between '>
                  <p className="text-[#000] font-[700]" >Writing prompts</p>
                  
                  <div className="flex flex-row text-[#52B4AE]  items-center gap-2 mx-[20%] cursor-pointer">
                    <p onClick={()=> setShowAllPrompt(true)}>View all</p>
                    <div className="rounded-full border border-[#52B4AE] md:h-[30px] h-[20px] md:w-[30px] w-[20px] flex items-center justify-center">
                      <HiMiniChevronLeft className="text-[50px]" />
                    </div>
                    <div className="rounded-full border border-[#52B4AE] md:h-[30px] h-[20px] md:w-[30px] w-[20px] flex items-center justify-center">
                      <HiMiniChevronRight className="text-[50px]" />
                    </div>
                  </div>

                </div>

                {/* Cards */}
                <div className='mb-10 max-w-[800px]'>
                  <PromptCard onClick={handlePromptCardClick} />
                </div>
                {/* Cards */}

                {/* Add new prompt */}
                <div className='flex justify-end mx-[20%]'>
                  <p className='flex items-center text-[#DF327B] font-[600] cursor-pointer' onClick={openModal}>
                    <HiPlus width={5} />
                    Add new prompt
                  </p>
                </div>
                {/* Add new prompt */}
              </section>
              {/* Writing prompts section */}
              <hr className="mx-5 mt-10" />

              {/* Submission Guidelines */}
              <section className="flex flex-col md:flex-row md:mt-10 gap-4 md:gap-[150px]">
                <p className="text-[#000] font-[700] mb-3 md:mb-0">Submission guidelines</p>
                <div className='flex flex-col mb-2'>
                  {/* Create an input field here */}
                  <label className='text-[#393939] text-[14px] mb-1'>
                    Use shift + return keys to start a new paragraph
                  </label>
                  <textarea
                    type="text"
                    // value={description}
                    // onChange={handledescriptionChange}
                    className=" w-[350px] font-['Varela-Regular'] md:w-[500px] h-[140px] p-4 rounded-[10px] bg-[#e8e9ec] border-[#F4F5F7]"
                    placeholder="Type something..."
                    maxLength={5000}
                  />

                    <div className='flex justify-end pt-3'>
                      <p className='text-[10px] mb-2'>Updated 10 Apr 17:23</p>
                    </div>

                    <div className='flex justify-end mt-5'>
                      <button className="flex w-[216px] items-center justify-center h-[54px] mb-10  bg-[#DF327B] rounded-[50px]" onClick={openSucessModal}>
                        <p className="flex text-[#FFF] font-[700]">Save Changes</p>
                      </button>
                    </div>
                </div>
                   
              </section>
              {/* Submission Guidelines */}
            </>
          )
        )}

        {isPromptModalVisible &&
          <AddNewPrompt isVisible={isPromptModalVisible} onClose={closeModal} />
        }

        {isModalVisible && 
                <Modal isVisible={isModalVisible} text="Changes Saved!" onClose={closeModal} />
            }
      </div>
    </>
  );
}

export default WriteNow;
