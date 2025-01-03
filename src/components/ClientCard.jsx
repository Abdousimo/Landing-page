import React, { useEffect } from 'react'

const ClientCard = ({name,rating,desc,role}) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);
  
  return (
    <div className='flex flex-col justify-center items-center bg-white rounded-xl  py-[30px] px-[20px] text-sm text-paragraph max-w-[30rem]'>
         <span className='font-bold'>{name}</span>
         <span className='text-[#A8A8A8] font-semibold py-2'>{role}</span>
         <span className='pb-2 flex gap-1 items-center'>
         {stars.map((isFilled, index) => (
        <span key={index} className=''>
          {isFilled ? <img src='/Vector.png'/> : <img src='/Vector.png'/>}
        </span>
      ))}
         </span>
         <p>{desc}</p>
    </div>
  )
}

export default ClientCard