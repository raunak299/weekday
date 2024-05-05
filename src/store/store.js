import { configureStore } from "@reduxjs/toolkit";
import dataStore from "./data-slice";

const store = configureStore({
  reducer: { dataStore },
});

export default store;
