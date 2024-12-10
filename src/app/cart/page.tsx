import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdDelete } from "react-icons/md";
import cover from "../../../Public/Images/shopimg.jpg"
import cartSofa from "../../../Public/Images/cartSofa.png"


const CartPage = () => {
    return (
        <>
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
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Cart
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
          <span className="text-gray-800">Cart</span>
        </nav>
      </div>
    </div>
            <div className="flex flex-col lg:flex-row lg:h-[525px] items-center lg:justify-around">
                <div className="flex flex-col w-full lg:w-auto">
                    <nav className="h-[55px] w-full lg:w-[817px] bg-[#F9F1E7] flex items-center justify-around list-none text-sm lg:text-base">
                        <li>Product</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Subtotal</li>
                    </nav>
                    <div className="mt-6 lg:mt-14 flex items-center justify-around flex-wrap gap-4">
                        <Image
                            src={cartSofa}
                            alt="sofas"
                            width={108}
                            height={105}
                            className="w-[72px] lg:w-[108px] h-auto"
                        />
                        <span className="text-sm lg:text-base">Asgaard sofa</span>
                        <span className="text-sm lg:text-base">Rs. 250,000.00</span>
                        <div className="h-[32px] w-[32px] rounded-md border border-black flex items-center justify-center">
                            1
                        </div>
                        <span className="text-sm lg:text-base">Rs. 250,000.00</span>
                     <MdDelete className="cursor-pointer font-bold text-2xl" />
                    </div>
                </div>
                <div className="bg-[#F9F1E7] w-full lg:w-[393px] h-auto lg:h-[390px] mt-8 lg:mt-0 p-6 rounded-lg flex flex-col items-center justify-center">
                    <h1 className="text-center text-[24px] lg:text-[32px] font-semibold mb-6">
                        Cart Totals
                    </h1>
                    <div className="flex items-center justify-between mb-4 w-full px-4 lg:px-0">
                        <h3 className="text-sm lg:text-base">Subtotal</h3>
                        <span className="text-sm lg:text-base">Rs. 250,000.00</span>
                    </div>
                    <div className="flex items-center justify-between mb-6 w-full px-4 lg:px-0">
                        <h3 className="text-sm lg:text-base">Total</h3>
                        <span className="text-sm lg:text-base text-[#B88E2F]">Rs. 250,000.00</span>
                    </div>
                    <Link href={"/checkout"}>
                        <button className="border border-black w-full lg:w-[222px] h-[48px] lg:h-[58.95px] rounded-2xl text-[18px] lg:text-[20px]">
                            Check Out
                        </button>
                    </Link>
                </div>

            </div>

        </>

    )
}

export default CartPage