import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import ProductPreview from '../components/ProductPreview'
import useSWR from 'swr'
import axios from 'axios'
import StoreFront from './StoreFront'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function Home() {

  const { data, error } = useSWR('/api/posts', fetcher)
  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading ...</div>

  console.log(data)

  
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
