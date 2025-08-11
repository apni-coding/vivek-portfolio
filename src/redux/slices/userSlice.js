import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_END_POINT } from "../../utils/apiEndPoints";
import { GET } from "../../services/axiosRequestHandler";

const userInitialState = {
  isLoading: false,
  error: null,
  loginUserDetails: {},
};

export const getLoginUserDetail = createAsyncThunk(
  "auction/getLoginUserDetail",
  async (_, thunkApi) => {
    try {
      const response = await GET("https://dummyjson.com/products");
      if (response?.status === 200) {
        return response?.data?.data;
      } else {
        return thunkApi.rejectWithValue(response?.response?.data?.message);
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLoginUserDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLoginUserDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginUserDetails = action.payload;
      })
      .addCase(getLoginUserDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.loginUserDetails = {};
      });
  },
});

export default userSlice.reducer;
