import { F } from 'chart.js/dist/chunks/helpers.core'
import { useEffect, useState } from 'react'

export default function MyDetailsForm(this: any) {
  const [editPI, setEditPI] = useState(false)
  const firstName = 'Maaneth'
  const lastName = 'De Silva'
  const birthDate = 'December 25, 2002'

  const [editCI, setEditCI] = useState(false)
  const phoneNumber = '+1(647)111-1111'
  const email = 'maaneth@gmail.com'
  const address = '123 Sesame street'
  
  return (
    <>
      <p className="font-bold text-3xl">My details</p>
      <hr />
      <div className="flex space-x-3">
        <p className="font-bold text-xl">Personal Information</p>
        {!editPI && (
          <a
            className="text-xl text-gray-400 hover:text-gray-600"
            onClick={() => {
              setEditPI(!editPI)
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </a>
        )}
      </div>

      <div className="flex">
        <div className="w-2/3 space-y-5">
          <p className="font-bold">First Name</p>
          {editPI ? (
            <textarea
              id="about"
              name="about"
              rows={1}
              className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="First Name"
              defaultValue={firstName}
            />
          ) : (
            <p className="text-gray-600">{firstName}</p>
          )}
          <p className="font-bold">Last Name</p>
          {editPI ? (
            <textarea
              id="about"
              name="about"
              rows={1}
              className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Last Name"
              defaultValue={lastName}
            />
          ) : (
            <p className="text-gray-600">{lastName}</p>
          )}
          <p className="font-bold">Birth Date</p>
          {editPI ? (
            <textarea
              id="about"
              name="about"
              rows={1}
              className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Birth date"
              defaultValue={birthDate}
            />
          ) : (
            <p className="text-gray-600">{birthDate}</p>
          )}
          {editPI && (
            <div className="flex space-x-5">
              <a
                className="text-md text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setEditPI(!editPI)
                }}
              >
                SAVE
              </a>
              <a
                className="text-md text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setEditPI(!editPI)
                }}
              >
                DISCARD
              </a>
              
            </div>
          )}
        </div>
        <div className="w-1/3">
          <img
            className={'object-cover w-full p-' + (editPI ? 10:10) + ' rounded-full'}
            src="https://images.pexels.com/photos/9969430/pexels-photo-9969430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <p className="font-bold text-center">Profile picture</p>
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
        <p className="font-bold">Email</p>
        <textarea
          id="about"
          name="about"
          rows={1}
          className="py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="First name"
        />
        <p className="font-bold">Address</p>
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

