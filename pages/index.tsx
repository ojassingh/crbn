import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import ProductPreview from '../components/ProductPreview'

export default function Home() {


  // const { data, error } = useSWR('/api/products', fetcher)
  // if (error) return <div>An error occured.</div>
  // if (!data) return <div>Loading ...</div>
  

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
