import { motion } from 'framer-motion';
import React from 'react'
import { Todo } from '../../../interfaces/todoType'
import { useAppDispatch } from '../../../store';
import { removeTodo, toggleComplete } from '../../../store/todosSlice';
import style from './todoItem.module.scss'

type ITodoItemProps = {
    todo: Todo
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {

    const dispatch = useAppDispatch()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={style.wrapper}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleComplete(todo.id))}
            />
            <h3>{todo.title}</h3>
            <span onClick={() => dispatch(removeTodo(todo.id))}>&times;</span>
        </motion.div>
    )
}

export default TodoItem;