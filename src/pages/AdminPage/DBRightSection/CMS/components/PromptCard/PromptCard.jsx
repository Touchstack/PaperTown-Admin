import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getAllPrompt } from '../../../../../../../services/GetPromptService';

const PromptCard = ({ onClick }) => {
    const [promptData, setpromptData] = useState([])

    const gradeColors = ['#52B4AE', '#B44DB8', '#FBCA23'];
    
    useEffect(() => {
       getAllPrompt().then((res) => { 
          console.log(res)
         setpromptData(res.slice(0, 5))
      })
    }, [])
    
    
  return (
    <div className="flex flex-col md:flex-row mt-3 md:overflow-x-auto overflow-y-auto md:ml-[9rem] gap-3 max-h-[400px] cursor-pointer">
      {promptData.map((prompt, i) => {
          const colorIndex = i % gradeColors.length;
        
        return (
          <div key={prompt._id} className="flex-shrink-0 w-[207px] h-[155px] rounded-[16px] border-[1px] border-[#E8E8E8]  p-5 mb-5" onClick={onClick}>
            <div className="flex flex-row gap-2 text-[6.99px]">
             <div style={{ backgroundColor: gradeColors[colorIndex] }} className="w-[47px] h-[19px] text-[#fff] rounded-[26px] flex items-center justify-center">
                Grade 6-12
              </div>

              <div className="w-[47px] h-[19px] border-[0.538px] text-[#000] border-[#000] rounded-[26px] flex items-center justify-center">
                {prompt?.category?.name}
              </div>
            </div>

            <h1 className="text-[#000000] text-[19.356px] font-[700] w-[169px] leading-5 pt-2">
            {prompt?.title}
            </h1>

            <p className="text-[#000000] text-[10.603px] w-[169px] pt-2">
              {prompt?.description}
            </p>
          </div>
        )
    })}
    </div>
  );
};

PromptCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PromptCard