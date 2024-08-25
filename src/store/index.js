import { configureStore } from "@reduxjs/toolkit";

import accuracySlice from "./accuracySlice";
import streakSlice from "./streakSlice";

import currentThemeSlice from "./currentThemeSlice";
import initialShufflesSlice from "./initialShufflesSlice";

import cardWordSlice from "./cardWordSlice";


export default configureStore({
    reducer: {
        word: cardWordSlice,
        initialShufflesSlice: initialShufflesSlice,
        accuracy: accuracySlice,
        streak: streakSlice,
        theme: currentThemeSlice,


        // другие редьюсеры
    },

})