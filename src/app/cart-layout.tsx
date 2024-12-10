// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Furniro - Furniture Store',
//   description: 'Quality furniture for your home',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <header className="bg-white shadow-sm">
//           <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//             <div className="text-2xl font-bold">Furniro</div>
//             <nav>
//               <ul className="flex space-x-4">
//                 <li><a href="/" className="hover:text-gray-600">Home</a></li>
//                 <li><a href="/shop" className="hover:text-gray-600">Shop</a></li>
//                 <li><a href="/blog" className="hover:text-gray-600">Blog</a></li>
//                 <li><a href="/contact" className="hover:text-gray-600">Contact</a></li>
//               </ul>
//             </nav>
//           </div>
//         </header>
//         <main>{children}</main>
//         <footer className="bg-gray-100 mt-12">
//           <div className="container mx-auto px-4 py-8">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//               <div>
//                 <h3 className="font-bold mb-4">Funiro.</h3>
//                 <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold mb-4">Links</h4>
//                 <ul className="space-y-2">
//                   <li><a href="/" className="hover:text-gray-600">Home</a></li>
//                   <li><a href="/shop" className="hover:text-gray-600">Shop</a></li>
//                   <li><a href="/about" className="hover:text-gray-600">About</a></li>
//                   <li><a href="/contact" className="hover:text-gray-600">Contact</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold mb-4">Help</h4>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="hover:text-gray-600">Payment Options</a></li>
//                   <li><a href="#" className="hover:text-gray-600">Returns</a></li>
//                   <li><a href="#" className="hover:text-gray-600">Privacy Policies</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold mb-4">Newsletter</h4>
//                 <form className="flex">
//                   <input 
//                     type="email" 
//                     placeholder="Enter Your Email Address" 
//                     className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-200" 
//                   />
//                   <button 
//                     type="submit" 
//                     className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700"
//                   >
//                     SUBSCRIBE
//                   </button>
//                 </form>
//               </div>
//             </div>
//             <div className="mt-8 text-center text-gray-600">
//               2023 furino. All rights reserved
//             </div>
//           </div>
//         </footer>
//       </body>
//     </html>
//   )
// }

