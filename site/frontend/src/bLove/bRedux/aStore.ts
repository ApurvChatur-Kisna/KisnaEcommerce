import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../aAPI/aAPISlice';
import globalSlice from './slices/aGlobalSlice';


const store = configureStore({
  reducer: {
    // Redux Reducer
    [globalSlice.name]: globalSlice.reducer,

    // API Reducer
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    apiSlice.middleware
  ),
  devTools: true,
});

export default store;
