import { HiChevronLeft, HiCalendar } from 'react-icons/hi2';
import PropTypes from 'prop-types';

const NewsAndEvents = ({ onGoBack }) => {
  return (
    <div className="px-10 flex flex-col">
         <section className='flex flex-col mb-5'>
            <div onClick={onGoBack} className='flex flex-row items-center gap-3 text-[#040A1D] font-[700] cursor-pointer'>
              <HiChevronLeft />
             <p className='text-[42px]'>UNICEF to initiate Grade 7 spelling Bee</p>
            </div>

             <div className='flex flex-row'>
               <p className='flex flex-row items-center'>
               <HiCalendar />{" "}Date
               </p>

               <p className='ml-2 text-[#040A1D]'>
                1st Nov, 2023
               </p>
             </div>
         </section>

        <div className="bg-[url('/src/assets/Images/detaImage.png')] w-[90%] h-[330px] rounded-[10px] mb-10">
        </div>

        <section className='w-[90%] items-center justify-center text-[#040A1D]'>
         <p className='mb-5'>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
         </p>
         <p className='mb-5'>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
         </p>
         <p className='mb-5'>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
         </p>
         <p className='mb-5'>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
        </p>
        </section>
    </div>
  )
}

NewsAndEvents.propTypes = {
   onGoBack: PropTypes.func.isRequired,
 };

export default NewsAndEvents