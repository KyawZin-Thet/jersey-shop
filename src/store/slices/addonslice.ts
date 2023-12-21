import { AddonSlice } from "@/types/addon";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AddonSlice = {
  items: [],
  isLoading: false,
  error: null,
};
const addon = createSlice({
  name: "addon",
  initialState,
  reducers: {
    setAddon: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { setAddon } = addon.actions;
export default addon.reducer;
