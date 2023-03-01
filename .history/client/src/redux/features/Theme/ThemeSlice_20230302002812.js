import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
});
