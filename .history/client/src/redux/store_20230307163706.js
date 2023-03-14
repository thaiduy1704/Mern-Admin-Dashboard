import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeReducer from "./features/Theme/ThemeSlice";
import dashboardReducer from "./features/Dashboard/DashboardSlice";
import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    dashboard: dashboardReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
