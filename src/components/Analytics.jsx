import React from 'react'
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-[#fff] py-16 px-4 '>
        {/* container */}
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/'/>
            {/* here is gona be left side of page */}
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df98] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Data Analytics Centrally</h1>
                <p className=''>
                    Dolore elitr ea invidunt invidunt sit sadipscing at consetetur eos, consetetur rebum sanctus lorem dolor sed dolore, voluptua clita eos lorem dolore sit. Accusam dolor ut dolores sed magna. Invidunt.
                </p>
                <button className='bg-[#000] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df98]'>
                  Get Started
                </button>
            </div>

        </div>

    </div>
  )
}

export default Analytics