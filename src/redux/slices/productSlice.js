import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => {
    const res = await api.get('/products');
    return res.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: { list: [], loading: true },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
