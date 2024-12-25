import React from 'react'
import  Link  from 'next/link'
import Image from 'next/image'
import product1 from "../../../Public/Images/product1.png";
import product2 from "../../../Public/Images/product2.png";
import product4 from "../../../Public/Images/product4.jpg";
import product6 from "../../../Public/Images/product6.png";
import product7 from "../../../Public/Images/product7.jpg";
import potty from "../../../Public/Images/product8.jpeg";
import lamp from "../../../Public/Images/Image 5.png"


const product = () => {
  return (
    <div>
      <div>
        <h1 className='text-[40px] text-center font-bold mt-14 mb-6'>Our Products</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl'>
        <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product1}
                alt="Syltherine"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FB6D6D] text-white text-sm">
                -30%
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Syltherine</h3>
              <p className="text-gray-500 text-sm">Stylish cafe chair</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 2.500.000</span>
                <span className="ml-2 text-gray-400 line-through">Rp 3.500.000</span>
              </div>
            </div>
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
                <span>Share</span>
                <span>Compare</span>
                <span>Like</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product2}
                alt="Syltherine"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FB6D6D] text-white text-sm">
                -50%
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">lolito</h3>
              <p className="text-gray-500 text-sm">Luxury Big Sofa</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 7.000.000</span>
                <span className="ml-2 text-gray-400 line-through">Rp 14.000.000</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product4}
                alt="Syltherine"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#2bbf52] text-white text-sm">
               New
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Respira</h3>
              <p className="text-gray-500 text-sm">outbar table and stool</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 500.000</span>
              </div>
            </div>
          </div>
          <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
            <Image
              src={lamp}
              alt='lamp-img'
              width={285}
              height={301}
            />
            <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Grifo</h3>
            <p className='ml-6'>Night lamp</p>
            <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 1.500.000</span>
          </div>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product6}
                alt="Syltherine"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#1ec37b] text-white text-sm">
                New
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Muggo</h3>
              <p className="text-gray-500 text-sm">small mug</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 150.000</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product7}
                alt="Syltherine"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#fd6666] text-white text-sm">
                -50%
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Pingky</h3>
              <p className="text-gray-500 text-sm">cute bed set</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 7.000.000</span>
                <span className="ml-2 text-gray-400 line-through">Rp 14.000.000</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={potty}
                alt="Syltherine"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#49ce97] text-white text-sm">
                New
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Potty</h3>
              <p className="text-gray-500 text-sm">manimalist flower pot</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 5.00.000</span>
              </div>
            </div>
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
