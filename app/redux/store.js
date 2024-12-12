const { configureStore, combineReducers } = require("@reduxjs/toolkit");
import CartSlice from './slices/CartSlice';
import productSlice from './slices/products';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',  // The key to store the persisted state in storage
  storage,      // We're using localStorage here, but you can use sessionStorage or others
  whitelist: ['products'], // Only persist the 'products' slice (you can add others here)
};

const rootReducer = combineReducers({
  products: persistReducer(persistConfig, productSlice), // persist the product slice
  cart: persistReducer(persistConfig, CartSlice)
});


const store = configureStore({
    reducer : rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

const persistor = persistStore(store);

export { store,persistor };