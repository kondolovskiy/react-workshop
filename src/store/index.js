import {configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/searchSlice';
import imagesListReducer from './features/imagesListSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        imagesList: imagesListReducer,
    }
});
