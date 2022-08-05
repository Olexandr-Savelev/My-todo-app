import { combineReducers } from "@reduxjs/toolkit"
import filterSlice from "../slices/filterSlice"
import todosSlice from "../slices/todosSlice"
import UISlice from "../slices/UISlice"
import userSlice from "../slices/userSlice"


const rootReducer = combineReducers({
    todos: todosSlice,
    filter: filterSlice,
    user: userSlice,
    ui: UISlice,
})

export default rootReducer