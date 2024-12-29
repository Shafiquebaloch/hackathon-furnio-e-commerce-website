import React from 'react'
import Image from 'next/image'
import product1 from "../../../Public/Images/product1.png";
import product2 from "../../../Public/Images/product2.png";
import product3 from "../../../Public/Images/product3.png";
import product4 from "../../../Public/Images/product4.jpg";
import product5 from "../../../Public/Images/product5.png";
import product6 from "../../../Public/Images/product6.png";

const Furniture = () => {
  return (
    <div className="h-auto mt-32 px-6 md:px-16 lg:px-32 max-w-screen-xl mx-auto">
      <h3 className="text-center text-[18px] sm:text-[20px]">Share your setup with</h3>
      <h1 className="text-center text-[30px] sm:text-[40px] font-bold">#FuniroFurniture</h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-8">
        
        {/* Left section with two images */}
        <div className="flex flex-col items-center lg:items-start gap-5">
          <Image
            src={product1}
            alt="Product 1"
            width={451}
            height={312}
            className="object-cover mb-5"
          />
          <Image
            src={product2}
            alt="Product 2"
            width={951}
            height={312}
            className="object-cover"
          />
        </div>

        {/* Center section with a single image */}
        <div className="flex justify-center">
          <Image
            src={product3}
            alt="Product 3"
            width={895}
            height={892}
            className="object-cover"
          />
        </div>

        {/* Right section with two images in a flex row */}
        <div className="flex flex-col items-center lg:items-start gap-5">
          <Image
            src={product4}
            alt="Product 4"
            width={920}
            height={348}
            className="object-cover mb-5 pt-8 lg:pt-32"
          />
          <div className="flex justify-between gap-1">
            <Image
              src={product4}
              alt="Product 5"
              width={178}
              height={242}
              className="object-cover"
            />
            <Image
              src={product5}
              alt="Product 6"
              width={160}
              height={296}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right section with a large image */}
        <div className="flex justify-center">
          <Image
            src={product6}
            alt="Product 7"
            width={785}
            height={433}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Furniture
