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
      <div className="flex-col justify-between">
        <div className="p-10 pb-10 w-3/4">
          <a
            href="#"
            className="text-base font-extrabold text-white p-0 text-6xl"
          >
            Some sort of Slogan to represent us
          </a>
          </div>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-navBarBtnBg px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-navBarBtnBgHover"
            >
              Register
            </a>
        </div>
        <img
          className="h-60 py-0 sm:h-64 xl:h-96 2xl:h-96"
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
          alt="..."
        />
      </div>
    </>
  )
}
