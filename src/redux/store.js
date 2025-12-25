import { configureStore } from "@reduxjs/toolkit";

import popupReducer from "./reducer/popup/popupReducer";
import employeeReducer from './reducer/employee/employeeSlice'

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    employee:employeeReducer
  }
});