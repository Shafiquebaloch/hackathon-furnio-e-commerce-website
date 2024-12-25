import React from 'react';
import Image from 'next/image';
import { RiAdminLine } from "react-icons/ri";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import shopping from "../../../Public/Images/shopimg.jpg"
import laptop from "../../../Public/Images/laptop.jpg"
import draw from "../../../Public/Images/draw.jpg"
import book from "../../../Public/Images/book.jpg"
import pro1 from "../../../Public/Images/pro1.jpg"
import pro2 from "../../../Public/Images/pro2.jpg"
import pro3 from "../../../Public/Images/pro3.jpg"
import pro4 from "../../../Public/Images/pro4.jpg"
import pro5 from "../../../Public/Images/pro5.jpg"

const BlogPage = () => {
  return (
    <>
      <div className="relative w-full h-[400px] flex flex-col items-center justify-center mb-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={shopping}  // Corrected path with leading slash
          alt="Shop header background"
          fill
          className="object-cover brightness-95"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          blog
        </h1>
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center space-x-2 text-sm md:text-base">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Home
          </Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-800">blog</span>
        </nav>
      </div>
    </div>
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:h-[2210px] px-4 lg:px-0 mt-0">
        {/* Left Section */}
        <div className="lg:w-1/2 lg:ml-12">
          {/* Blog Post 1 */}
          <Image
            src={laptop}
            alt="laptop-img"
            width={817}
            height={500}
            className="mt-8 lg:mt-28 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
          <RiAdminLine />
            
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <BsCalendar2DateFill />
           
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <FaTag />
            
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>

          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Going all-in with millennial design
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          {/* Blog Post 2 */}
          <Image
            src={draw}
            alt="drawing-img"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
          <RiAdminLine />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <BsCalendar2DateFill />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <FaTag />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Exploring new ways of decorating
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          {/* Blog Post 3 */}
          <Image
            src={book}
            alt="books-img"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
          <RiAdminLine />
            
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <BsCalendar2DateFill />
           
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <FaTag />
            
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Handmade pieces that took time to make
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 lg:mr-20 lg:ml-20 mt-10 lg:mt-28">
          {/* Search Bar */}
          <div className="flex items-center justify-end w-full lg:w-[311px] h-[58px] border px-4 border-[#9F9F9F] rounded-md">
            <span ><CiSearch/></span>
          </div>

          {/* Categories */}
          <h1 className="text-[20px] lg:text-[24px] font-semibold mt-10">Categories</h1>
          <div className="space-y-4 lg:space-y-6">
            {[
              { name: 'Crafts', count: 2 },
              { name: 'Design', count: 8 },
              { name: 'Handmade', count: 7 },
              { name: 'Interior', count: 1 },
              { name: 'Wood', count: 6 },
            ].map((category) => (
              <div key={category.name} className="flex justify-between text-sm lg:text-base">
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            ))}
          </div>



          {/* Recent Posts */}
          <h1 className="text-[24px] font-semibold mb-8">Recent Posts</h1>
{[
     { src: pro1, title: 'Going all-in with millennial design' },
     { src: pro2, title: 'Exploring new ways of decorating' },
     { src: pro3, title: 'Handmade pieces that took time to make' },
     { src: pro4, title: 'Modern home in Milan' },
     { src: pro5, title: 'Colorful office redesign' },
].map((post, index) => (
  <div key={index} className="flex items-center justify-between gap-8">
    <Image src={post.src} alt={`post${index + 1}`} width={80} height={80} />
    <div className="flex flex-col">
      <h1 className="font-semibold text-[14px] w-[119px]">{post.title}</h1>
      <span className="text-[#9F9F9F]">03 Aug 2022</span>
    </div>
  </div>
))}

        </div>
      </div>
    </>
  );
};

export default BlogPage;
