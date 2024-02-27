import React from 'react'
import Empty from '../../../../../../assets/Images/Empty.gif'

const EmptyState = () => {
  return (
    <div className='flex items-center justify-center h-[50vh] flex-col text-[#000000]'>
       <img src={Empty} alt="" />
       <h1 className='font-700 text-[36px]'>No content available</h1>
       <p className='text-[16px] font-[400] font-VarelaRegular'>Kindly check back soon</p>
    </div>
  )
}

export default EmptyState