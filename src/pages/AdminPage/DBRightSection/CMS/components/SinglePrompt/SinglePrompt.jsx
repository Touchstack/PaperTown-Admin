import { HiChevronLeft} from 'react-icons/hi2';
import { HiCalendar } from "react-icons/hi2";
import PropTypes from 'prop-types';

const SinglePrompt = ({ onGoBack }) => {
  return (
    <div className="flex flex-col">
        <div onClick={onGoBack} className='flex flex-row items-center gap-3 text-[#040A1D] font-[700] cursor-pointer mb-3'>
          <HiChevronLeft />
          <p className='text-[26px]'>Processing elements of sound</p>
       </div>

       <div className='flex flex-col'>
           <p className='mb-2'>
             Writers will identify their favorite sensory memories and 
             transfer them to a visual heart map.
           </p>

           <div className='flex flex-row items-center gap-2 mb-3'>
              <HiCalendar />
              <p className='text-[14px] text-[#393939]'>10th April, 2023</p>
           </div>

            <div className="flex gap-2 text-[6.99px] mb-10">
                <div className="w-[87px] h-[36px] text-[#fff] text-[10px] md:text-[13px] bg-[#52B4AE] rounded-[26px] flex items-center justify-center">
                    Grade 6-12
                </div>
  
                <div className="w-[71px] h-[36px text-[10px] md:text-[13px] border-[1px] font-[700] text-[#000] border-[#000] rounded-[26px] flex items-center justify-center">
                    Memoir
                </div>
            </div>

           {/* Paragraph section */}
                <div className='text-[#000]'>
                    <h2 className='text-[22px] font-[600] mb-6'>
                      Writing  outcomes and expectations
                    </h2>

                <p className='mb-6'>
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                    with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software. 
                    It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
                </p>

                <p className='mb-6'>
                    It has survived not only five centuries, 
                    but also the leap into electronic typesetting, 
                    remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets 
                    containing Lorem Ipsum passages, and more recently with desktop 
                    publishing software. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with 
                    the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software.
                </p>
                </div>
           {/* Paragraph section */}

             {/* Paragraph section */}
             <div className='text-[#000]'>
                    <h2 className='text-[22px] font-[600] mb-6'>
                      Description
                    </h2>

                <p className='mb-6'>
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                    with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software. 
                    It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
                </p>
                </div>
           {/* Paragraph section */}

            {/* Paragraph section */}
                <div className='text-[#000] mb-10'>
                    <h2 className='text-[22px] font-[600] mb-2'>
                        Submission guidelines
                    </h2>

                    <ol style={{ listStyleType: 'decimal' }} className='ml-5'>
                        <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</li>
                        <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</li>
                        <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</li>
                    </ol>
                </div>
            {/* Paragraph section */}
       </div>
    </div>
  )
}

SinglePrompt.propTypes = {
    onGoBack: PropTypes.func.isRequired,
  };

export default SinglePrompt