import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import backgroundImg from "../../../Public/Images/background.jpg" // Correct image import path

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Full-size background image */}
      <Image
        src={backgroundImg}
        alt="Modern furniture setting with rattan chair and palm plant"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end">
        <div className="mx-4 max-w-xl bg-[#FDF8F2] bg-opacity-90 p-6 md:mr-16 md:p-12 lg:mr-24 lg:p-16">
          <span className="mb-4 block text-lg font-medium text-center md:text-left">
            New Arrival
          </span>
          <h1 className="mb-6 text-3xl font-bold text-[#B8860B] md:text-4xl lg:text-5xl">
            Discover Our
            <br />
            New Collection
          </h1>
          <p className="mb-8 text-gray-600 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="text-center md:text-left">
            <Link
              href="/Shop"
              className="inline-block bg-[#B8860B] px-8 py-4 text-center font-semibold text-white transition-colors hover:bg-[#986F0B]"
            >
              BUY NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
