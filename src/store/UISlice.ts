import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    theme: "Dark" | "Light",
    isMenuActive: boolean,
}


const initialState: IinitialState = {
    theme: "Dark",
    isMenuActive: false,
}

const UISlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            return {
                ...state,
                theme: state.theme === "Dark" ? "Light" : "Dark"
            }
        },
        toggleMenu: (state) => {
            return {
                ...state,
                isMenuActive: !state.isMenuActive
            }
        },
    }
})

export const { toggleTheme, toggleMenu } = UISlice.actions
export default UISlice.reducer