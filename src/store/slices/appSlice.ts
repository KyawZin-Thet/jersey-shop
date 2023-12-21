import { GetAppDataOptions } from "@/types/app";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  init: false,
  isLoading: false,
  error: null,
};

export const fetchAppData = createAsyncThunk(
  "app/fetchAppData",
  async (options: GetAppDataOptions, thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}/app`);
    const data = await response.json();
    thunkApi.dispatch(setInit(true));
  }
);

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
