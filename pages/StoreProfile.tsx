import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import ProductPreview from '../components/ProductPreview'
import MyDetailsForm from '../components/MyDetailsForm'
import { useState } from 'react'
import MyImpact from '../components/MyImpact'
import MyOrders from '../components/MyOrders'
import MyInventory from '../components/MyInventory'

export default function StoreProfile() {

  /*
  0 - My details
  1 - My impact
  2 - My orders
  */
  const [page, setPage] = useState(0);
  console.log('page', page);

  return (
    <div className="bg-navBarBg">
      <Navbar />
      <div className="flex z-0 min-h-screen h-auto absolute mt-20 justify-end bg-navBarBg">
        <div className="w-3/12 fixed bg-navBarBg left-0 pl-20 divide-y-2 divide-white pr-7 pt-20 text-white font-bold">
          <a className="flex justify-between py-4 hover:text-lg" onClick={() => setPage(0)}>
            <p>My details</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
          <a className="flex justify-between py-4 hover:text-lg" onClick={() => setPage(1)}>
            <p>My impact</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </a>
          <a className="flex justify-between py-4 hover:text-lg" onClick={() => setPage(2)}>
            <p>My orders</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
          <a className="flex justify-between py-4 hover:text-lg" onClick={() => setPage(3)}>
            <p>My Inventory</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
          <a className="flex justify-between py-4 hover:text-lg" onClick={() => setPage(4)}>
            <p>Store Analytics</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </div>
        <div className="w-9/12 right-0 space-y-10 pl-10 mt-10 ml-96 rounded pr-20 pt-10 bg-white border-black">
          {
            page == 0 ? <MyDetailsForm /> 
            : page == 1 ? <MyImpact />
            : page == 2 ? <MyOrders />
            : <MyInventory />
          }
          
        </div>
      </div>
    </div>
  )
}
