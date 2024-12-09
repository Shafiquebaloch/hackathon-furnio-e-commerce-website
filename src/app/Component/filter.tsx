import { LayoutGrid, SlidersHorizontal } from 'lucide-react'

export default function ProductFilters() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 py-4 bg-[#FDF8F7] rounded-lg mb-8">
      {/* Left Section */}
      <div className="flex items-center gap-8">
        <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-sm font-medium">Filter</span>
        </button>
        <button className="flex items-center text-gray-700 hover:text-gray-900">
          <LayoutGrid className="w-4 h-4" />
        </button>
      </div>

      {/* Center Section */}
      <div className="text-sm text-gray-600">
        Showing 1-16 of 32 results
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <label htmlFor="show" className="text-sm text-gray-600">
            Show
          </label>
          <select
            id="show"
            className="bg-white border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:border-gray-300"
            defaultValue="16"
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-gray-600">
            Short by
          </label>
          <select
            id="sort"
            className="bg-white border border-gray-200 rounded px-2 py-1 text-sm min-w-[100px] focus:outline-none focus:border-gray-300"
            defaultValue="default"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  )
}

