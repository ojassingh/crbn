import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Navbar from './Navbar'
import { Carousel } from 'flowbite-react'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-between md:justify-right md:space-x-20 bg-navBarBg">
        <div className="flex-col justify-between pl-20">
          <div className="pt-20 pb-10 w-full">
            <p className="text-base font-extrabold text-white p-0 text-6xl">
              Some sort of Slogan to represent us
            </p>
          </div>

          <p className="text-base font-medium text-white pb-10 text-sm">
            Smaller thing over here
          </p>
          <div className="flex justify-between md:justify-right md:space-x-5 bg-navBarBg">
          <input className="h-11 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" 
          placeholder="Enter your email address" />

            <a
              href="#"
              className="inline-flex 
            items-center 
            justify-center 
            whitespace-nowrap 
            rounded-md border 
            border-transparent 
            bg-navBarBtnBg 
            mb-10
            px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-navBarBtnBgHover"
            >
              Subscribe
            </a>
          </div>
          <p className="text-base font-medium text-white pb-20 text-xs">
            Smaller thing over here
          </p>
        </div>
        <img
          className="w-6/12"
          src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="..."
        />
      </div>
    </>
  )
}
