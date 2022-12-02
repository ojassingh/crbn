
import Navbar from './Navbar'
import ProductList from './ProductList'

export default function StoreFront() {
  return (
    <>
      <Navbar />
      <img 
        className="filter brightness-50 h-storeImg w-full"
        src="https://assets.theoceancleanup.com/app/uploads/2021/08/Large-210823_Oceans_Systems_02_Drone_DL8-scaled.jpg"
      />
      <ProductList />
    </>
  )
}
