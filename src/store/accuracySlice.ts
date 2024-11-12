import { createSlice } from "@reduxjs/toolkit";
import { IAccuracyState } from '../types/types.js'

const initialState: IAccuracyState = {
    errors: 0
}

const accuracySlice = createSlice({
    name: 'accuracy',
    initialState: initialState,
    reducers: {
        addError(state) {
            state.errors++;
        },
        clearErrors(state) {
            state.errors = 0;
        }
    }
})

export const { addError, clearErrors } = accuracySlice.actions
export default accuracySlice.reducer;