// import React from "react";
// import Image, { StaticImageData } from "next/image";  // Import StaticImageData from Next.js
// // import "../Style/product.css";
// import product1 from "../../../Public/Images/product1.png";
// import product2 from "../../../Public/Images/product2.png";
// import product3 from "../../../Public/Images/product3.png";
// import product4 from "../../../Public/Images/product4.jpg";
// import product5 from "../../../Public/Images/product5.png";
// import product6 from "../../../Public/Images/product6.png";
// import product7 from "../../../Public/Images/product7.jpg";
// import product8 from "../../../Public/Images/product8.jpeg";

// // Update the Card interface to accept StaticImageData for the image field
// interface Card {
//   name: string;
//   age: number;
//   description: string;
//   image: StaticImageData;  // Updated to StaticImageData
//   price: string;
// }

// const data: Card[] = [
//   {
//     name: "Syltherine",
//     price: "Rp 2.500.000",
//     age: 30,
//     image: product1,  // Directly use the imported product image
//     description: "Stylish cafe chair",
//   },
//   {
//     name: "Jane Smith",
//     price: "Rp 2.500.000",
//     age: 25,
//     image: product2,
//     description: "A creative designer who loves creating stunning visuals.",
//   },
//   {
//     name: "Sam Wilson",
//     price: "Rp 2.500.000",
//     age: 28,
//     image: product3,
//     description: "A software engineer specializing in backend systems.",
//   },
//   {
//     name: "Sam Wilson",
//     price: "Rp 2.500.000",
//     age: 28,
//     image: product4,
//     description: "A software engineer specializing in backend systems.",
//   },
//   {
//     name: "Sam Wilson",
//     price: "Rp 2.500.000",
//     age: 28,
//     image: product5,
//     description: "A software engineer specializing in backend systems.",
//   },
//   {
//     name: "Sam Wilson",
//     price: "Rp 2.500.000",
//     age: 28,
//     image: product6,
//     description: "A software engineer specializing in backend systems.",
//   },
//   {
//     name: "Sam Wilson",
//     price: "Rp 2.500.000",
//     age: 28,
//     image: product7,
//     description: "A software engineer specializing in backend systems.",
//   },
//   {
//     name: "Sam Wilson",
//     price: "Rp 2.500.000",
//     age: 28,
//     image: product8,
//     description: "A software engineer specializing in backend systems.",
//   },
// ];

// const Products: React.FC = () => {
//   return (
//     <div className="productTitle">
//       <div className="product">
//         <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
//       </div>
//       <div className="cardsContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {data.map((card, index) => (
//           <div className="card bg-white shadow-md rounded-lg" key={index} style={{ width: "15rem" }}>
//             <Image
//               src={card.image}  // This will be a StaticImageData object
//               alt={card.name}  // Use the product name as alt text
//               width={250}  // Define the width for optimization
//               height={200}  // Adjusted height for all images to 200px
//               className="card-img-top object-cover rounded-t-lg"  // Tailwind class for image styling
//             />
//             <div className="card-body p-4">
//               <h5 className="card-title text-lg font-bold">{card.name}</h5>
//               <p className="card-text text-gray-500">{card.description}</p>
//               <h5 className="card-title text-lg font-bold text-[#B88E2F]">{card.price}</h5>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center justify-center mb-12">
//         <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F] rounded-lg">
//           Show More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Products;

