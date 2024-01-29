import { HiChevronLeft } from 'react-icons/hi2';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { LuUpload } from 'react-icons/lu';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';


const AddNewsItem = ({ onGoBack }) => {
   const [title, setTitle] = useState("")
   const [file, setFile] = useState([]);
   const [fileUrl, setFileUrl] = useState('');
   const [about, setAbout] = useState("")
   const [isModalVisible, setIsModalVisible] = useState(false);

   const openModal = () => {
       setIsModalVisible(true);
   }
 
   const closeModal = () => {
       setIsModalVisible(false);
   }

   const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };


  const onDrop = useCallback(
    function (acceptedFiles) {
      setFile(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [file]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
    },
  });

  return (
    <div className="px-10 flex flex-col">
        <div onClick={onGoBack} className='flex flex-row items-center gap-3 text-[#040A1D] font-[700] cursor-pointer'>
          <HiChevronLeft />
          <p className='text-[26px]'>Add news item</p>
        </div>

        <section className='mt-8 text-[#040A1D]'>
            <div className='flex flex-col'>
                <label className='mb-1'>Title</label>
                <input
                  type='text'
                  placeholder="News title"
                  className='w-[40%] h-[50px] rounded-[10px] px-5 bg-[#F4F5F7]'
                  value={title}
                  onChange={handleTitleChange}
                />
            </div>

            <div className="mt-5 mb-5">
            <p className="text-[#393939] mb-2">Upload cover photo</p>
            <div {...getRootProps()} className="cursor-pointer">
              <input {...getInputProps()} />
              <div className="w-full md:w-[80%] h-[200px] border-dashed border-4 rounded-[10px] relative">
                {fileUrl && (
                  <img
                    src={fileUrl}
                    alt="Uploaded Cover"
                    className="w-full md:w-[422px] h-[195px] rounded-[10px] object-cover"
                  />
                )}
                <button className="absolute  flex items-center justify-center gap-2 border-[1px] border-[#F4F5F7] rounded-[10px] p-2 top-[5rem] left-[8rem] md:left-[20rem]">
                  <LuUpload color="#efeff1" />
                  <p className="text-[#F4F5F7] font-[700]">Upload image</p>
                </button>
              </div>
            </div>
          </div>

            <div className='flex flex-col mt-10'>
                <label className='mb-1'>Add text here</label>
                <textarea
                  type='text'
                  placeholder="About the writer"
                  className='w-[80%] h-[200px] rounded-[10px] px-2 py-2 bg-[#F4F5F7]'
                  value={about}
                  onChange={handleAboutChange}
                />
            </div>
        </section>

          <button className="flex w-full md:w-[316px] items-center justify-center h-[44px] mb-5 mt-5  bg-[#DF327B] rounded-[50px]" onClick={openModal}>
            <p className="flex text-[#FFF] font-[700]">Submit News</p>
          </button>

          {isModalVisible && 
                <Modal isVisible={isModalVisible} text="News item added!" onClose={closeModal} />
            }
    </div>
  )
}

AddNewsItem.propTypes = {
  onGoBack: PropTypes.func.isRequired,
};

export default AddNewsItem