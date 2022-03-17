import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import LoginReducer from "./Login";
import LoadingReducer from './Loading'
import ProductsReducer from "./Products";
import RegisterReducer from "./Register";
import CartReducer from './CartSlice'


const persistConfig = {
    key: 'main-root',
    storage,
}

const reducers = combineReducers ({
        login: LoginReducer,
        register: RegisterReducer,
        products: ProductsReducer,
        loading: LoadingReducer,
        cart: CartReducer,
    })

const persistedReducer = persistReducer(persistConfig, reducers)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const Persistor = persistStore(store)

export {Persistor}

export default store