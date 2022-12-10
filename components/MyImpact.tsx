export default function MyImpact() {
  return (
    <>
      <p className="font-bold text-3xl">My Impact</p>
      <hr />
      <p className="font-bold text-xl">Forestry</p>
      <div className="flex">
        <div className="w-2/3 space-y-5">
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
          <img
            className="object-cover w-full p-10 rounded-full"
            src="https://images.pexels.com/photos/9969430/pexels-photo-9969430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <p className="font-bold text-center">Edit photo</p>
        </div>
      </div>
      <div className="space-y-5 pb-10">
        <hr />
        <p className="font-bold text-xl">Contact Information</p>
        <p className="font-bold">Phone Number</p>
        <textarea
          id="about"
          name="about"
          rows={1}
          className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="First name"
        />
        <p className="font-bold">Phone Number</p>
        <textarea
          id="about"
          name="about"
          rows={1}
          className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="First name"
        />
        <p className="font-bold">Phone Number</p>
        <textarea
          id="about"
          name="about"
          rows={1}
          className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="First name"
        />
      </div>
    </>
  )
}
