// 'use client'

// import Image from 'next/image'
// import { useState } from 'react'

// export default function AsgaardSofaPage() {
//   const [quantity, setQuantity] = useState(1)
//   const [activeTab, setActiveTab] = useState('description')

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Product Image */}
//         <div className="lg:w-1/2">
//           <Image 
//             src="/placeholder.svg" 
//             alt="Asgaard sofa" 
//             width={600} 
//             height={400} 
//             className="w-full h-auto object-cover rounded-lg"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="lg:w-1/2">
//           <h1 className="text-3xl font-bold mb-4">Asgaard sofa</h1>
//           <p className="text-2xl font-semibold mb-4">Rs. 250,000.00</p>
          
//           {/* Reviews */}
//           <div className="flex items-center mb-4">
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
//                   <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
//                 </svg>
//               ))}
//             </div>
//             <span className="ml-2 text-gray-600">5 Customer Review</span>
//           </div>

//           <p className="mb-6 text-gray-600">
//             Setting the bar as one of the loudest speakers in its class, the 
//             Kilburn is a compact, stout-hearted hero with a well-balanced 
//             audio which boasts a clear midrange and extended highs for a 
//             sound.
//           </p>

//           {/* Size Selection */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Size</h3>
//             <div className="flex gap-2">
//               {['L', 'XL', 'XS'].map((size) => (
//                 <button key={size} className="px-4 py-2 border rounded-md hover:bg-gray-100">
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Color Selection */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Color</h3>
//             <div className="flex gap-2">
//               {['bg-red-500', 'bg-blue-500', 'bg-green-500'].map((color) => (
//                 <button key={color} className={`w-8 h-8 rounded-full ${color}`} />
//               ))}
//             </div>
//           </div>

//           {/* Quantity and Add to Cart */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className="flex items-center border rounded-md">
//               <button 
//                 className="px-3 py-2" 
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 aria-label="Decrease quantity"
//               >
//                 -
//               </button>
//               <input 
//                 type="number" 
//                 value={quantity} 
//                 onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
//                 className="w-16 text-center border-none" 
//                 aria-label="Quantity"
//               />
//               <button 
//                 className="px-3 py-2" 
//                 onClick={() => setQuantity(quantity + 1)}
//                 aria-label="Increase quantity"
//               >
//                 +
//               </button>
//             </div>
//             <button className="flex-1 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
//               Add To Cart
//             </button>
//           </div>

//           {/* Product Meta */}
//           <div className="space-y-2 text-sm text-gray-600">
//             <p><span className="font-semibold">SKU:</span> SS001</p>
//             <p><span className="font-semibold">Category:</span> Sofas</p>
//             <p><span className="font-semibold">Tags:</span> Sofa, Chair, Home, Shop</p>
//           </div>
//         </div>
//       </div>

//       {/* Product Tabs */}
//       <div className="mt-12">
//         <div className="flex border-b">
//           {['Description', 'Additional Information', 'Reviews (5)'].map((tab) => (
//             <button
//               key={tab}
//               className={`px-4 py-2 ${activeTab === tab.toLowerCase().split(' ')[0] ? 'border-b-2 border-black' : ''}`}
//               onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//         <div className="mt-4">
//           {activeTab === 'description' && (
//             <div>
//               <p>
//                 Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and 
//                 sound of Marshall, unplugs the chords, and takes the show on the road.
//               </p>
//               <p className="mt-4">
//                 Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest 
//                 speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange 
//                 and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls 
//                 to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
//               </p>
//             </div>
//           )}
//           {activeTab === 'additional' && (
//             <div>
//               <p>Additional information about the product will be displayed here.</p>
//             </div>
//           )}
//           {activeTab === 'reviews' && (
//             <div>
//               <p>Product reviews will be displayed here.</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-6">Related Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[...Array(4)].map((_, index) => (
//             <div key={index} className="border rounded-lg p-4">
//               <Image 
//                 src="/placeholder.svg" 
//                 alt={`Related Product ${index + 1}`} 
//                 width={300} 
//                 height={200} 
//                 className="w-full h-48 object-cover mb-4 rounded-md"
//               />
//               <h3 className="font-semibold mb-2">Related Product {index + 1}</h3>
//               <p className="text-gray-600">Rs. 150,000.00</p>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <button className="px-6 py-2 border rounded-md hover:bg-gray-100">
//             Show More
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

