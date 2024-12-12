import { LoadCartCountFromLocalStorage, LoadCartFromLocalStorage, saveCartToLocalStorage } from "@/app/utilities/common";

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartCount: LoadCartCountFromLocalStorage() || 0,
        cartProduct: LoadCartFromLocalStorage() || []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartCount +=1;
            console.log(action.payload, 'actttt')
            const productId = action.payload;
            const existingProduct = state.cartProduct.find(item => item.id === productId);
            if (existingProduct) {
                existingProduct.quantity +=1;
            } else {
                state.cartProduct.push({ id: productId , quantity: 1 })
            }
            saveCartToLocalStorage(state.cartCount, state.cartProduct);
        },
        setCartCount: (state,action) => {
            state.cartCount = action.payload;
            saveCartToLocalStorage(state.cartCount); 
        },
        resetCart: (state) => {
            // Reset the Redux state
            state.cartCount = 0;
            state.cartProduct = [];
            
            // Clear the data from localStorage
            localStorage.removeItem('cartCount');
            localStorage.removeItem('cartProducts');
          },
          setCart: (state, action) => {
            state.cartProduct = action.payload;
            saveCartToLocalStorage(state.cartCount, state.cartProduct);  // Save to localStorage
          },
    }
});

export const { addToCart, setCartCount, resetCart } = cartSlice.actions;
export default cartSlice.reducer;