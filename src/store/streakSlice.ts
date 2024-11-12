import { createSlice } from "@reduxjs/toolkit";
import { ICounterState } from "../types/types";

const initialState: ICounterState = {
    streak: 0,
}

const streakSlice = createSlice({
    name: 'streak',
    initialState: initialState,

    reducers: {
        addStreak(state) {
            state.streak++;
        },
        breakStreak(state) {
            state.streak = 0;
        }
    }
})

export const { addStreak, breakStreak } = streakSlice.actions
export default streakSlice.reducer;