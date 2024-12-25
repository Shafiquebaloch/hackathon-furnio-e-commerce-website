import Link from 'next/link'
import Image from 'next/image'
import shopping from "../../../Public/Images/shopimg.jpg"

export default function ShopHeader() {
  return (
    <div className="relative w-full h-[300px] flex flex-col items-center justify-center mb-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={shopping}  
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
          Shop
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
          <span className="text-gray-800">Shop</span>
        </nav>
      </div>
    </div>
  )
}
