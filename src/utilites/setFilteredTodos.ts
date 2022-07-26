import { Todo } from "../interfaces/todoType"

export const setFilteredTodos = (filter: string, todos: Todo[]) => {

    if (!todos.length) return []

    switch (filter) {
        case 'all': return todos
        case 'active': return todos.filter(todo => !todo.completed)
        case 'completed': return todos.filter(todo => todo.completed)
    }
}