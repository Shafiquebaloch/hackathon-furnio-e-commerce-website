import React from 'react'
import Image from 'next/image'
import product1 from "../../../Public/Images/product1.png";
import product2 from "../../../Public/Images/product2.png";
import product3 from "../../../Public/Images/product3.png";
import product4 from "../../../Public/Images/product4.jpg";
import product5 from "../../../Public/Images/product5.png";
import product6 from "../../../Public/Images/product6.png";
const furniture = () => {
  return (
    <div>
<div className="h-auto mt-32 px-6 md:px-16 lg:px-32">
          <h3 className="text-center text-[18px] sm:text-[20px]">Share your setup with</h3>
          <h1 className="text-center text-[30px] sm:text-[40px] font-bold">#FuniroFurniture</h1>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-8">

            <div className="flex flex-col items-center lg:items-start gap-5">
              <Image
                src={product1}
                alt="last-1"
                width={451}
                height={312}
                className="mb-5"
              />
              <Image
                src={product2}
                alt="last-2"
                width={451}
                height={312}
              />
            </div>

            <div className="flex justify-center">
              <Image
                src={product3}
                alt="last-3"
                width={295}
                height={392}
              />
            </div>

            <div className="flex flex-col items-center lg:items-start gap-5">
              <Image
                 src={product4}
                alt="last-4"
                width={420}
                height={348}
                className="mb-5 pt-8 lg:pt-32"
              />
              <div className="flex justify-between gap-5">
                <Image
                   src={product4}
                  alt="last-5"
                  width={178}
                  height={242}
                />
                <Image
                   src={product5}
                  alt="last-6"
                  width={258}
                  height={196}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                 src={product6}
                alt="last-7"
                width={425}
                height={433}
              />
            </div>
          </div>
        </div>

    </div>
  )
}

export default furniture
