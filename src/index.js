import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './app/store';



import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './Pages/AuthPages/Register';
import Login from './Pages/AuthPages/Login';
import Dashboard from './Pages/Dashboard';
import ProtectedRoutes from './components/ProtectedRoutes';
import ForgotPassword from './Pages/AuthPages/ForgotPassword';
import VerifyAccount from './Pages/AuthPages/VerifyAccount';

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
import { Provider } from 'react-redux';
import SuccessfulAction from './components/Complete/SuccessfulAction';

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
    children: [

    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/verify-account',
    element: <VerifyAccount />
  },
  {
    path: '/success-page',
    element: <SuccessfulAction />
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/move-money",
        element: <MoveMoney />
      },
      {
        path: "/convert",
        element: <ConvertScreen />
      },
      {
        path: "/available-balance",
        element: <AvailableBalance />
      },
      {
        path: "/transactions",
        element: <TransactionsScreen />
      },
      {
        path: "/kyc",
        element: <KYCScreen />
      },
      {
        path: "/recipients",
        element: <RecipientsScreen />
      },
      {
        path: "/payment-card",
        element: <PaymentCard />
      },
      {
        path: "/settings",
        element: <UserSettingsScreen />,
        children: [
          {
            path: "/settings/",
            element: <PersonalInformation />
          },
          {
            path: "/settings/notification",
            element: <NotificationSecurity />
          },
          {
            path: "/settings/limits",
            element: <Limits />
          },
        ]
      },

    ]
  },


]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
