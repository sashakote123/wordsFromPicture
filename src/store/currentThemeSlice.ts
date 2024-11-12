import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IList } from "../types/types";


const initialState: IList = {
    id: 0,
    theme: null,
    array: []
}

const currentThemeSlice = createSlice({
    name: 'current',
    initialState: initialState,
    reducers: {
        changeTheme(state, action: PayloadAction<IList>) {
            state.theme = action.payload.theme
            state.array = action.payload.array
        },
    }
})

export const { changeTheme } = currentThemeSlice.actions
export default currentThemeSlice.reducer;