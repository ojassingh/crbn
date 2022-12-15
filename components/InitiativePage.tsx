import Navbar from './Navbar'

export default function InitiativePage() { 
 return (
    <div>
        <Navbar/> 
        <div className="flex justify-center pt-40">
            <div className="justify-items-end">
                <img className="rounded-full w-80 h-80 mr-10" src='/planting_a.jpeg' alt='name'/>
            </div>
            <div className="w-100">
                <div className="flex justify-evenly">
                    <p className="font-medium text-black pb-10 text-4xl ml-10 mr-10">Tree Hugger</p>
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
                    Follow
                    </a>
                </div>
                <div className="flex space-x-10">
                    <div className="">
                        <p className="font-medium text-black text-m ml-10 ">Followers</p>
                        <p className="font-medium text-black text-m ml-10">40</p>
                    </div>
                    <div className="">
                     <p className="font-medium text-black text-m ">Day</p>
                     <p className="font-medium text-black text-m ">5</p>
                    </div>
                    <div className="">
                     <p className="font-medium text-black text-m ">Trees Planted</p>
                     <p className="font-medium text-black text-m ">10</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex space-x-10 justify-center pt-20">
            <a href="#">
             <div className="font-light text-2xl text-gray-600 border-t-gray-600 border-t-2 ">
                <p>Posts</p>
             </div >
            </a>
            <a href="#">
             <div className="font-light text-2xl text-gray-600 border-t-gray-600 border-t-2 ">
                <p>Top Merchants</p>
             </div >
            </a>
            <a href="#">
             <div className="font-light text-2xl text-gray-600 border-t-gray-600 border-t-2 ">
                <p>Top Customers</p>
             </div >
            </a>
        </div>
        {/* <div className="container grid grid-cols-3 gap-2 mx-auto">
            <img className="w-full rounded" src='/trees_1.jpeg' alt='name'/>
            <img className="w-full rounded" src='/trees_1.jpeg' alt='name'/>
            <img className="w-full rounded" src='/trees_1.jpeg' alt='name'/>
        </div> */}
        <div className="container grid grid-cols-3 gap-2 mx-auto mt-10 ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/trees_3.jpeg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">New Treest</div>
                <p className="text-gray-700 text-base">Volunteers Plating Trees.</p>
            </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sunflowers</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#volunteers</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
                </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/trees_3.jpeg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">New Trees</div>
                <p className="text-gray-700 text-base">Volunteers Plating Trees.
                </p>
            </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sunflowers</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#volunteers</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
                </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/trees_3.jpeg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">New Trees</div>
                <p className="text-gray-700 text-base">Volunteers Plating Trees.
                </p>
            </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sunflowers</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#volunteers</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
                </div>
        </div>
        </div>
    </div>
    )

}