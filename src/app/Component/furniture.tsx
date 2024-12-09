// import Image from 'next/image'

// export default function SocialGallery() {
//   const galleryImages = [
//     { src: '/Images/product1.png', alt: 'Modern bookshelf with plants and decorative items', className: 'col-span-1 row-span-2' },
//     { src: '/Images/product2.png', alt: 'Minimalist desk setup', className: 'col-span-2' },
//     { src: '/Images/product3.png', alt: 'Wooden stools with flowers', className: 'col-span-2' },
//     { src: '/Images/product4.jpg', alt: 'Vintage leather armchair', className: 'col-span-1 row-span-2' },
//     { src: '/Images/product5.png', alt: 'Modern dining area', className: 'col-span-2 row-span-2' },
//     { src: '/Images/product6.png', alt: 'Contemporary bedroom setup', className: 'col-span-2 row-span-2' },
//     { src: '/Images/product7.jpg', alt: 'Rustic dining setup', className: 'col-span-2 row-span-2' },
//     { src: '/Images/product8.jpeg', alt: 'Minimalist wall decor', className: 'col-span-1' },
//     { src: '/Images/product6.jpg', alt: 'Kitchen wall with pattern', className: 'col-span-1' },
//     { src: '/Images/product2.png', alt: 'Minimalist desk setup', className: 'col-span-2' },
//     { src: '/Images/product1.png', alt: 'Minimalist desk setup', className: 'col-span-2' },
//   ];

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-full mx-auto"> {/* Ensured the container takes full width */}
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-gray-400 text-2xl sm:text-3xl mb-2">Share your setup with</h2>
//           <p className="text-gray-500 text-3xl sm:text-4xl font-semibold">#FuniroFurniture</p>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 auto-rows-[200px]">
//           {galleryImages.map((image, index) => (
//             <div
//               key={index}
//               className={`relative overflow-hidden group ${image.className}`}
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={image.className.includes('col-span-2') ? 450 : 300}
//                 height={image.className.includes('row-span-2') ? 450 : 300}
//                 className="object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
