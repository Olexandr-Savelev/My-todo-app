import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../interfaces/todoType";

const initialState: Todo[] = []

const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload)
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            return state.filter((todo: Todo) => todo.id !== action.payload)
        },
        toggleComplete: (state, action: PayloadAction<string>) => {
            return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        },
        renameTodo: (state, action: PayloadAction<Todo>) => {
            state.map(todo =>
                todo.id === action.payload.id ?
                    todo.title = action.payload.title : todo
            )
        }
    }
})

export const { addTodo, removeTodo, toggleComplete, renameTodo } = TodoSlice.actions
export default TodoSlice.reducer