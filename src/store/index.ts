import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filterSlice from "./filterSlice";
import themeSlice from "./themeSlice";
import todosSlice from "./todosSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        todos: todosSlice,
        filter: filterSlice,
        user: userSlice,
        theme: themeSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch


export default store;