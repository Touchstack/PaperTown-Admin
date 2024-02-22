import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import { HiChevronLeft } from 'react-icons/hi2';
import { PiSlidersHorizontalThin } from 'react-icons/pi';
import SinglePrompt from '../SinglePrompt/SinglePrompt';
import AllPromptCard from '../AllPromptCard/AllPromtCard';
import { getAllCategories } from '../../../../../../../services/GetCategoriesService';
import { getAllPrompt } from '../../../../../../../services/GetPromptService'
import { getPromptByCategoryId} from '../../../../../../../services/GetPromptByCategoryService'
import  { deletePrompt } from '../../../../../../../services/DeletePromptService'
import DeleteModal from '../Modal/DeleteModal';

const AllPrompt = ({ onGoBack }) => {
  const [category, setCategory] = useState([]);
  const [singlePromptId, setSinglePromptId] = useState(null);
  const [promptData, setPromptData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [promptToDelete, setPromptToDelete] = useState(null);

  useEffect(() => { 
    getAllCategories()
      .then((res) => {
        setCategory(res?.data);
      })
      .catch((err) => console.log("Error fetching category", err));

    fetchPrompts();
  }, []);

  const fetchPrompts = () => {
    setLoading(true);
    if (selectedCategoryId) {
      getPromptByCategoryId(selectedCategoryId)
        .then((res) => {
          setPromptData(res?.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching prompts by category:", error);
          setLoading(false);
        });
    } else {
      getAllPrompt()
        .then((res) => {
          setPromptData(res);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching prompts:", error);
          setLoading(false);
        });
    }
  };

  const handleFilterClick = () => {
    setSelectedCategoryId(null); // Reset selected category ID
    fetchPrompts(); // Fetch all prompts
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
    getPromptByCategoryId(categoryId)
      .then((res) => {
        setPromptData(res?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching prompts by category:", error);
        setLoading(false);
      });
  };

  const handlePromptCardClick = (promptId) => {
    setSinglePromptId(promptId);
  };

  const handleGoBack = () => {
    setSinglePromptId(null);
    onGoBack();
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
          // Handle success, e.g., refetch prompts
          console.log("Prompt deleted successfully", res);
          fetchPrompts(); // Refetch prompts after deletion
          setDeleteConfirmation(false); // Close the delete confirmation modal
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


  return (
    <div className="flex flex-col">
      {!singlePromptId && (
        <div onClick={handleGoBack} className='flex flex-row items-center gap-3 text-[#040A1D] font-[700] cursor-pointer mb-10'>
          <HiChevronLeft />
          <p className='text-[26px]'>All prompts</p>
        </div>
      )}

      {loading ? ( 
        <div className="flex items-center justify-center mb-[20px]">
          <ClipLoader color="#B44DB8" loading={loading} size={35} />
        </div>
      ) : singlePromptId ? (
        <SinglePrompt onGoBack={handleGoBack} promptId={singlePromptId} />
      ) : (
        <>
          <div className='flex hover:cursor-pointer flex-col md:flex-row items-center justify-between mb-10'>
            <div className='flex flex-row items-center gap-3'>
              {category?.map((categories) => (
                <div 
                  key={categories?._id} 
                  className={`rounded-full w-[110px] h-[44px] text-[#000] flex items-center justify-center mb-2 md:mb-0 ${
                    selectedCategoryId === categories?._id
                      ? "bg-[#7c7a7a1a]" // Change background color if selected
                      : "bg-gray-50"
                  }`}
                  onClick={() => handleCategoryClick(categories?._id)}
                >
                  {categories?.name}
                </div>
              ))}
            </div>

            <div 
              className='w-[110px] h-[44px] flex items-center justify-center rounded-full border-[1px] border-[#393939] text-[#000] gap-3 cursor-pointer mt-3 md:mt-0'
              onClick={handleFilterClick}
            >
              <PiSlidersHorizontalThin />
              Filter
            </div>
          </div>
          {/* PropTypes and filter section */}

          {promptData.length === 0 ? (
            <div className="flex justify-center items-center mb-[60px]">
                <p className="text-5xl">No Prompt Writing Data</p>
            </div>
          ) : (
            <AllPromptCard data={promptData} deletePrompt={handleDeleteConfirmation} onPromptClick={handlePromptCardClick} />
          )}

          {/* Delete confirmation modal */}
          {deleteConfirmation && (
            <DeleteModal
              isVisible={deleteConfirmation}
              text="Are you sure you want to delete this prompt?"
              onClose={handleCancelDelete}
             //onConfirm={handleConfirmDelete}
            />
          )}

        </>
      )}
    </div>
  );
};

AllPrompt.propTypes = {
  onGoBack: PropTypes.func.isRequired,
};

export default AllPrompt;