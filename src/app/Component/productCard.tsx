'use client'

import Image from 'next/image'
import { Heart, Share2, BarChart2 } from 'lucide-react'
import { useState } from 'react'
import { StaticImageData } from 'next/image'  // Import StaticImageData from Next.js

interface ProductCardProps {
  name: string
  category: string
  price: number
  originalPrice?: number
  image: StaticImageData  // Change the type to StaticImageData
  discount?: number
  isNew?: boolean
}

export default function ProductCard({
  name,
  category,
  price,
  originalPrice,
  image,
  discount,
  isNew
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const formatPrice = (amount: number) => {
    return `Rp ${amount.toLocaleString()}`
  }

  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square">
        <Image
          src={image}  // This now accepts StaticImageData
          alt={name}
          fill
          className="object-cover"
        />
        
        {/* Discount or New Badge */}
        {discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white rounded-full px-2 py-1 text-sm">
            -{discount}%
          </div>
        )}
        {isNew && (
          <div className="absolute top-4 right-4 bg-teal-500 text-white rounded-full px-2 py-1 text-sm">
            New
          </div>
        )}

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="w-3/4 bg-white text-gray-800 py-2 rounded hover:bg-gray-100 transition-colors">
            Add to cart
          </button>
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-gray-200 flex items-center gap-1">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="text-white hover:text-gray-200 flex items-center gap-1">
              <BarChart2 className="w-4 h-4" />
              Compare
            </button>
            <button className="text-white hover:text-gray-200 flex items-center gap-1">
              <Heart className="w-4 h-4" />
              Like
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{category}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
