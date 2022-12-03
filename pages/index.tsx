import LandingPage from './LandingPage'
import Navbar from './Navbar'
import ProductList from './ProductList'
import ProductPreview from './ProductPreview'
import StoreFront from './StoreFront'

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <ProductList />
      <br className = "h-10"/>
      <hr className = "mx-20"/>
      <ProductPreview />
    </>
  )
}
