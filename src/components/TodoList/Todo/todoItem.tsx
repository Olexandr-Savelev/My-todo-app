import React from 'react'
import { Todo } from '../../../interfaces/todoType'
import { useAppDispatch } from '../../../store';
import { removeTodo, toggleComplete } from '../../../store/todosSlice';
import style from './todoItem.module.scss'

type TodoItem = {
    todo: Todo
}

const TodoItem: React.FC<TodoItem> = ({ todo }) => {

    const dispatch = useAppDispatch()

    return (
        <div className={style.wrapper}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleComplete(todo.id))}
            />
            <h3>{todo.title}</h3>
            <span onClick={() => dispatch(removeTodo(todo.id))}>&times;</span>
        </div>
    )
}

export default TodoItem;