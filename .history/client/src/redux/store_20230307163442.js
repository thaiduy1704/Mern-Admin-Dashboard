import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeReducer from "./features/Theme/ThemeSlice";
import dashboardReducer from "./features/Dashboard/DashboardSlice";
import second from "./api";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    dashboard: dashboardReducer,
  },
});
