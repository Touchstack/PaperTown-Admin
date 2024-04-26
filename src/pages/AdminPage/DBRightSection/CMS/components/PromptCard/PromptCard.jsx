import PropTypes from 'prop-types';
import { MdOutlineDeleteOutline } from "react-icons/md";

const PromptCard = ({ onClick, data, deletePrompt }) => {
    
    const gradeColors = ['#52B4AE', '#B44DB8', '#FBCA23'];
    
   
  return (
    <div className="flex flex-col md:flex-row mt-3 md:overflow-x-auto overflow-y-auto md:ml-[9rem] gap-3 max-h-[400px] cursor-pointer">
      {data.map((prompt, i) => {
          const colorIndex = i % gradeColors.length;
        
        return (
          <div key={prompt._id} className="flex-shrink-0 w-[207px] h-[155px] rounded-[16px] border-[1px] border-[#E8E8E8]  p-5 mb-5" >
            <div className="flex flex-row gap-2 text-[6.99px]">
             <div 
               onClick={() => onClick(prompt._id)}
               style={{ backgroundColor: gradeColors[colorIndex] }} className="w-[47px] h-[19px] text-[#fff] rounded-[26px] flex items-center justify-center">
                Age {prompt?.age?.[0]} - {prompt?.age?.[1]} 
              </div>

              <div 
                onClick={() => onClick(prompt._id)}
                className="w-[47px] h-[19px] border-[0.538px] text-[#000] border-[#000] rounded-[26px] flex items-center justify-center">
                {prompt?.category?.name}
              </div>
             
              <div 
               onClick={() => deletePrompt(prompt?._id)}
               className="ml-7 w-[40px] flex items-center justify-center hover:border-1 hover:rounded-full hover:bg-red-400 hover:text-[#ffffff]"
              >
              <MdOutlineDeleteOutline size={20}/>
             </div>

          </div>

            <h1 
            onClick={() => onClick(prompt._id)}
            className="text-[#000000] text-[19.356px] font-[700] w-[169px] leading-5 pt-2">
            {prompt?.title}
            </h1>

            <p 
             onClick={() => onClick(prompt._id)}
              className="text-[#000000] text-[10.603px] w-[169px] pt-2">
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