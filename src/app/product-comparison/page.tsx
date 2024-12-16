import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cover from "../../../Public/Images/shopimg.jpg";
import sofa from "../../../Public/Images/asgardSofa.png";
import sofa2 from "../../../Public/Images/outdoor.png";

const ProductPage = () => {
  return (
    <>
      {/* Main Product Banner */}
      <div className="relative w-full h-[300px] flex flex-col items-center justify-center mb-6">
        <div className="absolute inset-0 z-0">
          <Image
            src={cover} 
            alt="Shop header background"
            fill
            className="object-cover brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">Product Comparison</h1>
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center space-x-2 text-sm md:text-base">
            <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-800">Comparison</span>
          </nav>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 px-4 space-y-6 sm:space-y-0">
        {/* Text Section */}
        <div className="w-full sm:w-1/3">
          <h1 className="text-2xl sm:text-3xl font-semibold">Go to Product page for more Products</h1>
          <span className="text-[#727272] mt-4 sm:mt-6 underline text-lg sm:text-xl">View More</span>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap w-full sm:w-2/3 justify-between gap-6">
          {/* Product Card 1 */}
          <div className="flex flex-col gap-2 w-full sm:w-1/3">
            <Image
              src={sofa}
              alt="Asgaard Sofa"
              width={280}
              height={177}
              className="w-full h-auto object-cover"
            />
            <h1 className="text-lg sm:text-xl font-semibold">Asgaard Sofa</h1>
            <span>Rs. 250,000.00</span>
            <div className="flex items-center gap-3 mt-2">
              <span>4.7</span>
              <div className="flex gap-1">
                <span className="text-xl text-yellow-400">&#9733;</span>
                <span className="text-xl text-yellow-400">&#9733;</span>
                <span className="text-xl text-yellow-400">&#9733;</span>
                <span className="text-xl text-yellow-400">&#9733;</span>
                <span className="text-xl text-yellow-400">&#9733;</span>
              </div>
              <div className="border-l border-[#727272] h-[30px]" />
              <span className="text-[#727272]">204 Reviews</span>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <Image
              src={sofa2}
              alt="Outdoor Sofa Set"
              width={280}
              height={177}
              className="w-full h-auto object-cover"
            />
            <h1 className="text-lg sm:text-xl font-semibold">Outdoor Sofa Set</h1>
            <span>Rs. 224,000.00</span>
            <div className="flex items-center gap-3 mt-2">
              <span>4.2</span>
              <div className="flex gap-1">
                <span className="text-xl text-yellow-400">&#9733;</span>
                <span className="text-xl text-yellow-400">&#9733;</span>
                <span className="text-xl text-yellow-400">&#9733;</span>
                <span className="text-xl text-yellow-400">&#9733;</span>
                <span className="text-xl text-yellow-400">&#9733;</span>
              </div>
              <div className="border-l border-[#727272] h-[30px]" />
              <span className="text-[#727272]">145 Reviews</span>
            </div>
          </div>
        </div>

        {/* Add Product Section */}
        <div className="w-full sm:w-1/4 mt-8 sm:mt-0">
          <h1 className="text-xl sm:text-2xl font-semibold">Add a Product</h1>
          <div className="w-full sm:w-[200px] bg-[#B88E2F] text-white mt-4 sm:mt-6 flex justify-center items-center h-[39px]">
            <button className="w-full">Choose a Product</button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-[#E8E8E8] w-full mt-16" />

      {/* Specifications Section */}
      <div className="flex flex-wrap items-start justify-between mt-14 w-full px-4">
        {/* General Details */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h1 className="text-xl sm:text-2xl font-semibold">General</h1>
          <h4>Sales Package</h4>
          <h4>Model Number</h4>
          <h4>Secondary Material</h4>
          <h4>Configuration</h4>
          <h4>Upholstery Material</h4>
          <h4>Upholstery Color</h4>
        </div>

        {/* Product Info */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h4>1 sectional sofa</h4>
          <h4>TFCBLIGRBL6SRHS</h4>
          <h4>Solid Wood</h4>
          <h4>L-shaped</h4>
          <h4>Fabric + Cotton</h4>
          <h4>Bright Grey & Lion</h4>
        </div>

        {/* Product Info for Second Item */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h4>1 Three Seater, 2 Single Seater</h4>
          <h4>DTUBLIGRBL568</h4>
          <h4>Solid Wood</h4>
          <h4>L-shaped</h4>
          <h4>Fabric + Cotton</h4>
          <h4>Bright Grey & Lion</h4>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-wrap items-start justify-between mt-14 w-full px-4">
        {/* Labels */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h1 className="text-xl sm:text-2xl font-semibold">Product</h1>
          <h4>Filling Material</h4>
          <h4>Finish Type</h4>
          <h4>Adjustable Headrest</h4>
          <h4>Maximum Load Capacity</h4>
          <h4>Origin of Manufacture</h4>
        </div>

        {/* Product Info Column 1 */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h4>Foam</h4>
          <h4>Matte</h4>
          <h4>No</h4>
          <h4>280 KG</h4>
          <h4>India</h4>
        </div>

        {/* Product Info Column 2 */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h4>Matte</h4>
          <h4>Bright Grey & Lion</h4>
          <h4>Yes</h4>
          <h4>300 KG</h4>
          <h4>India</h4>
        </div>
      </div>

      {/* Warranty Details */}
      <div className="flex flex-wrap items-start justify-between mt-14 sm:text-[20px] text-[18px] sm:px-6 px-4">
        {/* Column 1 - Warranty Labels */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h1 className="text-xl sm:text-2xl font-semibold">Warranty</h1>
          <h4>Warranty Summary</h4>
          <h4>Warranty Service Type</h4>
          <h4>Covered in Warranty</h4>
          <h4>Not Covered in Warranty</h4>
          <h4>Domestic Warranty</h4>
        </div>

     
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h4>1 Year Manufacturing Warranty</h4>
          <h4>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</h4>
          <h4>Warranty Against Manufacturing Defect</h4>
          <h4>The Warranty Does Not Cover Damages Due To Usage Beyond Intended Use.</h4>
          <h4>1 Year</h4>
          <button className="w-full sm:w-[215px] h-[50px] bg-[#B88E2F] text-white mt-6 sm:mt-10 rounded-lg shadow-lg mb-6">Add To Cart</button>
        </div>

      
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h4>1.2 Year Manufacturing Warranty</h4>
          <h4>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</h4>
          <h4>Warranty of the product is limited to manufacturing defects only.</h4>
          <h4>Not Covered in Warranty: Damages Beyond Intended Use</h4>
          <h4>3 Months</h4>
          <button className="w-full sm:w-[215px] h-[50px] bg-[#B88E2F] text-white mt-6 sm:mt-10 rounded-lg shadow-lg">Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
