"use client"
import React  from 'react';
import Image from 'next/image'; 


// Import images
import product1 from "../../../Public/Images/product1.png";
import product2 from "../../../Public/Images/image 2.png";
import product3 from "../../../Public/Images/product3.png";
import product4 from "../../../Public/Images/product4.jpg";
import product8 from "../../../Public/Images/product8.jpeg";


export default function SimpleProductGrid() {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
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

          {/* Product 2 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product2}
                alt="Leviosa"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Leviosa</h3>
              <p className="text-gray-500 text-sm">Stylish cafe chair</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 2.500.000</span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product3}
                alt="Lolito"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FB6D6D] text-white text-sm">
                -50%
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Lolito</h3>
              <p className="text-gray-500 text-sm">Luxury big sofa</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 7.000.000</span>
                <span className="ml-2 text-gray-400 line-through">Rp 14.000.000</span>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product4}
                alt="Respira"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#2EC1AC] text-white text-sm">
                New
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Respira</h3>
              <p className="text-gray-500 text-sm">Outdoor bar table and stool</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 500.000</span>
              </div>
            </div>
          </div>
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

          {/* Product 2 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product2}
                alt="Leviosa"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Leviosa</h3>
              <p className="text-gray-500 text-sm">Stylish cafe chair</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 2.500.000</span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product3}
                alt="Lolito"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FB6D6D] text-white text-sm">
                -50%
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Lolito</h3>
              <p className="text-gray-500 text-sm">Luxury big sofa</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 7.000.000</span>
                <span className="ml-2 text-gray-400 line-through">Rp 14.000.000</span>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product4}
                alt="Respira"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#2EC1AC] text-white text-sm">
                New
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Respira</h3>
              <p className="text-gray-500 text-sm">Outdoor bar table and stool</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 500.000</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product8}
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

          {/* Product 2 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product2}
                alt="Leviosa"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Leviosa</h3>
              <p className="text-gray-500 text-sm">Stylish cafe chair</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 2.500.000</span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product3}
                alt="Lolito"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FB6D6D] text-white text-sm">
                -50%
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Lolito</h3>
              <p className="text-gray-500 text-sm">Luxury big sofa</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 7.000.000</span>
                <span className="ml-2 text-gray-400 line-through">Rp 14.000.000</span>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product4}
                alt="Respira"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#2EC1AC] text-white text-sm">
                New
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Respira</h3>
              <p className="text-gray-500 text-sm">Outdoor bar table and stool</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 500.000</span>
              </div>
            </div>
          </div>
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

          {/* Product 2 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product2}
                alt="Leviosa"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Leviosa</h3>
              <p className="text-gray-500 text-sm">Stylish cafe chair</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 2.500.000</span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product3}
                alt="Lolito"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FB6D6D] text-white text-sm">
                -50%
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Lolito</h3>
              <p className="text-gray-500 text-sm">Luxury big sofa</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 7.000.000</span>
                <span className="ml-2 text-gray-400 line-through">Rp 14.000.000</span>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product4}
                alt="Respira"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#2EC1AC] text-white text-sm">
                New
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Respira</h3>
              <p className="text-gray-500 text-sm">Outdoor bar table and stool</p>
              <div className="mt-2">
                <span className="font-semibold">Rp 500.000</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Simple Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          <button className="w-10 h-10 bg-[#FB6D6D] text-white rounded">1</button>
          <button className="w-10 h-10 border border-gray-200 rounded">2</button>
          <button className="w-10 h-10 border border-gray-200 rounded">3</button>
          <button className="px-4 h-10 border border-gray-200 rounded">Next</button>
        </div>
      </div>
    </div>
  )
}

