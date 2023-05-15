import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchQuery: "",
    imageType: "",
    orientation: "",
    minWidth: null,
    minHeight: null,
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setImageType: (state, action) => {
            state.imageType = action.payload;
        },
        setOrientation: (state, action) => {
            state.orientation = action.payload;
        },
        setMinWidth: (state, action) => {
            state.minWidth = action.payload;
        },
        setMinHeight: (state, action) => {
            state.minHeight = action.payload;
        }
    }
});

export const { 
    setSearchQuery,
    setImageType,
    setOrientation,
    setMinWidth,
    setMinHeight,
} = searchSlice.actions;

export default searchSlice.reducer;