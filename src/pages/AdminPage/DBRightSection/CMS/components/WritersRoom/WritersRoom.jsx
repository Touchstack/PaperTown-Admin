import { useState } from 'react';
import { inspiration } from '../../../../../../../ConstantData';
import close from '../../../../../../assets/Images/x-close.svg';
import add from '../../../../../../assets/Images/add.svg';
import { HiCalendar } from "react-icons/hi2";
import Modal from '../Modal/Modal';

const WritersRoom = () => {
  const [marqueInput, setMarqueInput] = useState('');
  const [addressOne, setaddressOne] = useState('');
  const [addressTwo, setaddressTwo] = useState('');
  const [Day, setDay] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
        setIsModalVisible(true);
    }

    const closeModal = () => {
        setIsModalVisible(false);
    }


    const handlemarqueChange = (e) => {
      setMarqueInput(e.target.value);
    };

    const handleaddress1Change = (e) => {
      setaddressOne(e.target.value);
    };

  const handleaddress2Change = (e) => {
    setaddressTwo(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setstartDate(e.target.value);
  };


  const handleEndDateChange = (e) => {
    setendDate(e.target.value);
  };

  return (
    <div className="px-4 md:px-10 flex flex-col">
      {/* Header Marque section */}
      <div className="flex flex-col md:flex-row md:mb-10 gap-4 md:gap-[150px]">
        <p className="text-[#000] font-[700] mb-3 md:mb-0">Header marque</p>

        <div className='flex flex-col'>
          {/* Create an input field here */}
          <label className='text-[#393939] text-[14px]'>Use the return key to add text to the marque list</label>
          <input
            type="text"
            value={marqueInput}
            onChange={handlemarqueChange}
            className="w-[350px] font-['Varela-Regular'] md:w-[560px] h-full p-4 rounded-[10px] bg-[#e8e9ec] border-[#F4F5F7] text-[#000] mt-3"
            placeholder="Type something..."
          />

          <div className='flex flex-col md:flex-row gap-5 pt-2'>
            {inspiration.map((inspiration) => (
                <div key={inspiration.id} className='bg-[#7272721A] rounded-full w-[120px] h-[30px] text-[#000] text-[14px]  flex items-center justify-center mb-2 md:mb-0 gap-2'>
                  {inspiration.msg}
                  <img src={close} alt="" />
                </div>
            ))}
          </div>
        </div>

      </div>
      {/* Header Marque section */}

      <hr className="mx-5" />

      {/* Locations */}
      <div className="mt-5 flex flex-col md:flex-row gap-4 md:gap-[180px]">
        <p className="text-[#000] font-[700] mb-3 md:mb-0">Locations</p>

        <div className='flex flex-col md:flex-row gap-5'>
          <div className='flex flex-col'>
            <p className='text-[#393939]'>Address line 1</p>
            <input
              type="text"
              value={addressOne}
              onChange={handleaddress1Change}
              className="w-[350px] font-['Varela-Regular'] md:w-[270px] h-full p-4 rounded-[10px] bg-[#e8e9ec] border-[#F4F5F7] mt-3 text-[#000]"
              placeholder="Type something..."
            />
          </div>

          <div className='flex flex-col'>
            <p className='text-[#393939]'>Address line 2</p> 
            <input
              type="text"
              value={addressTwo}
              onChange={handleaddress2Change}
              className="w-[350px] font-['Varela-Regular'] md:w-[270px] h-full p-4 rounded-[10px] bg-[#e8e9ec] border-[#F4F5F7] mt-3 text-[#000]"
              placeholder="Type something..."
            />
          </div>

          <img src={add} alt="" className='mt-10 w-[18px]' />
        </div>
      </div>
      {/* Locations */}

      {/* Address */}
      <div className="flex flex-col md:flex-row mt-3 overflow-x-auto md:ml-[14rem] w-[600px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex-shrink-0 p-2 m-5 rounded text-[#000]">
            <h1 className='text-[16px]'>East Cantonments</h1>
            <p className='text-[14px] text-[#393939]'>JWHM+WJH, First Floor, Blu Business Park</p>
          </div>
        ))}
      </div>
      {/* Address */}

      <hr className="mx-5" />

     {/* Opening Hours */}
      <div className="mt-5 flex flex-col md:flex-row gap-4 md:gap-[180px]">
         <p className="text-[#000] font-[700] mb-3 md:mb-0">Opening hours</p>

        <div className='flex flex-col'>
          <div className='flex'>
              <h1 className='text-[#000] text-[26px] font-[700]'>Meeting Schedule</h1>
              <img src={add} alt="" className='md:ml-[380px] ml-[100px]' />
          </div>

          <div className='flex flex-col pt-5'>
              <label className='text-[#393939]'>Day</label>
              <input
                type="text"
                value={Day}
                onChange={handleDayChange}
                className="w-[350px] font-['Varela-Regular'] md:w-[522px] h-full p-4 rounded-[10px] bg-[#e8e9ec] border-[#F4F5F7] text-[#000] mt-3"
                placeholder="Type something..."
              />

              <div className='flex flex-col md:flex-row gap-5 pt-6'>
               <div className='flex flex-col'>
                <p className='text-[#393939]'>Start Time</p>
                <div className='relative'>
                  <input
                    type="text"
                    value={startDate}
                    onChange={handleStartDateChange}
                    className="w-[350px] font-['Varela-Regular'] md:w-[250px] h-full p-4 rounded-[10px] bg-[#e8e9ec] border-[#F4F5F7] mt-3 text-[#000]"
                    placeholder="Type something..."
                  />
                  <HiCalendar className='absolute right-4 top-8 text-[#A3A3A3] cursor-pointer' />
                </div>
               </div>

                <div className='flex flex-col'>
                  <p className='text-[#393939]'>End Time</p>
                  <div className='relative'>
                    <input
                      type="text"
                      value={endDate}
                      onChange={handleEndDateChange}
                      className="w-[350px] font-['Varela-Regular'] md:w-[250px] h-full p-4 rounded-[10px] bg-[#e8e9ec] border-[#F4F5F7] mt-3 text-[#000]"
                      placeholder="Type something..."
                    />
                    <HiCalendar className='absolute right-4 top-8 text-[#A3A3A3] cursor-pointer' />
                  </div>
                </div>
             </div>
               <hr className="mx-5 mt-5" />
            </div>
          </div>
        </div>
     {/* Opening Hours */}


     {/* Dates */}
     <div className="flex flex-col md:flex-row mt-3 overflow-x-auto md:ml-[14rem] md:w-[600px] md:h-[100px] h-[380px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex-shrink-0 p-2 m-5 rounded text-[#000]">
            <h1 className='text-[16px]'>Monday</h1>
            <p className='text-[14px] text-[#393939]'>9am - 5pm</p>
          </div>
        ))}
      </div>
      {/* Dates */}

      <div className='flex justify-end my-3 mx-[15%]'>
         <div className='flex flex-col items-center justify-center'>
          <p className='text-[10px] mb-2 ml-7'>Updated 10 Apr 17:23</p> 
         
          <button className="flex mr-[5rem] w-[216px] items-center justify-center h-[54px] mb-5 mt-5  bg-[#DF327B] rounded-[50px]" onClick={openModal}>
              <p className="flex text-[#FFF] font-[700]">Save Changes</p>
          </button>
         </div> 
      </div>


      {isModalVisible && 
                <Modal isVisible={isModalVisible} text="Changes Saved!" onClose={closeModal} />
            }
    </div>
  );
}

export default WritersRoom;
