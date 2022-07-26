import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = 'all'

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<string | undefined>) => {
            return action.payload
        }
    }
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer