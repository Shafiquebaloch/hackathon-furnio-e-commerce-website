import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import shopping from "../../../Public/Images/shopimg.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import { Trophy, CheckCircle, Truck, Headphones } from 'lucide-react'


const ContactPage = () => {
    return (
        <>
      <div className="relative w-full h-[300px] flex flex-col items-center justify-center mb-6">
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
          Contact
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
          <span className="text-gray-800">Contact</span>
        </nav>
      </div>
    </div>
            <div className="flex flex-col items-center justify-center mt-10 px-4 lg:mt-20">
                <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold text-center">
                    Get In Touch With Us
                </h1>
                <p className="text-[14px] sm:text-[16px] text-[#9F9F9F] mt-4 text-center max-w-[90%] lg:max-w-[644px]">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
                    Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between mt-12 px-4 lg:px-16 gap-10">
                <div className="flex flex-col gap-8 lg:w-1/2">
                    {[
                        {
                            
                            icon:<FaLocationDot />,

                            title: "Address",
                            desc: "236 5th SE Avenue, New York NY10000, United States",
                        },
                        {
                           icon: <FaPhoneAlt />,
                            title: "Phone",
                            desc: "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789",
                        },
                        {
                            icon:<IoMdClock />,
                            title: "Working Time",
                            desc: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00",
                        },
                    ].map((info, index) => (
                        <div key={index} className="flex items-start gap-4">
                          {info.icon} {/* Render the icon here */}
                          <div>
                            <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">{info.title}</h2>
                            <p className="text-[14px] sm:text-[16px] text-gray-700 whitespace-pre-line">
                              {info.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                

                <div className="flex flex-col lg:w-1/2 gap-6">
                    {[
                        { label: "Your Name", placeholder: "Enter your name" },
                        { label: "Email Address", placeholder: "Enter your email" },
                        { label: "Subject", placeholder: "Enter subject (optional)" },
                        { label: "Message", placeholder: "Enter your message" },
                    ].map((field, index) => (
                        <div key={index} className="flex flex-col">
                            <label className="text-[16px] font-semibold mb-2">{field.label}</label>
                            <input
                                type="text"
                                placeholder={field.placeholder}
                                className="border border-gray-300 rounded-md px-4 py-3 w-full text-[14px] focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
                            />
                        </div>
                    ))}
                    <button className="w-full lg:w-[237px] h-[55px] bg-[#B88E2F] text-white rounded-md mt-4 flex items-center justify-center text-[16px] font-semibold">
                        Submit
                    </button>
                </div>
            </div>





        <section className="bg-[#FDF8F7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          

          {/* High Quality */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              High Quality
            </h3>
            <p className="text-gray-500">
              crafted from top materials
            </p>
          </div>



          {/* Warranty Protection */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Warranty Protection
            </h3>
            <p className="text-gray-500">
              Over 2 years
            </p>
          </div>




          {/* Free Shipping */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <Truck className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Free Shipping
            </h3>
            <p className="text-gray-500">
              Order over 150 $
            </p>
          </div>



          {/* 24/7 Support */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
             <Headphones className="w-8 h-8 text-gray-800"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              24 / 7 Support
            </h3>
            <p className="text-gray-500">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </section>
            

        </>
    );
};

export default ContactPage;
