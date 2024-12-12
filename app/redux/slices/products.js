import { products } from "@/app/constant";
import { fetchAllProductsAPI, fetchProductDetailAPI } from "../api/products"
import { setCartCount } from "./CartSlice";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit")


const initialState = {
    products: [],
    loading: false,
    error: null,
    singleProduct: null,
};

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async( filters, { rejectWithValue }) => {
        try {
            const res = await fetchAllProductsAPI(filters)
            return res;
        } catch (error){
            console.error("erro", error.response)
            return rejectWithValue(error?.response?.data)
        }
    }
)

export const fetchProductDetail = createAsyncThunk(
  'products/fetchProductDetail',
  async( id, { rejectWithValue }) => {
      try {
        console.log('first')
          const res = await fetchProductDetailAPI(id)
          console.log('res')
          return res;
      } catch (error){
          console.error("erro", error.response)
          return rejectWithValue(error?.response?.data)
      }
  }
)

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      // Define extra reducers here
      clearProducts: (state) => {
        console.log(state.products, '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
        state.products = [];
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllProducts.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.singleProduct = {}
        })
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
        })
        .addCase(fetchAllProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });

        builder
        .addCase(fetchProductDetail.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.singleProduct = {}
        })
        .addCase(fetchProductDetail.fulfilled, (state, action) => {
          state.loading = false;
          state.singleProduct = action.payload;
        })
        .addCase(fetchProductDetail.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
}


});

export const { clearProducts } = productSlice.actions;
export default productSlice.reducer;






