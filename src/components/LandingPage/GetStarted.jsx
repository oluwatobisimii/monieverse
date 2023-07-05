import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <section className='onboarding-gradient font-inter'>
        <div className='container mx-auto p-4 md:p-8 lg:p-10 lg:py-[120px] py-12'>
            <p className='font-clashGrotesk text-d-sm md:text-d-md lg:text-d-lg font-medium text-primary-600'>Get Started on Monieverse</p>
            <div className="h-4"></div>
            <p className=' text-md lg:text-lg md:w-[60%] text-gray-500'>Monieverse is a legally registered company under the applicable laws and regulations of the jurisdictions in which we operate. </p>
            <div className="h-10"></div>
            <Link to="/register" className="bg-primary-400 hover:bg-primary-500 rounded-xl py-4 px-6 text-gray-0 text-sm md:text-md font-medium">Create a free account</Link>

        </div>
    </section>
  )
}

export default GetStarted