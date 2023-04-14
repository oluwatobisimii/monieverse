import React from 'react'
import { Link } from 'react-router-dom'
import send from '../../assets/icons/PaperPlaneTilt.svg'

const MobileNav = () => {
  return (
    <div className="lg:hidden fixed bottom-10 rounded-full mobileBar mx-4 w-[calc(100%-32px)] flex p-2 justify-between">
        <Link to='/' className="px-6 py-2 bg-primary-100 hover:cursor-pointer rounded-full">
          <p className="text-sm text-primary-600 font-medium">Home</p>
        </Link>
        <div className="px-6 py-2 rounded-full hover:cursor-pointer">
          <p className="text-sm text-gray-400 font-medium">Recipients</p>
        </div>
          <Link to='/move-money' className="bg-primary-400 py-2 px-5 text-sm text-gray-0 font-medium rounded-full flex items-center gap-2">
          Move Money
          <img src={send} alt="" />
        </Link>
    </div>
  )
}

export default MobileNav