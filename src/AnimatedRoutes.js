import React from 'react'

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";


import Register from './Pages/AuthPages/Registration/Register';
import Login from './Pages/AuthPages/Login';
import Dashboard from './Pages/Dashboard';
// import ProtectedRoutes from './components/ProtectedRoutes';
import ForgotPassword from './Pages/AuthPages/ForgotPassword';
import VerifyAccount from './Pages/AuthPages/Registration/VerifyAccount';

import MoveMoney from './Pages/MoveMoney';
import AvailableBalance from './Pages/AvailableBalance';
import KYCScreen from './Pages/KYCScreen';
import RecipientsScreen from './Pages/RecipientsScreen';
import UserSettingsScreen from './Pages/UserSettingsScreen';
import PersonalInformation from './components/UserSettings/PersonalInformation';
import NotificationSecurity from './components/UserSettings/NotificationSecurity';
import Limits from './components/UserSettings/Limits';
import PaymentCard from './Pages/PaymentCard';
import TransactionsScreen from './Pages/TransactionsScreen';
import ConvertScreen from './Pages/ConvertScreen';
import SuccessfulAction from './components/Complete/SuccessfulAction';
import ProtectedRoutes from "./components/ProtectedRoutes";


function AnimatedRoutes() {

  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/success-page" element={<SuccessfulAction />} />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/move-money" element={<MoveMoney />} />
          <Route path="/convert" element={<ConvertScreen />} />
          <Route path="/available-balance/:currency_id" element={<AvailableBalance />} />
          <Route path="/transactions" element={<TransactionsScreen />} />
          <Route path="/kyc" element={<KYCScreen />} />
          <Route path="/recipients" element={<RecipientsScreen />} />
          <Route path="/payment-card" element={<PaymentCard />} />
          <Route path="/settings" element={<UserSettingsScreen />}>
            <Route path="/settings" element={<PersonalInformation />} />
            <Route path="/settings/notification" element={<NotificationSecurity />} />
            <Route path="/settings/limits" element={<Limits />} />
          </Route>

        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes