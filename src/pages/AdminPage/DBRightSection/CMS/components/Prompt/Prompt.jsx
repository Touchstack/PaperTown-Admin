import React, { useState, useEffect } from 'react';
import { HiMiniChevronLeft, HiMiniChevronRight, HiPlus } from "react-icons/hi2";
import PromptCard from '../PromptCard/PromptCard';
import AddNewPrompt from '../AddNewPropmt/AddNewPrompt';
import AllPrompt from '../AllPrompt/AllPrompt';
import SinglePrompt from "../SinglePrompt/SinglePrompt";
import Modal from '../Modal/Modal';
import { getAllPrompt } from '../../../../../../../services/GetPromptService';
import { deletePrompt } from '../../../../../../../services/DeletePromptService'
import { ClipLoader } from 'react-spinners';
import DeleteModal from '../Modal/DeleteModal';

const Prompt = () => {
  const [isPromptModalVisible, setIsPromptModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [showAllPrompt, setShowAllPrompt] = useState(false);
  const [singlePrompt, setSinglePrompt] = useState(false);
  const [promptData, setPromptData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedPromptId, setClickedPromptId] = useState("");
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [promptToDelete, setPromptToDelete] = useState(null);
  
  const handleGoBack = () => {
    // If singlePrompt is true, go back to the default state
    if (singlePrompt) {
      setSinglePrompt(false);
      setClickedPromptId(" ");
    } else if (showAllPrompt) {
      setShowAllPrompt(false);
    }
  };

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
  }, [deleteConfirmation]);

  const openModal = () => {
    setIsPromptModalVisible(true);
  };

  const handlePromptCardClick = (promptId) => {
    setSinglePrompt(!singlePrompt);
    setClickedPromptId(promptId);
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

   // Function to handle delete confirmation
   const handleDeleteConfirmation = (promptId) => {
    setPromptToDelete(promptId); // Store the prompt id to be deleted
    setDeleteConfirmation(true); // Show the delete confirmation modal
  };

  // Function to confirm delete action
  const handleConfirmDelete = () => {
    deletePrompt(promptToDelete)
      .then((res) => {
        if(res.status === 200) {
        //console.log("Prompt deleted successfully", res);
        //fetchPrompts(); // Refetch prompts after deletion
        setDeleteConfirmation(false); // Close the delete confirmation modal
        // alert('Prompt Deleted successfully')
        } else {
         alert(res?.response?.data?.message);
        }
      })
      .catch((error) => {
        console.error("Error deleting prompt:", error);
      });
  };

  // Function to cancel delete action
    const handleCancelDelete = () => {
      setDeleteConfirmation(false); // Close the delete confirmation modal
      setPromptToDelete(null); // Clear the prompt id to be deleted
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
                  <PromptCard data={promptData} deletePrompt={handleDeleteConfirmation} onClick={handlePromptCardClick}  />
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

            {/* Delete confirmation modal */}
              {deleteConfirmation && (
                <DeleteModal
                  isVisible={deleteConfirmation}
                  text="Are you sure you want to delete this prompt ?"
                  onClose={handleCancelDelete}
                  onConfirm={handleConfirmDelete}
                />
              )}
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