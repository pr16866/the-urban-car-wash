import React from 'react'
import Layout from '../../../Components/Layout'

function Package_Activated() {
  return (
    <div>
      <Layout>
        <div className=" flex flex-col text-center mt-[100px] w-screen h-[90vh] md:h-[60vh] items-center justify-center md:p-0 p-3">
          <h1 className=" text-4xl font-bold">
            Booking confirmed
          </h1>
          <span className="text-4xl font-bold my-2">Thank you</span>
          <h3 className="mb-5">
            You can view your bookings in the My booking section.
          </h3>
        </div>
      </Layout>
    </div>
  )
}

export default Package_Activated