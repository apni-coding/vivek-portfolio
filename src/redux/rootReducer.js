import { combineReducers } from "redux";
import userSlice from "./slices/userSlice";

const appReducer = combineReducers({
  user: userSlice
});

const rootReducer = (state, action) => {
  // clear all data in redux store while logout action type call
  // if (action.type === logout.type) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
