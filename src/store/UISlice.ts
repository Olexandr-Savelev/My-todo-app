import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    theme: "Dark" | "Light",
    dropDownMenu: "Close" | "Open",
}


const initialState: IinitialState = {
    theme: "Dark",
    dropDownMenu: "Close"
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
                dropDownMenu: state.dropDownMenu === "Close" ? "Open" : "Close"
            }
        },
    }
})

export const { toggleTheme, toggleMenu } = UISlice.actions
export default UISlice.reducer