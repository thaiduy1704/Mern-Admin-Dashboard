import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeReducer from "./features/Theme/ThemeSlice";
import dashboardReducer from "./features/Dashboard/DashboardSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
