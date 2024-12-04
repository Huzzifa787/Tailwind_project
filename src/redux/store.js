import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/CounterSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import sessionStorage from 'redux-persist/es/storage/session';

// Redux Persist configuration
const persistConfig = {
  key: "root", 
  storage, 
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, counterReducer);
const store = configureStore({
  reducer: {
    
    counter : persistedReducer,
  },
})
// console.log("Storage is  :  ",storage);
export const persistor = persistStore(store);
export default store;