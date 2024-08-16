import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: [],
  reducers: {
    handleAdd: (state, action) => {
      const item = action.payload;
      if (!state.find((i) => i.id === item.id)) {
        state.push(item);
      }
    },
    handleRemove: (state, action) => {
      const itemId = action.payload.id;
      return state.filter((item) => item.id !== itemId);
    },
  },
});

export const { handleAdd, handleRemove } = watchlistSlice.actions;
export default watchlistSlice.reducer;
