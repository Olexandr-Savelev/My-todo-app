import { Todo } from "../interfaces/todoType"

export const setFilteredTodos = (filter: string, todos: Todo[]) => {
    switch (filter) {
        case 'all': return todos
        case 'active': return todos.filter(todo => !todo.completed)
        case 'completed': return todos.filter(todo => todo.completed)
    }
}
