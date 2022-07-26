import { Reorder } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Todo } from '../../interfaces/todoType'
import { RootState } from '../../store'
import { setFilteredTodos } from '../../utilites/setFilteredTodos'
import TodoItem from './Todo/todoItem'
import style from './todoList.module.scss'

export default function TodoList(): JSX.Element {
    const [visibleTodos, setVisibleTodos] = useState<Todo[] | undefined>([])

    const todos = useSelector((state: RootState) => state.todos)
    const filter = useSelector((state: RootState) => state.filter)

    useEffect(() => {
        setVisibleTodos(setFilteredTodos(filter, todos))
    }, [filter, todos])

    if (!visibleTodos) return <></>

    return (
        <Reorder.Group axis="y" values={visibleTodos} onReorder={setVisibleTodos} className={style.todo_list}>
            {visibleTodos.map((todo: Todo) => <Reorder.Item key={todo.id} value={todo}>
                <TodoItem todo={todo} />
            </Reorder.Item>)}
        </Reorder.Group>
    )
}
