import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employeePopup: false,
    deletePopup: false,
    highlightPopup: false,
}
const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        openEmployeePopup: (state, action) => {
            state.employeePopup = action.payload ?? true;
        },
        closeEmployeePopup: (state) => {
            state.employeePopup = false;
        },
        openDeletePopup: (state, action) => {
            state.deletePopup = action.payload ?? true;
        },
        closeDeletePopup: (state) => {
            state.deletePopup = false;
        },
        openHighlighPopup: (state) => {
            state.highlightPopup = true;
        },
        closeHighlighPopup: (state) => {
            state.highlightPopup = false;
        }
    }
})

export const { openEmployeePopup, closeEmployeePopup
    , openDeletePopup, closeDeletePopup,
    openHighlighPopup, closeHighlighPopup } = popupSlice.actions;

export default popupSlice.reducer;