import React from "react";
import Image from "next/image";  // Import next/image
// import "../Style/shop.css";      // Import your CSS

const ShopPage = () => {
  return (
    <div className="shopPage">
      <div className="productContainer">
        <h2 className="productTitle">Our Products</h2>
        
        {/* Replace img with next/image */}
        <div className="productCard">
          <Image
            src="/Images/product1.png"  // Your image source
            alt="Description of product 1"  // Descriptive alt text
            width={300}                   // Set the width for optimization
            height={300}                  // Set the height for optimization
            layout="intrinsic"            // Use intrinsic layout (or use "responsive" as per needs)
          />
          <h3 className="productName">Product Name</h3>
          <p className="productDescription">Product description goes here</p>
        </div>
        
        {/* Another Product Example */}
        <div className="productCard">
          <Image
            src="/Images/product2.png"
            alt="Description of product 2"
            width={300}
            height={300}
            layout="intrinsic"
          />
          {/* <h3 className="productName">Product Name 2</h3>
          <p className="productDescription">Description for product 2</p> */}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
