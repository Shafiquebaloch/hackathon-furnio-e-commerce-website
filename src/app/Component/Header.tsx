"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../Public/Images/header.png";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-white flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 shadow-md z-50">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <Image
          src={logo}
          alt="logo"
          width={160}
          height={40}
          className="w-16 sm:w-20 h-auto"
        />
        <div className="text-[20px] sm:text-[24px] lg:text-[28px] font-montserrat font-bold text-black hidden sm:block">
          Furnio
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 text-gray-800">
        <Link href={"/"} className="hover:text-gray-500 transition">
          Home
        </Link>
        <Link href={"../Shop"} className="hover:text-gray-500 transition">
          Shop
        </Link>
        <Link href={"../blog"} className="hover:text-gray-500 transition">
          Blog
        </Link>
        <Link href={"../contact"} className="hover:text-gray-500 transition">
          Contact
        </Link>
      </div>

      {/* Desktop Icons */}
      <div className="hidden sm:flex items-center space-x-4">
        <Link href={"../contact"}>
          <MdPersonOutline className="w-6 h-6 cursor-pointer hover:opacity-80" />
        </Link>
        <Link href={"/Shop"}>
          <CiSearch className="w-6 h-6 cursor-pointer hover:opacity-80" />
        </Link>
        <Link href={"/AsgardSofa"}>
          <GoHeart className="w-6 h-6 cursor-pointer hover:opacity-80" />
        </Link>
        <Link href={"/cart"}>
          <AiOutlineShoppingCart className="w-6 h-6 cursor-pointer hover:opacity-80" />
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center justify-between gap-3">
        <button
          className="text-gray-800 focus:outline-none hover:text-gray-500"
          onClick={toggleMenu}
        >
          <HiOutlineBars3 className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 p-4 z-40">
          <Link href={"/"} className="hover:text-gray-500 transition">
            Home
          </Link>
          <Link href={"../Shop"} className="hover:text-gray-500 transition">
            Shop
          </Link>
          <Link href={"../blog"} className="hover:text-gray-500 transition">
            Blog
          </Link>
          <Link href={"../contact"} className="hover:text-gray-500 transition">
            Contact
          </Link>
          <div className="flex items-center justify-between space-x-4 mt-4">
            <Link href={"../contact"}>
              <MdPersonOutline className="w-6 h-6 cursor-pointer hover:opacity-80" />
            </Link>
            <Link href={"/Shop"}>
              <CiSearch className="w-6 h-6 cursor-pointer hover:opacity-80" />
            </Link>
            <Link href={"/AsgardSofa"}>
              <GoHeart className="w-6 h-6 cursor-pointer hover:opacity-80" />
            </Link>
            <Link href={"/cart"}>
              <AiOutlineShoppingCart className="w-6 h-6 cursor-pointer hover:opacity-80" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
