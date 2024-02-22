import React, { useState, useEffect } from 'react';
import { HiMiniChevronLeft, HiMiniChevronRight, HiPlus } from "react-icons/hi2";
import PromptCard from '../PromptCard/PromptCard';
import AddNewPrompt from '../AddNewPropmt/AddNewPrompt';
import AllPrompt from '../AllPrompt/AllPrompt';
import SinglePrompt from "../SinglePrompt/SinglePrompt";
import Modal from '../Modal/Modal';
import { getAllPrompt } from '../../../../../../../services/GetPromptService';
import { ClipLoader } from 'react-spinners';

const Prompt = () => {
  const [isPromptModalVisible, setIsPromptModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [showAllPrompt, setShowAllPrompt] = useState(false);
  const [singlePrompt, setSinglePrompt] = useState(false);
  const [promptData, setPromptData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedPromptId, setClickedPromptId] = useState("");

  useEffect(() => {
    setLoading(true); // Start loading
    getAllPrompt()
      .then((res) => { 
        setPromptData(res?.slice(0, 5));
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching prompts:", error);
        setLoading(false); // Stop loading on error
      });
  }, []);

  const openModal = () => {
    setIsPromptModalVisible(true);
  };

  const handlePromptCardClick = (promptId) => {
    setSinglePrompt(!singlePrompt);
    setClickedPromptId(promptId);
  };

  const handleGoBack = () => {
    // If singlePrompt is true, go back to the default state
    if (singlePrompt) {
      setSinglePrompt(false);
      setClickedPromptId(" ");
    } else if (showAllPrompt) {
      setShowAllPrompt(false);
    }
  };

  const closeModal = () => {
    setIsPromptModalVisible(false);
  };

  const handleSuccessModalOpen = () => {
    setIsSuccessModalVisible(true);
    setIsPromptModalVisible(false);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalVisible(false);
  };

  // If all states are false, default state to show is Writing prompts section
  const defaultState = !singlePrompt && !showAllPrompt;

  return (
    <>
      <div className='px-4 md:px-10'>
        {defaultState && (
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
                </div>
              </div>
  
              {/* Cards */}
              {loading ? (
                <div className="flex items-center justify-center mb-10">
                  <ClipLoader color="#B44DB8" loading={loading} size={35} />
                </div>
              ) : promptData.length === 0 ? (
                <div className="flex justify-center items-center mb-[60px]">
                  <p className="text-5xl">No Prompt Writing Data</p>
                </div>
              ) : (
                <div className='mb-10 max-w-[800px]'>
                  <PromptCard data={promptData} onClick={handlePromptCardClick} />
                </div>
              )}
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
        )}
  
        {singlePrompt && !defaultState && (
          <SinglePrompt onGoBack={handleGoBack} promptId={clickedPromptId} />
        )}
  
        {showAllPrompt && !defaultState && (
          <AllPrompt onGoBack={handleGoBack} />
        )}
  
        {isPromptModalVisible &&
          <AddNewPrompt isVisible={isPromptModalVisible} onClose={closeModal} onSuccess={handleSuccessModalOpen} />
        }
  
        {isSuccessModalVisible && 
          <Modal isVisible={isSuccessModalVisible} text={"Prompt added"} onClose={closeSuccessModal} />
        }
      </div>
    </>
  )
}

export default Prompt;