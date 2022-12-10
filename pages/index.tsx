import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import ProductPreview from '../components/ProductPreview'
import NavbarLandingPage from '../components/NavbarLandingPage'

export default function Home() {
  return (
    <>
      <NavbarLandingPage />
      <LandingPage />
      <ProductList />
      <br className = "h-10"/>
      <hr className = "mx-20"/>
      <ProductPreview />
    </>
  )
}
