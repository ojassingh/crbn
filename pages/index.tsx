import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import ProductPreview from '../components/ProductPreview'
import StoreFront from '../components/StoreFront'

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