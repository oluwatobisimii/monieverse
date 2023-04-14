import React from 'react'
import DashboardNav from '../components/NavBar/DashboardNav'
import Balances from '../components/Balance/Balances'
import Transactions from '../components/Transaction/Transactions'
import Rate from '../components/Rates/Rate'
import MobileNav from '../components/NavBar/MobileNav'

const Dashboard = () => {
  return (
    <>
 <MobileNav/>
    <DashboardNav/>
     <Balances/>
     <Transactions/>
     <Rate/>
    </>
  )
}

export default Dashboard