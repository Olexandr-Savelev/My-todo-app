import { createSlice } from "@reduxjs/toolkit";

const initialState: string = 'Dark'

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            return state === 'Light' ? 'Dark' : 'Light'
        }
    }
})

export const { toggleTheme } = ThemeSlice.actions
export default ThemeSlice.reducer