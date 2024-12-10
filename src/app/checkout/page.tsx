import React from 'react'
import Image from 'next/image'
import cover from "../../../Public/Images/shopimg.jpg"
import Link from 'next/link'

const CheckOutPage = () => {
    return (
        <>
          <div className="relative w-full h-[400px] flex flex-col items-center justify-center mb-6">
      
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
          Check out
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
          <span className="text-gray-800">check out</span>
        </nav>
      </div>
    </div>
            <div className="container mx-auto px-4 lg:px-12 mt-16">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                    {/* Left Side: Billing Form */}
                    <div className="container mx-auto px-4 lg:px-12 mt-16">
  <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
    {/* Left Side: Billing Form */}
    <div className="w-full lg:w-[60%]">
      <h1 className="text-[36px] font-semibold mb-5">Billing details</h1>
      
      
      <div className="flex flex-wrap items-center justify-start gap-6">
      <div className="flex items-center justify-between gap-6">
  <div className="w-full sm:w-auto">
    <label htmlFor="first-name" className="block text-lg font-medium">
      First Name
    </label>
    <input
      id="first-name"
      type="text"
      className="w-full sm:w-[211px] h-[75px] border border-black rounded-md mt-2"
    />
  </div>
  <div className="w-full sm:w-auto">
    <label htmlFor="last-name" className="block text-lg font-medium">
      Last Name
    </label>
    <input
      id="last-name"
      type="text"
      className="w-full sm:w-[211px] h-[75px] border border-black rounded-md mt-2"
    />
  </div>
</div>

      </div>

    
      <div className="mt-4">
        <label htmlFor="company-name" className="block text-lg font-medium">
          Company Name (Optional)
        </label>
        <input
          id="company-name"
          type="text"
          className="w-full lg:w-[453px] h-[75px] border border-black rounded-md mt-2"
        />
      </div>

      {/* Country/Region */}
      <div className="mt-4 relative">
        <label htmlFor="country" className="block text-lg font-medium">
          Country / Region
        </label>
        <input
          id="country"
          type="text"
          className="w-full lg:w-[453px] h-[75px] border border-black rounded-md pl-4 pr-10 mt-2"
        />
       <div className="relative w-full lg:w-[453px]">
      <label htmlFor="country" className="block text-lg font-medium">
       Select Country
      </label>
     <select
    id="country"
    className="w-full h-[75px] border border-black rounded-md pl-4 pr-10 mt-2"
  >
      <option value="">Select a country</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
      <option value="aus">Australia</option>
  </select>
</div>

      </div>

    
      <div className="mt-4">
        <label htmlFor="street-address" className="block text-lg font-medium">
          Street address
        </label>
        <input
          id="street-address"
          type="text"
          className="w-full lg:w-[453px] h-[75px] border border-black rounded-md mt-2"
        />
      </div>

     
      <div className="mt-4">
        <label htmlFor="city" className="block text-lg font-medium">
          Town / City
        </label>
        <input
          id="city"
          type="text"
          className="w-full lg:w-[453px] h-[75px] border border-black rounded-md mt-2"
        />
      </div>

     
      <div className="mt-4 relative">
      <label htmlFor="country" className="block text-lg font-medium">
          Country / Region
        </label>
        <input
          id="country"
          type="text"
          className="w-full lg:w-[453px] h-[75px] border border-black rounded-md pl-4 pr-10 mt-2"
        />
       <div className="relative w-full lg:w-[453px]">
      <label htmlFor="country" className="block text-lg font-medium">
       Select provice
      </label>
     <select
    id="province"
    className="w-full h-[75px] border border-black rounded-md pl-4 pr-10 mt-2"
  >
      <option value="">Western province</option>
      <option value="us">California</option>
      <option value="ca">Ontario</option>
      <option value="uk">England</option>
      <option value="aus">New South Wales</option>
  </select>
</div>
      </div>

      
      <div className="mt-4">
        <label htmlFor="zip" className="block text-lg font-medium">
          ZIP code
        </label>
        <input
          id="zip"
          type="text"
          className="w-full lg:w-[453px] h-[75px] border border-black rounded-md mt-2"
        />
      </div>

      {/* Phone */}
      <div className="mt-4">
        <label htmlFor="phone" className="block text-lg font-medium">
          Phone
        </label>
        <input
          id="phone"
          type="text"
          className="w-full lg:w-[453px] h-[75px] border border-black rounded-md mt-2"
        />
      </div>

      {/* Email */}
      <div className="mt-4">
        <label htmlFor="email" className="block text-lg font-medium">
          Email address
        </label>
        <input
          id="email"
          type="text"
          className="w-full lg:w-[453px] h-[75px] border border-black rounded-md mt-2"
        />
      </div>

      {/* Additional Information */}
      <div className="mt-4">
        <label htmlFor="additional-info" className="block text-lg font-medium">
          Additional information
        </label>
        <input
          id="additional-info"
          placeholder="Additional information"
          type="text"
          className="w-full lg:w-[453px] h-[75px] border border-black rounded-md text-[#9F9F9F] pl-4 mt-2"
        />
      </div>
    </div>
  </div>
</div>


 {/* Right Side: Order Summary */}
                    <div className="w-full lg:w-[35%]">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-[24px] font-semibold">Product</h2>
                                <p className="text-[#9F9F9F]">Asgaard sofa <span className="text-black">X 1</span></p>
                                <span className="font-semibold">Subtotal</span>
                                <span className="font-semibold">Total</span>
                            </div>
                            <div className="flex flex-col gap-3 text-right">
                                <h2 className="text-[24px] font-semibold">Subtotal</h2>
                                <span>Rs. 250,000.00</span>
                                <span>Rs. 250,000.00</span>
                                <span className="text-[#B88E2F] text-[24px] font-semibold">Rs. 250,000.00</span>
                            </div>
                        </div>
                        <div className="border-b border-[#D9D9D9] w-full mt-6"></div>
                        <div className="mt-8">
                            <div className="flex items-center gap-3">
                                <div className="bg-black rounded-full w-[14px] h-[14px]"></div>
                                <h1 className="text-[20px] font-semibold">Direct Bank Transfer</h1>
                            </div>
                            <p className="text-[#9F9F9F] mt-2">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                            <div className="flex items-center gap-3 mt-6">
                                <div className="border border-[#9F9F9F] rounded-full w-[14px] h-[14px]"></div>
                                <h1 className="text-[18px] font-semibold text-[#9F9F9F]">Cash On Delivery</h1>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button className="w-full lg:w-[318px] h-[64px] border border-black rounded-2xl">Place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOutPage