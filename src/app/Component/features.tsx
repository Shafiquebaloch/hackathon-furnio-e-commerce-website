import { Trophy, CheckCircle, Truck, Headphones } from 'lucide-react'
export default function FeaturesSection() {
  return (
    <section className="bg-[#FDF8F7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* High Quality */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              High Quality
            </h3>
            <p className="text-gray-500">
              crafted from top materials
            </p>
          </div>

          {/* Warranty Protection */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Warranty Protection
            </h3>
            <p className="text-gray-500">
              Over 2 years
            </p> 
          </div>

          {/* Free Shipping */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <Truck className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Free Shipping
            </h3>
            <p className="text-gray-500">
              Order over 150 $
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <Headphones className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              24 / 7 Support
            </h3>
            <p className="text-gray-500">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

