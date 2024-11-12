
import { createSlice } from '@reduxjs/toolkit';
import { ICurrentWord } from '../types/types';




const initialState: ICurrentWord = {
    currentWord: null
}

const initialShufflesSlice = createSlice({
    name: 'initialShuffles',
    initialState: initialState,
    reducers: {

        updateCurrentWord(state, action) {
            state.currentWord = action.payload
        },
    },

});

export const { updateCurrentWord } = initialShufflesSlice.actions
export default initialShufflesSlice.reducer;