import { Checkbox } from 'flowbite-react'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import ProductPreview from '../components/ProductPreview'
import StoreFront from './StoreFront'
import { useState } from 'react'

export default function CreateAccount() {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');

  function clickHandler(){
    
  }

  return (
    <>
      <div className="flex h-full">
        <div className="w-1/2 h-screen">
          <div className="px-20 py-10 space-y-5">
            <a href="#" className="whitespace-nowrap text-5xl font-mono font-bold text-black hover:text-gray-900">
                  CRBN</a>
            <p className="text-3xl font-bold pt-5">Create an Account</p>
              <div className="text-gray-600 space-y-5 font-semibold">
              <p>First Name</p>
              <textarea
                value={name}
                onChange={(e)=>{
                  setName(e.target.value)
                }}
                id="about"
                name="about"
                rows={1}
                className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
              <p>Last Name</p>
              <textarea
                value={lastName}
                onChange={(e)=>{
                  setLastName(e.target.value)
                }}
                id="about"
                name="about"
                rows={1}
                className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
              <p>Email Address</p>
              <textarea
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                id="about"
                name="about"
                rows={1}
                className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
              <p>Password</p>
              <input
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
                id="password"
                name="about"
                type='password'
                className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="********"
              />
              {password!=confirmPassword && <p className='text-red-500 text-sm'>Passwords don't match!</p>}
              <p>Confirm Password</p>
              <input
                value={confirmPassword}
                onChange={(e)=>{
                  setConfirm(e.target.value)
                }}
                id="confirmpassword"
                name="about"
                type="password"
                className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="********"
              />
              </div>
              <button
                onClick={clickHandler}
                className="flex md:w-full my-10 first-line:items-center justify-center rounded-md border border-transparent bg-navBarBg px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign in
              </button>
            </div>
        </div>
        <div className="w-1/2 h-screen fixed right-0">
          <img
            className="h-full w-full"
            src="https://images.pexels.com/photos/1366907/pexels-photo-1366907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="..."
          />
        </div>
      </div>
    </>
  )
}
