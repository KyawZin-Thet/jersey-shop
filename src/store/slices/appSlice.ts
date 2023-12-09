import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  init: false,
  isLoading: false,
  error: null,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInit: (state, action) => {
      state.init = action.payload;
    },
  },
});

export const { setInit } = appSlice.actions;
export default appSlice.reducer;
