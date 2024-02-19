import React, { useState } from 'react';
import { HiMiniChevronLeft, HiMiniChevronRight, HiPlus } from "react-icons/hi2";
import PromptCard from '../PromptCard/PromptCard';
import AddNewPrompt from '../AddNewPropmt/AddNewPrompt';
import AllPrompt from '../AllPrompt/AllPrompt';
import SinglePrompt from "../SinglePrompt/SinglePrompt";
import Modal from '../Modal/Modal';

const Prompt = () => {
  const [isPromptModalVisible, setIsPromptModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [showAllPrompt, setShowAllPrompt] = useState(false);
  const [singlePrompt, setSinglePrompt] = useState(false);

  const openModal = () => {
    setIsPromptModalVisible(true);
  };

  const handlePromptCardClick = () => {
    setSinglePrompt(true);
  };

  const handleGoBack = () => {
    setShowAllPrompt(false);
    setSinglePrompt(false);
  };

  const closeModal = () => {
    setIsPromptModalVisible(false);
  };

  const handleSuccessModalOpen = () => {
    setIsSuccessModalVisible(true);
    setIsPromptModalVisible(false);
  };

  const closeSucessModal = () => {
    setIsSuccessModalVisible(false);
  }

  return (
    <>
      <div className='px-4 md:px-10'>
        {singlePrompt ? (
          <SinglePrompt onGoBack={handleGoBack} />
        ) : (
            showAllPrompt ? (
              <AllPrompt onGoBack={handleGoBack} />
            ) : (
                <>
                  {/* Writing prompts section */}
                  <section className='my-10 flex flex-col '>
                    <div className='flex justify-between '>
                      <p className="text-[#000] font-[700]" >Writing prompts</p>

                      <div className="flex flex-row text-[#52B4AE]  items-center gap-2 mx-[20%] cursor-pointer">
                        <p 
                         onClick={() => setShowAllPrompt(true)}
                         className='hover:underline'
                         >
                            View all
                         </p>
                        {/* <div className="rounded-full border border-[#52B4AE] md:h-[30px] h-[20px] md:w-[30px] w-[20px] flex items-center justify-center">
                          <HiMiniChevronLeft className="text-[50px]" />
                        </div>
                        <div className="rounded-full border border-[#52B4AE] md:h-[30px] h-[20px] md:w-[30px] w-[20px] flex items-center justify-center">
                          <HiMiniChevronRight className="text-[50px]" />
                        </div> */}
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
                </>
              )
          )}
        {isPromptModalVisible &&
          <AddNewPrompt isVisible={isPromptModalVisible} onClose={closeModal} onSuccess={handleSuccessModalOpen} />
        }

        {isSuccessModalVisible && 
          <Modal isVisible={isSuccessModalVisible} text={"Prompt added"} onClose={closeSucessModal} />
        }
      </div>
    </>
  )
}

export default Prompt;
