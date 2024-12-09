"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-white flex items-center justify-between px-4 md:px-8 lg:px-16 shadow-md z-50">
      <div className="flex items-center">
        <Image
          src={"/Images/header.png"}
          alt="logo"
          width={160}
          height={40}
          className="w-20 h-auto ml-4"
        />
        <div className="w-[130px] h-[41px] font-montserrat font-bold text-[34px] leading-[41px] text-black flex-none order-1 flex-grow-0">Furnio</div>
      </div>

      <div className="hidden md:flex space-x-6 text-gray-800">
        <Link href={"/"} className="hover:text-gray-500 transition">
          Home
        </Link>
        <Link href={"../Shop"} className="hover:text-gray-500 transition">
          Shop
        </Link>
        <Link href={"/blog"} className="hover:text-gray-500 transition">
          Blog
        </Link>
        <Link href={"/contact"} className="hover:text-gray-500 transition">
          Contact
        </Link>
      </div>

      <div className="hidden sm:flex items-center space-x-4">
        <div className="w-6 h-6 cursor-pointer hover:opacity-80">
        <span className="icon1"><MdPersonOutline /></span>
        </div>
         <span className="w-6 h-6 cursor-pointer hover:opacity-80"><CiSearch /></span>
         < Link href={"/AsgardSofa"}>
        <span className="w-6 h-6 cursor-pointer hover:opacity-80"><GoHeart /></span>
        </Link>
        <Link href={"/cart"}>
        <span className="w-6 h-6 cursor-pointer hover:opacity-80"><AiOutlineShoppingCart /></span>
        
        </Link>
      </div>

      <div className="md:hidden flex items-center justify-around gap-3"> 
      <div className="hidden sm:flex items-center space-x-4">
        <div className="w-6 h-6 cursor-pointer hover:opacity-80">
        <span className="icon1"><MdPersonOutline /></span>
        </div>
      <span className="w-6 h-6 cursor-pointer hover:opacity-80"><CiSearch /></span>
         < Link href={"/Asgardsofa"}>
        <span className="w-6 h-6 cursor-pointer hover:opacity-80"><GoHeart /></span>
        </Link>
        <Link href={"/cart"}>
        <span className="w-6 h-6 cursor-pointer hover:opacity-80"><AiOutlineShoppingCart /></span>
        
        </Link>
      </div>
        <button
          aria-label="Toggle menu"
          className="text-gray-800 focus:outline-none hover:text-gray-500"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 p-4">
          <Link href={"/"} className="hover:text-gray-500 transition">
            Home
          </Link>
          <Link href={"/shop"} className="hover:text-gray-500 transition">
            Shop
          </Link>
          <Link href={"/blog"} className="hover:text-gray-500 transition">
            Blog
          </Link>
          <Link href={"/contact"} className="hover:text-gray-500 transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;