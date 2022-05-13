import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://course-api.com/react-store-products'

const initialState = {
  productsItems: [],
  isLoading: true,
}

// fetch data with out axios

export const getProductsItems = createAsyncThunk(
  'products/getProductsItems',
  async () => {
    try {
      const response = await axios(url)
      const data = response.data
      return data
    } catch (error) {
      console.log(error.message)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProductsItems.pending]: (state) => {
      state.isLoading = true
    },
    [getProductsItems.fulfilled]: (state, action) => {
      state.productsItems = action.payload
      state.isLoading = false
    },
    [getProductsItems.pending]: (state) => {
      state.isLoading = false
    },
  },
})

export default productsSlice.reducer
