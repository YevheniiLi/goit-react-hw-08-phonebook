import { createSlice } from '@reduxjs/toolkit';

const searchInitialState = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
