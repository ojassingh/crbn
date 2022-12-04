
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

export default function StoreFront() {
  return (
    <>
      <Navbar />
      <img 
        className="filter brightness-50 h-storeImg w-full object-cover"
        src="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <ProductList />
    </>
  )
}
