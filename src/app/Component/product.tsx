import React from 'react'
import  Link  from 'next/link'
import Image from 'next/image'
import product1 from "../../../Public/Images/product1.png";
import product2 from "../../../Public/Images/product2.png";
import product3 from "../../../Public/Images/product3.png";
import product4 from "../../../Public/Images/product4.jpg";
import product5 from "../../../Public/Images/product5.png";
import product6 from "../../../Public/Images/product6.png";
import product7 from "../../../Public/Images/product7.jpg";
import product8 from "../../../Public/Images/product8.jpeg";


const product = () => {
  return (
    <div>
      <div>
        <h1 className='text-[40px] text-center font-bold mt-14 mb-6'>Our Products</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl'>
          <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
            <Image
              src={product1}
              alt='table-img'
              width={285}
              height={301}
            />
            <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Syltherine</h3>
            <p className='ml-6'>Stylish cafe chair</p>
            <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 2.500.000</span>
            <span className='text-[16px] line-through'>Rp 3.500.000</span>
          </div>
          <div className='relative w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
            <Image
              src={product2}
              alt="chair-img"
              width={285}
              height={301}
            />
            <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>
              Leviosa
            </h3>
            <p className='ml-6'>Stylish cafe chair</p>
            <span className='text-[20px] font-semibold mr-6 ml-6'>
              Rp 2.500.000
            </span>

            <div className='absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex items-center justify-center flex-col'>
              <button className='text-[#B88E2F] text-[16px] font-semibold bg-[#FFFFFF] w-[202px] h-[48px]'>Add to cart</button>
              <div className='flex items-center justify-around gap-4 mt-6 text-[#FFFFFF]'>
                <Image
                  src={product3}
                  alt='icon-1'
                  width={16}
                  height={16}
                />
                <span>Share</span>
                <Image
                  src={product4}
                  alt='icon-2'
                  width={16}
                  height={16}
                />
                <span>Compare</span>
                <Image
                  src={product5}
                  alt='icon-3'
                  width={16}
                  height={16}
                />
                <span>Like</span>
              </div>
            </div>
          </div>
          <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
            <Image
              src={product6}
              alt='sofa-img'
              width={285}
              height={301}
            />
            <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Lolito</h3>
            <p className='ml-6'>Luxury big sofa</p>
            <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 7.000.000</span>
            <span className='text-[16px] line-through'>Rp 3.500.000</span>
          </div>
          <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
            <Image
              src={product7}
              alt='multi-sofa-img'
              width={285}
              height={301}
            />
            <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Respira</h3>
            <p className='ml-6'>Outdoor bar table and stool</p>
            <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 500.000</span>
          </div>

          <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
            <Image
              src={product8}
              alt='lamp-img'
              width={285}
              height={301}
            />
            <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Grifo</h3>
            <p className='ml-6'>Night lamp</p>
            <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 1.500.000</span>
          </div>
          <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
            <Image
              src={product2}
              alt='black-sofa-img'
              width={285}
              height={301}
            />
            <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Muggo</h3>
            <p className='ml-6'>Small mug</p>
            <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 150.000</span>
          </div>
          <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
            <Image
              src={product3}
              alt='pic-sofa-img'
              width={285}
              height={301}
            />
            <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Pingky</h3>
            <p className='ml-6'>Cute bed set</p>
            <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 14.000.000</span>
            <span className='text-[16px] line-through'>Rp 3.500.000</span>
          </div>
          <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
            <Image
              src={product1}
              alt='orange-sofa-img'
              width={285}
              height={301}
            />
            <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Potty</h3>
            <p className='ml-6'>Minimalist flower pot</p>
            <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 500.000</span>
          </div>
        </div>

        <div className='flex items-center justify-center mt-6'>
          <Link href={"/product"}>
          <button className="w-[245px] h-[48px] bg-[#FFFFFF] border border-[#B88E2F] text-[#B88E2F]">
            Show More
          </button>
          </Link>
        </div>
      </div> {/* <-- Close this div here */}
    </div>
  )
}

export default product
