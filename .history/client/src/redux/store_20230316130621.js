import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeReducer from "./features/Theme/ThemeSlice";
import dashboardReducer from "./features/Dashboard/DashboardSlice";
import { api } from "./api";


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    dashboard: dashboardReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
