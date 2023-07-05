import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/register/registerSlice";
import userProfileReducer from "../features/profile/userProfileSlice";
import loginReducer from "../features/loginSlice"
import authReducer from "../features/auth/authSlice"
import { apiSlice } from "../api/apiSlice";
import refreshTokenReducer from "../features/refreshTokenSlice";
import walletReducer from "../features/walletSlice";
import kycStatusReducer from "../features/kycStatusSlice";
import logoutReducer from "../features/logoutSlice";
import allCurrenciesReducer from "../features/currenciesSlice";
import allRecipientsReducer from '../features/recipientsSlice';



const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        logout: logoutReducer,
        userProfile: userProfileReducer,
        refreshToken: refreshTokenReducer,
        allCurrencies: allCurrenciesReducer,
        allRecipients: allRecipientsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        wallets: walletReducer,
        getKyc: kycStatusReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})


export default store;