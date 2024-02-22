import React, { useState, useEffect } from 'react';
import { HiChevronLeft } from 'react-icons/hi2';
import { HiCalendar } from 'react-icons/hi2';
import PropTypes from 'prop-types';
import { getPromptById } from '../../../../../../../services/GetPromptByIdService';
import { ClipLoader } from 'react-spinners';

const SinglePrompt = ({ onGoBack, promptId }) => {
  const [promptData, setPromptData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Set loading state to true when fetching data
    // Fetch the specific prompt data when the component mounts
    getPromptById(promptId)
      .then((res) => {
        setPromptData(res?.data);
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching prompt data:', error);
        setLoading(false); // Set loading state to false on error
      });
  }, [promptId]);

  return (
    <div className="flex flex-col">
      <div
        onClick={onGoBack}
        className="flex flex-row items-center gap-3 text-[#040A1D] font-[700] cursor-pointer mb-3"
      >
        <HiChevronLeft />
        <p className="text-[26px]">{promptData?.title}</p>
      </div>

      {loading ? ( // Show loader if data is loading
        <div className="flex items-center justify-center mb-[30px]">
          <ClipLoader color="#B44DB8" loading={loading} size={35} />
        </div>
      ) : (
        <>
          <div className="flex flex-col">
            <p className="mb-2">{promptData?.description}</p>

            <div className="flex flex-row items-center gap-2 mb-3">
              <HiCalendar />
              <p className="text-[14px] text-[#393939]">10th April, 2023</p>
            </div>

            <div className="flex gap-2 text-[6.99px] mb-10">
              <div className="w-[87px] h-[36px] text-[#fff] text-[10px] md:text-[13px] bg-[#52B4AE] rounded-[26px] flex items-center justify-center">
                Age {promptData?.age?.[0]} - {promptData?.age?.[1]}
              </div>

              <div className="w-[71px] h-[36px text-[10px] md:text-[13px] border-[1px] font-[700] text-[#000] border-[#000] rounded-[26px] flex items-center justify-center">
                {promptData?.category?.name}
              </div>
            </div>

            {/* Paragraph section */}
            <div className="text-[#000]">
              <h2 className="text-[22px] font-[600] mb-6">
                Writing outcomes and expectations
              </h2>

              <p className="mb-6">{promptData?.description}</p>
            </div>
            {/* Paragraph section */}

            {/* Paragraph section */}
            <div className="text-[#000]">
              <h2 className="text-[22px] font-[600] mb-6">Description</h2>

              <p className="mb-6">{promptData?.description}</p>
            </div>
            {/* Paragraph section */}

            {/* Paragraph section */}
            <div className="text-[#000] mb-10">
              <h2 className="text-[22px] font-[600] mb-2">
                Submission guidelines
              </h2>

              <ol style={{ listStyleType: 'decimal' }} className="ml-5">
                <li>{promptData?.submission_guidelines}</li>
              </ol>
            </div>
            {/* Paragraph section */}
          </div>
        </>
      )}
    </div>
  );
};

SinglePrompt.propTypes = {
  onGoBack: PropTypes.func.isRequired,
};

export default SinglePrompt;
