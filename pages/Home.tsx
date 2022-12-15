import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import ProductPreview from '../components/ProductPreview'
import NavbarLandingPage from '../components/NavbarLandingPage'
import InitiativeCard from '../components/InitiativeCard'
import InitiativeList from '../components/InitiativeList'
import ImpactDonut from '../components/ImpactDonut'

export default function Home() {
  const initiatives = [
    {
      img: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Ocean cleaners',
    },
    {
      img: 'https://images.pexels.com/photos/2154617/pexels-photo-2154617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Tree huggers',
    },
    {
      img: 'https://www.realsimple.com/thmb/Chym1xbfD2FjCS_AC00ASX-HQgA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/full-recycle-bin-ea6d101e3d4b4204a6f4f85d8c6e5821.jpg',
      name: 'Recycle Initiative',
    },
  ]
  const discoverInitiatives = [
    {
      img: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Ocean Cleaners',
    },
    {
      img: 'https://images.pexels.com/photos/2154617/pexels-photo-2154617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Tree Huggers',
    },
    {
      img: 'https://assets.justenergy.com/wp-content/uploads/2018/10/Solar-1.jpg',
      name: 'Solar Energy Initiative',
    },
    {
      img: 'https://www.realsimple.com/thmb/Chym1xbfD2FjCS_AC00ASX-HQgA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/full-recycle-bin-ea6d101e3d4b4204a6f4f85d8c6e5821.jpg',
      name: 'Recycle Initiative',
    },
    {
      img: 'https://assets.taraenergy.com/wp-content/uploads/2020/11/forms-of-wind-energy-pros-and-cons-image.jpg',
      name: 'Wind Energy Initiative',
    },
  ]
  const productsYouMayLike = [
    {
      img: 'https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg',
      name: 'Machine pen',
    },
    {
      img: 'https://media.gq.com/photos/602ea742937235d39fc1315b/master/w_1280%2Cc_limit/sunspel.jpg',
      name: 'Black tee',
    },
    {
      img: 'https://assets.vogue.com/photos/614e504d3afc7a42777a777a/1:1/w_1013,h_1013,c_limit/slide_18.jpg',
      name: 'Sweater',
    },
    {
      img: 'https://media.gq.com/photos/61575c525e63efb20d02ddc8/master/w_1280%2Cc_limit/Red-Kap-lapel-counter-coat.jpg',
      name: 'Coat',
    },
  ]

  const stats = {
    recycle: {
      color: 'rgb(200 30 30)',
      value: 64,
      width: 70,
    },
    emissions: {
      color: 'rgb(26 86 219)',
      value: 43,
      width: 70,
    },
    social: {
      color: 'rgb(4 108 78)',
      value: 23,
      width: 70,
    }
  }

  return (
    <>
      <Navbar />
      <br className="h-32" />
      <hr className="mx-20 " />
      <img className='w-screen object-cover h-storeImg' src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <div className="flex justify-between px-20 py-10 my-10 text-navBarBg font-extrabold">
        <div>
          <p className="text-4xl pt-20">Welcome back Maaneth,</p>
          <p className="text-xl pt-5">Your impact</p>
        </div>
        <div className="flex space-x-10">
          <div className="h-48 text-center">
            <ImpactDonut impact={stats.recycle} />
            <p className="text-lg text-red-700 py-5">Recyclability</p>
          </div>
          <div className="h-48 text-center">
            <ImpactDonut impact={stats.emissions} />
            <p className="text-lg text-blue-700 py-5">Emissions</p>
          </div>
          <div className="h-48 text-center">
            <ImpactDonut impact={stats.social} />
            <p className="text-lg text-green-700 py-5">Social Equity</p>
          </div>
        </div>
      </div>

      <div className="flex mx-20 pb-5 justify-between md:justify-right md:space-x-20">
        <div className="flex justify-between pt-10 pb-5 w-full">
          <p className="font-bold text-black p-0 text-3xl w-1/2">
            My initiatives
          </p>
        </div>
      </div>
      <InitiativeList initiatives={initiatives} />

      <div className="flex mx-20 py-5 justify-between md:justify-right md:space-x-20">
        <div className="flex justify-between pt-10 pb-5 w-full">
          <p className="font-bold text-black p-0 text-3xl w-1/2">
            Products you may like
          </p>
          <a href="#" className="font-bold text-navBarBg p-0 text-lg">
            See more
          </a>
        </div>
      </div>
      <ProductList products={productsYouMayLike} />

      <div className="flex mx-20 py-5 justify-between md:justify-right md:space-x-20">
        <div className="flex justify-between pt-10 pb-5 w-full">
          <p className="font-bold text-black p-0 text-3xl w-1/2">
            Discover new initiatives
          </p>
          <a href="#" className="font-bold text-navBarBg p-0 text-lg">
            See more
          </a>
        </div>
      </div>
      <InitiativeList initiatives={discoverInitiatives} />
      <div className="flex mx-20 py-5 justify-between md:justify-right md:space-x-20">
        <div className="flex justify-between pt-10 pb-5 w-full">
          <p className="font-bold text-black p-0 text-3xl w-1/2">
            Trending products
          </p>
          <a href="#" className="font-bold text-navBarBg p-0 text-lg">
            See more
          </a>
        </div>
      </div>
      <ProductList products={productsYouMayLike} />
    </>
  )
}
