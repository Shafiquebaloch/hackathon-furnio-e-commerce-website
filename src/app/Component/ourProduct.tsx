import React from 'react'
import Image from 'next/image'
import product1 from "../../../Public/Images/product1.png"
import "../Style/product.css"

const ourProduct = () => {
  return (
    
      <div className="absolute w-[1236px] h-[1084px] left-[calc(50%-1236px/2)] top-[1610px] bg-black">
     <div className="absolute w-[269px] h-[48px] left-[488px] top-[0px] text-center text-[#3A3A3A] font-poppins font-bold text-[40px] leading-[120%]">
  Our products
</div>

<div className="absolute flex flex-row items-center gap-[32px] p-0 w-[1236px] h-[446px] top-[200px] bg-pink-500">
<div className="w-[285px] h-[446px] flex-none order-0 flex-grow-0 bg-red-300">
<div className="first-img">
<div className="imageDiv">
  <Image src={product1} alt='product1' className='w-[220px] h-80px] ml-0 '/>
</div>

</div>
<div className="last">
<div className="absolute left-[0%] right-[0%] top-[0%] bottom-[0] bg-red-400">
<div className="absolute flex left-[5.61%] right-[45.96%] top-[7.08%] bottom-[15.25%] bg-black">
  {/* <!-- Product name content --> */}
  <div className="absolute left-[2.61%] right-[51.23%] top-[3.08%] bottom-[22.42%] 
             font-poppins font-semibold text-[24px] leading-[120%] text-[#3A3A3A]">
  Syltherine
</div>
<div className="absolute left-[5.61%] right-[45.96%] top-[79.37%] bottom-[15.25%] text-gray-500 font-medium text-[16px] leading-[24px]">
Stylish cafe chair
</div>


</div>

</div>

</div>


</div>
<div className="w-[285px] h-[446px] flex-none order-0 flex-grow-0 bg-blue-300">
  
</div>
<div className="w-[285px] h-[446px] flex-none order-0 flex-grow-0 bg-purple-300">
  
</div>
<div className="w-[285px] h-[446px] flex-none order-0 flex-grow-0 bg-yellow-300">
  
</div>

</div>


</div>

    
  )
}

export default ourProduct
