import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/register/registerSlice";
import userProfileReducer from "../features/profile/userProfileSlice";
import loginReducer from "../features/loginSlice"
import authReducer from "../features/auth/authSlice"
import { apiSlice } from "../api/apiSlice";
import refreshTokenReducer from "../features/refreshTokenSlice";
import allCurrenciesReducer from "../features/currenciesSlice";


const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        userProfile: userProfileReducer,
        refreshToken: refreshTokenReducer,
        allCurrencies: allCurrenciesReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})


export default store;