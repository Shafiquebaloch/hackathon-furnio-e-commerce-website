"use client"
import React, { useState } from 'react';
import ProductCard from './product-card';
import { StaticImageData } from 'next/image';

// Import images
import product1 from "../../../public/Images/product1.png";
import product2 from "../../../public/Images/product2.png";
import product3 from "../../../public/Images/product3.png";
import product4 from "../../../public/Images/product4.jpg";
import product5 from "../../../public/Images/product5.png";
import product6 from "../../../public/Images/product6.png";
import product7 from "../../../public/Images/product7.jpg";
import product8 from "../../../public/Images/product8.jpeg";

// Define the Product type with StaticImageData for image
interface Product {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: StaticImageData;
  discount?: number;
  isNew?: boolean;
}

// Define the products array with StaticImageData for images
const products: Product[] = [
  { name: 'Syltherine', category: 'Stylish cafe chair', price: 2500000, originalPrice: 3500000, image: product1, discount: 30 },
  { name: 'Leviosa', category: 'Stylish cafe chair', price: 2500000, image: product2 },
  { name: 'Lolito', category: 'Luxury big sofa', price: 7000000, originalPrice: 14000000, image: product3, discount: 50 },
  { name: 'Respira', category: 'Outdoor bar table and stool', price: 500000, image: product4, isNew: true },
  { name: 'Grifo', category: 'Night lamp', price: 1500000, image: product5 },
  { name: 'Muggo', category: 'Small mug', price: 150000, image: product6, isNew: true },
  { name: 'Pingky', category: 'Cute bed set', price: 7000000, originalPrice: 14000000, image: product7, discount: 50 },
  { name: 'Potty', category: 'Minimalist flower pot', price: 500000, originalPrice: 1000000, image: product8, discount: 50 },
];

export default function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-12 mb-8">
        <button 
          className="w-8 h-8 flex items-center justify-center rounded bg-amber-500 text-white disabled:bg-gray-300" 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Dynamically create page buttons */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded ${currentPage === index + 1 ? 'bg-amber-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button 
          className="w-8 h-8 flex items-center justify-center rounded bg-amber-500 text-white disabled:bg-gray-300" 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
