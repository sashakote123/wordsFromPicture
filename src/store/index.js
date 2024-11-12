import { configureStore } from "@reduxjs/toolkit";

import accuracySlice from "./accuracySlice";
import streakSlice from "./streakSlice";

import currentThemeSlice from "./currentThemeSlice";
import initialShufflesSlice from "./initialShufflesSlice";


export default configureStore({
    reducer: {
        initialShufflesSlice: initialShufflesSlice,
        accuracy: accuracySlice,
        streak: streakSlice,
        theme: currentThemeSlice,


        // другие редьюсеры
    },

})