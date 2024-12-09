
import ShopHeader from '../Component/shop-header'
import ProductFilters from '../Component/filter'
import ProductGrid from '../Component/product-grid'
import Features from '../Component/features'

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      <ShopHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductFilters />
        <ProductGrid />
        <Features />
        
        {/* Product grid would go here */}
      </div>
    </main>
  )
}

