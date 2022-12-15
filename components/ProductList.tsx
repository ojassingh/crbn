import Navbar from './Navbar'
import ProductCard from './ProductCard'

export default function ProductList(props: any) {
  const data = props.products

  return (
    <div className="px-20">
      {/* Trending products  */}

      {/* Grid */}
      <div className="space-y-5">
        <div className="flex justify-between">
          {data.map((d:any) => {
            return <ProductCard img={d.img} name={d.name} />
          })}
        </div>
      </div>
    </div>
  )
}
