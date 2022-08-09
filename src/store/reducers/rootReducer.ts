import { AnyAction, combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import filterSlice from "../slices/filterSlice"
import todosSlice from "../slices/todosSlice"
import UISlice from "../slices/UISlice"
import userSlice from "../slices/userSlice"


const appReducer = combineReducers({
    todos: todosSlice,
    filter: filterSlice,
    user: userSlice,
    ui: UISlice,
})

const rootReducer = (state: any, action: AnyAction) => {
    if (action.type === 'user/removeUser') {
        storage.removeItem('persist:root')
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export default rootReducer