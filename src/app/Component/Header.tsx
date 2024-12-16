"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../Public/Images/header.png";
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
      <div className="flex items-center space-x-4">
        <Image
          src={logo}
          alt="logo"
          width={160}
          height={40}
          className="w-20 h-auto ml-4"
        />
        <div className="text-[34px] font-montserrat font-bold text-black">Furnio</div>
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
      {/* <div className="hidden sm:flex items-center space-x-4"> */}
      <div className="hidden sm:flex items-center space-x-4">
            {/* <div className="w-6 h-6 cursor-pointer hover:opacity-80"> */}
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

          {/* Mobile Icons */}
          <div className="flex items-center justify-between space-x-4 mt-4">
            {/* <div className="w-6 h-6 cursor-pointer hover:opacity-80"> */}
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
