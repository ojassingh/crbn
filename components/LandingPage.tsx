import Navbar from './Navbar'

export default function LandingPage() {
  return (
    <>
      <div className="flex justify-between md:justify-right md:space-x-20 bg-navBarBg">
        <div className="flex-col justify-between pl-20">
          <div className="pt-20 pb-10 w-full">
            <p className="font-extrabold text-white p-0 text-6xl">
              Fight climate change with online shopping
            </p>
          </div>

          <p className="font-medium text-white pb-10 text-sm">
            Buy from small businesses that care about the environment
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
          <p className="font-medium text-white pb-20 text-xs">
            Subscribe to our newsletter
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
