import { MdOutlineDeleteOutline } from "react-icons/md";

const AllPromptCard = ({ data, onPromptClick, deletePrompt }) => {
  
  const gradeColors = ['#52B4AE', '#B44DB8', '#FBCA23'];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
    {data?.map((prompt, i) => {
       const colorIndex = i % gradeColors.length;
       
       return (
        <div 
            key={prompt?._id}
             className="w-[11/12] h-[11/12] rounded-[16px] border-[1px] border-[#E8E8E8] bg-[#FFF] p-5 hover:cursor-pointer"
        >
          <div className="flex gap-2 text-[6.99px]">
            <div 
              onClick={() => onPromptClick(prompt?._id)}
              style={{ backgroundColor: gradeColors[colorIndex] }} className="w-[87px] h-[36px] text-[#fff] text-[10px] md:text-[13px] rounded-[26px] flex items-center justify-center">
              Age {prompt?.age?.[0]} - {prompt?.age?.[1]} 
            </div>
    
            <div 
             onClick={() => onPromptClick(prompt?._id)}
             className="w-[71px] h-[36px text-[10px] md:text-[13px] border-[0.538px] text-[#000] border-[#000] rounded-[26px] flex items-center justify-center">
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
          onClick={() => onPromptClick(prompt?._id)}
          className="text-[#000000] text-[26px] md:text-[36px] font-[700] leading-[2.5rem] pt-5">
            {prompt?.title}
          </h1>
    
          <p 
            onClick={() => onPromptClick(prompt?._id)}
            className="text-[#000000] text-[16px] pt-2">
            {prompt?.description}
          </p>
        </div>
       )
    })}
  </div>
  )
}

export default AllPromptCard;
