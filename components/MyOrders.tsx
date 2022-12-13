export default function MyOrders() {
  return (
    <div className="w-full space-y-5">
      <p className="font-bold text-3xl w-[65vw]">My Impact</p>
      <hr />
      <p className="font-bold text-xl">Forestry</p>
      <div className="flex justify-between">
        <div className="w-full space-y-5">
          <p className="font-bold">First Name</p>
          <textarea
            id="about"
            name="about"
            rows={1}
            className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Last Name"
          />
          <p className="font-bold">Last Name</p>
          <textarea
            id="about"
            name="about"
            rows={1}
            className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="First name"
          />
          <p className="font-bold">Birth Date</p>
          <textarea
            id="about"
            name="about"
            rows={1}
            className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="First name"
          />
        </div>
        <div className="w-1/3">
          <p className="object-cover w-full p-10 rounded-full font-bold text-center">Edit photo</p>
        </div>
      </div>
      <div className="space-y-5 pb-10">
        <hr />
      </div>
    </div>
  )
}
