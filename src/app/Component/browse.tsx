import React from 'react'
import Image from 'next/image'
import img1 from "../../../Public/Images/browse1.png"
import img2 from "../../../Public/Images/browse2.png"
import img3 from "../../../Public/Images/browes3.png"


const browse = () => {
  return (
    <div>
       <h1 className='text-[32px] font-bold text-center mt-10'>Browse The Range</h1>
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className='flex flex-wrap items-center justify-center mt-16 gap-8'>
        <div className='flex flex-col items-center max-w-[300px] sm:max-w-[100%]'>
          <Image
            src={img1}
            alt='img-1'
            width={381}
            height={480}
            className="max-w-[100%] h-auto"
          />
          <h3 className='text-center text-2xl mt-6'>Dining</h3>
        </div>

        <div className='flex flex-col items-center max-w-[300px] sm:max-w-[100%]'>
          <Image
            src={img2}
            alt='img-2'
            width={381}
            height={480}
            className="max-w-[100%] h-auto"
          />
          <h3 className='text-center text-2xl mt-6'>Living</h3>
        </div>

        <div className='flex flex-col items-center max-w-[300px] sm:max-w-[100%]'>
          <Image
            src={img3}
            alt='img-3'
            width={381}
            height={480}
            className="max-w-[100%] h-auto"
          />
          <h3 className='text-center text-2xl mt-6'>Bedroom</h3>
        </div>
      </div>
    </div>
  )
}

export default browse
