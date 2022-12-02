import Navbar from './Navbar'
import ProductCard from './ProductCard'

export default function ProductList() {
  return (
    <div className="px-20">
      {/* Trending products  */}
      <div className="flex justify-between md:justify-right md:space-x-20">
        <div className="flex justify-between pt-10 pb-5 w-full">
          <p className="font-bold text-black p-0 text-3xl w-1/2">
            Trending products
          </p>
          <a href="#" className="font-bold text-navBarBg p-0 text-lg">
            Shop the collection
          </a>
        </div>
      </div>
      {/* Grid */}
      <div className="space-y-5">
        <div className="flex justify-between">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex justify-between">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
    
  )
}
