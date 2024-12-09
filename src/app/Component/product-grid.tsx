"use client"
import React, { useState } from 'react';
import ProductCard from './productCard'; // Adjust path if needed
import { StaticImageData } from 'next/image';

// Import images
import product1 from "../../../Public/Images/product1.png";
import product2 from "../../../Public/Images/product2.png";
import product3 from "../../../Public/Images/product3.png";
import product4 from "../../../Public/Images/product4.jpg";
import product5 from "../../../Public/Images/product5.png";
import product6 from "../../../Public/Images/product6.png";
import product7 from "../../../Public/Images/product7.jpg";
import product8 from "../../../Public/Images/product8.jpeg";

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

const products: Product[] = [
  {
    name: 'Syltherine',
    category: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    image: product1,
    discount: 30
  },
  {
    name: 'Leviosa',
    category: 'Stylish cafe chair',
    price: 2500000,
    image: product2,
  },
  {
    name: 'Lolito',
    category: 'Luxury big sofa',
    price: 7000000,
    originalPrice: 14000000,
    image: product3,
    discount: 50
  },
  {
    name: 'Respira',
    category: 'Outdoor bar table and stool',
    price: 500000,
    image: product4,
    isNew: true
  },
  {
    name: 'Grifo',
    category: 'Night lamp',
    price: 1500000,
    image: product5,
  },
  {
    name: 'Muggo',
    category: 'Small mug',
    price: 150000,
    image: product6,
    isNew: true
  },
  {
    name: 'Pingky',
    category: 'Cute bed set',
    price: 7000000,
    originalPrice: 14000000,
    image: product7,
    discount: 50
  },
  {
    name: 'Potty',
    category: 'Minimalist flower pot',
    price: 500000,
    originalPrice: 1000000,
    image: product8,
    discount: 50
  }
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

  return (
    <div className="container mx-auto px-6">
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-12 mb-8">
        <button 
          className="w-8 h-8 flex items-center justify-center rounded bg-amber-500 text-white" 
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
        <button 
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100" 
          onClick={() => handlePageChange(2)}
        >
          2
        </button>
        <button 
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100" 
          onClick={() => handlePageChange(3)}
        >
          3
        </button>
        <button 
          className="px-4 h-8 flex items-center justify-center rounded hover:bg-gray-100" 
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
