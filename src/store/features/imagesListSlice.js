import { createSlice } from "@reduxjs/toolkit";
import { getImages } from "../../api";

const initialState = {
    imagesList: [],
    isLoading: false,
    error: null,
    totalPages: 0,
    currentPage: 1,
};

export const imagesListSlice = createSlice({
    name: "imagesList",
    initialState,
    reducers: {
        setImagesList: (state, action) => {
            state.imagesList = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload / 20;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
});

export const { 
    setImagesList, 
    setIsLoading, 
    setError, 
    setTotalPages,
    setCurrentPage
} = imagesListSlice.actions;

export const fetchImagesList = ({ 
    searchQuery, 
    page,
    orientation,
    imageType,
    minWidth,
    minHeight
}) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        const data = await getImages({ 
            queryString: searchQuery, 
            page,
            orientation,
            image_type: imageType,
            min_width: minWidth,
            min_height: minHeight, 
        });
        dispatch(setImagesList(data.hits));
        dispatch(setTotalPages(data.totalHits));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}


export default imagesListSlice.reducer;