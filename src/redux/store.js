import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './api/getUsersData'
import modalReducer from './slices/modalSlice'

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        modal: modalReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
})
