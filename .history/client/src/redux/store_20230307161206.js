import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeReducer from "./features/Theme/ThemeSlice";
import second from "./features/Dashboard/DashboardSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
