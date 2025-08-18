import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_END_POINT } from "../../utils/apiEndPoints";
import { GET } from "../../services/axiosRequestHandler";

const userInitialState = {
  isLoading: false,
  error: null,
  loginUserDetails: {},
};

export const getLoginUserDetail = createAsyncThunk(
  "user/getLoginUserDetail",
  async (_, thunkApi) => {
    try {
      const response = await GET(API_END_POINT.START_SERVER);
      if (response?.status === 200) {
        return response?.data?.data;
      } else {
        return thunkApi.rejectWithValue(response?.response?.data?.message);
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState();
      // Prevent re-fetch if we already have user details
      if (user.loginUserDetails && Object.keys(user.loginUserDetails).length > 0) {
        return false;
      }
    },
  }
);


export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    resetUser: (state) => {
      state.loginUserDetails = {};
      state.error = null;
      state.isLoading = false;
    },
  },
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

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
